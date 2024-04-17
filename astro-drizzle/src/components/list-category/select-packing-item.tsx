import React from "react";
import DeleteButton from "../base/delete-button";
import { useMutation } from "@tanstack/react-query";
import { CacheKeys, queryClient } from "@/lib/query";
import { useParams } from "react-router-dom";
import { toast } from "sonner";
import { cn } from "@/lib/utils";
import { formatWeight } from "@/lib/helpers";

import { Checkbox } from "../ui/checkbox";
import { trpc } from "@/client";
import type { Item } from "@/db/schema";

interface Props {
  item: Item;
  selected: boolean;
  onSelect: (id: string) => void;
}

const SelectPackingItem: React.FC<Props> = (props) => {
  const { item, selected, onSelect } = props;
  const { listId } = useParams();

  const itemName = item.name || "Unnamed Gear";

  const deleteToastId = React.useRef<string | number | undefined>();
  const deleteItemMutation = useMutation({
    mutationFn: () => trpc.items.delete.mutate(item.id),
    onMutate: () => {
      deleteToastId.current = toast.loading("Deleting item...");
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [CacheKeys.Items] });
      queryClient.invalidateQueries({ queryKey: [CacheKeys.Lists, listId] });
      toast.success(`${itemName} deleted successfully`, {
        id: deleteToastId.current,
      });
    },
    onError: (error) => {
      toast.error(error.message, { id: deleteToastId.current });
    },
  });

  return (
    <div
      onClick={() => onSelect(item.id)}
      className={cn(
        "flex gap-3 items-center w-full text-sm hover:bg-secondary px-2 py-2",
        selected && "bg-secondary/50"
      )}
    >
      <Checkbox checked={selected} />
      <div className="flex flex-col flex-1">
        <span className={cn(!item.name && "italic text-muted-foreground")}>
          {itemName}
        </span>
        <span className="text-muted-foreground">{item.description}</span>
      </div>
      <span className="text-muted-foreground flex gap-1">
        <span>{formatWeight(item.weight)}</span>
        <span>{item.weightUnit}</span>
      </span>
      <DeleteButton handleDelete={() => deleteItemMutation.mutate()} />
    </div>
  );
};

export default SelectPackingItem;
