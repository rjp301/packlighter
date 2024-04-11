import { createList, getLists, updateListsOrder } from "@/actions/list";
import { CacheKeys, fetchSafely, queryClient } from "@/lib/query";
import { Plus } from "lucide-react";
import React from "react";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import PackingList from "./packing-list";
import Loader from "../base/loader";
import Error from "../base/error";

import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  type DragEndEvent,
  DragOverlay,
  type DragStartEvent,
  TouchSensor,
} from "@dnd-kit/core";
import { restrictToVerticalAxis } from "@dnd-kit/modifiers";
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { cn, getPaths } from "@/lib/utils";
import Placeholder from "../base/placeholder";
import { type List } from "@/db/schema";
import { trpc } from "@/client";

export default function PackingLists(): ReturnType<React.FC> {
  const navigate = useNavigate();

  const [activeList, setActiveList] = React.useState<List | null>(null);

  const listsQuery = useQuery({
    queryKey: [CacheKeys.List],
    queryFn: () => trpc.lists.get.query(),
  });

  const newListMutation = useMutation({
    mutationFn: createList,
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: [CacheKeys.List] });
      navigate(getPaths.list(data.id));
    },
  });

  const reorderListsMutation = useMutation({
    mutationFn: (lists: List[]) => updateListsOrder(lists.map((i) => i.id)),
    onMutate: async (newLists) => {
      await queryClient.cancelQueries({ queryKey: [CacheKeys.List] });
      const previousLists = queryClient.getQueryData([CacheKeys.List]);
      queryClient.setQueryData([CacheKeys.List], newLists);
      return { previousLists };
    },
    onError: (_, __, context) => {
      if (context?.previousLists)
        queryClient.setQueryData([CacheKeys.List], context.previousLists);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [CacheKeys.List] });
    },
  });

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    }),
    useSensor(TouchSensor)
  );

  function handleDragStart(event: DragStartEvent) {
    if (!listsQuery.isSuccess) return;
    const active = listsQuery.data.find((i) => i.id === event.active.id);
    if (active) setActiveList(active);
  }

  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event;
    setActiveList(null);
    if (active.id === over?.id || !listsQuery.isSuccess) return;

    const oldIndex = listsQuery.data.findIndex((i) => i.id === active.id);
    const newIndex = listsQuery.data.findIndex((i) => i.id === over?.id);

    const newData = arrayMove(listsQuery.data, oldIndex, newIndex);
    reorderListsMutation.mutate(newData);
  }

  return (
    <div className="flex flex-col h-full gap-2 p-4">
      <header className="flex items-center justify-between">
        <span className="font-semibold text-sm">Lists</span>
        <Button
          size="sm"
          variant="linkMuted"
          onClick={() => newListMutation.mutate()}
        >
          <Plus size="1rem" className="mr-2" />
          Add List
        </Button>
      </header>
      <Card
        className={cn(
          "py-2 h-full overflow-y-auto overflow-x-hidden transition-colors",
          activeList && "border-primary"
        )}
      >
        {listsQuery.isLoading && <Loader />}
        {listsQuery.isError && <Error error={listsQuery.error} />}
        {listsQuery.isSuccess && (
          <DndContext
            sensors={sensors}
            collisionDetection={closestCenter}
            onDragEnd={handleDragEnd}
            onDragStart={handleDragStart}
            modifiers={[restrictToVerticalAxis]}
          >
            <SortableContext
              id="packing-lists"
              items={listsQuery.data}
              strategy={verticalListSortingStrategy}
            >
              {listsQuery.data?.map((list) => (
                <PackingList key={list.id} list={list} />
              ))}
            </SortableContext>
            <DragOverlay dropAnimation={null}>
              {activeList && <PackingList list={activeList} isOverlay />}
            </DragOverlay>
          </DndContext>
        )}
        {listsQuery.isSuccess && listsQuery.data.length === 0 && (
          <Placeholder message="No lists yet" />
        )}
      </Card>
    </div>
  );
}