import { pb } from "@/lib/pocketbase";
import { createMutation, type QueryClient } from "@tanstack/svelte-query";
import type { RecordModel } from "pocketbase";
import type { ExpandedCategory } from "./useList";
import { isCategoryFullyPacked } from "@/lib/helpers";
import { currentList } from "@/lib/store";

export const useUpdateCategory = (queryClient: QueryClient) =>
  createMutation({
    mutationFn: (category: RecordModel) =>
      pb.collection("list_categories").update(category.id, category),
    onSuccess: () =>
      currentList.subscribe((listId) => {
        queryClient.invalidateQueries({ queryKey: ["list", listId] });
      }),
  });

export const useDeleteCategory = (queryClient: QueryClient) =>
  createMutation({
    mutationFn: (category: RecordModel) =>
      pb.collection("list_categories").delete(category.id),
    onSuccess: () =>
      currentList.subscribe((listId) => {
        queryClient.invalidateQueries({ queryKey: ["list", listId] });
      }),
  });

export const useCreateCategory = (queryClient: QueryClient) =>
  createMutation({
    mutationFn: (listId: string) =>
      pb.collection("list_categories").create({ list: listId }),
    onSuccess: () =>
      currentList.subscribe((listId) => {
        queryClient.invalidateQueries({ queryKey: ["list", listId] });
      }),
  });

export const useToggleCategoryPacked = (queryClient: QueryClient) =>
  createMutation({
    mutationFn: (category: ExpandedCategory) => {
      const isFullyPacked = isCategoryFullyPacked(category);
      return Promise.all(
        category.items.map((i) =>
          pb
            .collection("categories_items")
            .update(i.id, { packed: !isFullyPacked })
        )
      );
    },
    onSuccess: () =>
      currentList.subscribe((listId) => {
        queryClient.invalidateQueries({ queryKey: ["list", listId] });
      }),
  });
