import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";

import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  useSensor,
  useSensors,
  MouseSensor,
  TouchSensor,
  DragEndEvent,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { Grabber } from "./Grabber";

interface ILink {
  name: string;
  link: string;
  class?: string;
}

interface ILinkItemProps<T> {
  id: string;
  item: T;
  createLink: (item: T) => ILink;
}

function LinkItem<T>({ item, createLink, ...props }: ILinkItemProps<T>) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: props.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  const link = createLink(item);

  return (
    <li
      className="grid grid-cols-[auto_1fr] items-center gap-2 py-2"
      ref={setNodeRef}
      style={style}
    >
      <Grabber attributes={attributes} listeners={listeners} />
      <a
        className={cn({ "opacity-50": !link.name }, link.class)}
        href={link.link}
      >
        <div className="text-sm flex w-full justify-between items-center">
          {link.name}
          <ChevronRight className="text-muted-foreground" />
        </div>
      </a>
    </li>
  );
}

interface IProps<T> {
  items: T[];
  setItems: (items: T[]) => void;
  createLink: (item: T) => ILink;
}

export function LinkList<T extends { id: string }>({
  items,
  setItems,
  createLink,
}: IProps<T>) {
  const sensors = useSensors(
    useSensor(MouseSensor, {
      // Require the mouse to move by 10 pixels before activating
      activationConstraint: {
        distance: 3,
      },
    }),
    useSensor(TouchSensor, {
      // Press delay of 250ms, with tolerance of 5px of movement
      activationConstraint: {
        delay: 100,
        tolerance: 5,
      },
    }),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (active.id !== over?.id) {
      const oldIndex = items.findIndex((item) => item.id === active.id);
      const newIndex = items.findIndex((item) => item.id === over?.id);
      setItems(arrayMove(items, oldIndex, newIndex));
    }
  };

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
    >
      <ul className="grid border rounded-md px-2 bg-background divide-y">
        <SortableContext items={items} strategy={verticalListSortingStrategy}>
          {items.map((item) => (
            <LinkItem
              id={item.id}
              key={item.id}
              item={item}
              createLink={createLink}
            />
          ))}
        </SortableContext>
      </ul>
    </DndContext>
  );
}
