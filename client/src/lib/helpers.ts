import type {
  ExpandedCategory,
  ExpandedCategoryItem,
  ListWithCategories,
} from "@/hooks/useList";
import type { RecordModel } from "pocketbase";
import { Collections, type ItemsResponse } from "./types";

export const isCategoryFullyPacked = (category: ExpandedCategory) =>
  category.items.length > 0 && category.items.every((i) => i.packed);

export const isItemUntouched = (item: ExpandedCategoryItem) =>
  !item.itemData.name &&
  !item.itemData.name &&
  !item.itemData.image_url &&
  item.quantity === 1 &&
  !item.packed;

export const massUnits = ["g", "kg", "oz", "lb"] as const;
export type MassUnit = (typeof massUnits)[number];

export const getWeightInGrams = (weight: number, unit: MassUnit) => {
  if (unit === "g") return weight;
  if (unit === "kg") return weight * 1000;
  if (unit === "oz") return weight * 28.3495;
  if (unit === "lb") return weight * 453.592;
  return 0;
};

export const getWeightInUnit = (weight: number, unit: MassUnit) => {
  if (unit === "g") return weight;
  if (unit === "kg") return weight / 1000;
  if (unit === "oz") return weight / 28.3495;
  if (unit === "lb") return weight / 453.592;
  return 0;
};

export const createItemTemplateCols = (
  list: ListWithCategories,
  isItem: boolean,
): string => {
  const cols: string[] = [
    ...(list.show_packed ? ["auto"] : []),
    ...(isItem && list.show_images ? ["auto"] : []),
    "1fr", // name and description
    ...(list.show_weights ? ["6rem"] : []),
    "2.5rem", // quantity
    "auto", // delete button
    "auto", // gripper
  ];
  return cols.join(" ");
};

export const getListItemIds = (list: ListWithCategories): string[] =>
  list.categories.map((c) => c.items.map((i) => i.item)).flat();

export const createTempCategoryItem = (
  item: ItemsResponse,
): ExpandedCategoryItem => {
  return {
    id: "temp",
    category: "temp",
    collectionId: "sydktarhcp2ongv",
    itemData: item,
    quantity: 1,
    packed: false,
    item: item.id,
    cons_weight: false,
    sort_order: 0,
    worn_weight: false,
    created: new Date().toISOString(),
    updated: new Date().toISOString(),
    collectionName: Collections.CategoriesItems,
  };
};
