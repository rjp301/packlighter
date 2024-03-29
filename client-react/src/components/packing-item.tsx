import { Collections, ItemsResponse } from "@/lib/types";
import React from "react";
import DeleteButton from "./base/delete-button";
import { useMutation } from "react-query";
import { deleteItem } from "@/api/item";
import { queryClient } from "@/lib/query";
import { useParams } from "react-router-dom";
import { toast } from "sonner";
import { cn } from "@/lib/utils";
import { formatWeight } from "@/lib/helpers";
import Gripper from "./base/gripper";
import { useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";
import { ActiveDraggable } from "./app-dnd-wrapper";

interface Props {
  item: ItemsResponse;
  isOverlay?: boolean;
}

const PackingItem: React.FC<Props> = (props) => {
  const { item, isOverlay } = props;
  const { listId } = useParams();

  const sortableData: ActiveDraggable = {
    type: "item",
    data: item,
  };

  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: item.id,
    data: sortableData,
  });
  const style = { transform: CSS.Translate.toString(transform) };

  const deleteItemMutation = useMutation({
    mutationFn: () => deleteItem(item.id),
    onSuccess: () => {
      queryClient.invalidateQueries([Collections.Items]);
      queryClient.invalidateQueries([Collections.Lists, listId]);
      toast.success(`${item.name || "Unnamed Gear"} deleted successfully`);
    },
  });

  return (
    <div
      ref={setNodeRef}
      style={style}
      className={cn(
        "flex gap-2 items-center w-full text-sm hover:bg-secondary px-2 py-2",
        isOverlay && "rounded outline outline-1 outline-ring"
      )}
    >
      <Gripper {...attributes} {...listeners} />
      <div className="flex flex-col flex-1">
        <span className={cn(!item.name && "italic text-muted-foreground")}>
          {item.name || "Unnamed Gear"}
        </span>
        <span className="text-muted-foreground">{item.description}</span>
      </div>
      <span className="text-muted-foreground flex gap-1">
        <span>{formatWeight(item.weight)}</span>
        <span>{item.weight_unit}</span>
      </span>
      <DeleteButton handleDelete={() => deleteItemMutation.mutate()} />
    </div>
  );
};

export default PackingItem;
