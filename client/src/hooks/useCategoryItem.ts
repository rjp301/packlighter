import { createMutation } from "@tanstack/svelte-query";
import type {
  ExpandedCategory,
  ExpandedCategoryItem,
  ListWithCategories,
} from "./useList";
import { pb } from "@/lib/pocketbase";
import { isItemUntouched } from "@/lib/helpers";
import type { RecordModel } from "pocketbase";
import { currentList } from "@/lib/store";

import { queryClient } from "@/lib/query";
import { Collections } from "@/lib/types";

export const useUpdateCategoryItem = () =>
  createMutation({
    mutationFn: (variables: {
      id: string;
      categoryItem: Partial<ExpandedCategoryItem>;
    }) => {
      const { categoryItem } = variables;
      const p1 = pb
        .collection(Collections.CategoriesItems)
        .update(variables.id || "", variables.categoryItem);
      const p2 = categoryItem.item
        ? pb
            .collection(Collections.Items)
            .update(categoryItem.item, categoryItem.itemData)
        : Promise.resolve();
      return Promise.all([p1, p2]);
    },
    onSuccess: () =>
      currentList.subscribe((listId) => {
        queryClient.invalidateQueries({ queryKey: ["list", listId] });
        queryClient.invalidateQueries({ queryKey: ["items"] });
      }),
  });

export const useDeleteCategoryItem = () =>
  createMutation({
    mutationFn: (categoryItem: ExpandedCategoryItem) =>
      Promise.all([
        pb.collection(Collections.CategoriesItems).delete(categoryItem.id),
        isItemUntouched(categoryItem)
          ? pb.collection(Collections.Items).delete(categoryItem.itemData.id)
          : Promise.resolve(),
      ]),
    onSuccess: () =>
      currentList.subscribe((listId) => {
        queryClient.invalidateQueries({ queryKey: ["list", listId] });
        queryClient.invalidateQueries({ queryKey: ["items"] });
      }),
  });

export const useCreateCategoryItem = () =>
  createMutation({
    mutationFn: (variables: { category: ExpandedCategory; itemId?: string }) =>
      variables.itemId
        ? pb.collection(Collections.CategoriesItems).create({
            category: variables.category.id,
            item: variables.itemId,
            quantity: 1,
            sort_order: variables.category.items.length,
          })
        : pb
            .collection(Collections.Items)
            .create({ user: pb.authStore.model?.id })
            .then((item) =>
              pb.collection(Collections.CategoriesItems).create({
                category: variables.category.id,
                item: item.id,
                quantity: 1,
                sort_order: variables.category.items.length,
              }),
            ),
    onSuccess: () =>
      currentList.subscribe((listId) => {
        queryClient.invalidateQueries({ queryKey: ["list", listId] });
        queryClient.invalidateQueries({ queryKey: ["items"] });
      }),
  });

export const useUpdateCategoryItemsOrder = () =>
  createMutation({
    mutationFn: (variables: { categoryItemIds: string[] }) =>
      Promise.all(
        variables.categoryItemIds.map((id, index) =>
          pb
            .collection(Collections.CategoriesItems)
            .update(id, { sort_order: index }),
        ),
      ),
    onSuccess: () =>
      currentList.subscribe((listId) => {
        queryClient.invalidateQueries({ queryKey: ["list", listId] });
      }),
  });
