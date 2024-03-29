/**
* This file was @generated using pocketbase-typegen
*/

import type PocketBase from 'pocketbase'
import type { RecordService } from 'pocketbase'

export enum Collections {
	CategoriesItems = "categories_items",
	ItemTags = "item_tags",
	Items = "items",
	ListCategories = "list_categories",
	Lists = "lists",
	Users = "users",
}

// Alias types for improved usability
export type IsoDateString = string
export type RecordIdString = string
export type HTMLString = string

// System fields
export type BaseSystemFields<T = never> = {
	id: RecordIdString
	created: IsoDateString
	updated: IsoDateString
	collectionId: string
	collectionName: Collections
	expand?: T
}

export type AuthSystemFields<T = never> = {
	email: string
	emailVisibility: boolean
	username: string
	verified: boolean
} & BaseSystemFields<T>

// Record types for each collection

export type CategoriesItemsRecord = {
	category: RecordIdString
	cons_weight?: boolean
	item: RecordIdString
	packed?: boolean
	quantity?: number
	sort_order?: number
	worn_weight?: boolean
}

export type ItemTagsRecord = {
	color?: string
	name?: string
	user?: RecordIdString
}

export enum ItemsWeightUnitOptions {
	"g" = "g",
	"kg" = "kg",
	"lb" = "lb",
	"oz" = "oz",
}
export type ItemsRecord = {
	description?: string
	image?: string
	name?: string
	price?: number
	sort_order?: number
	tags?: RecordIdString[]
	user: RecordIdString
	weight?: number
	weight_g?: number
	weight_unit?: ItemsWeightUnitOptions
}

export type ListCategoriesRecord = {
	list: RecordIdString
	name?: string
	sort_order?: number
}

export enum ListsWeightUnitOptions {
	"g" = "g",
	"kg" = "kg",
	"oz" = "oz",
	"lb" = "lb",
}
export type ListsRecord<Tcategories = unknown> = {
	categories?: null | Tcategories
	description?: string
	name?: string
	show_images?: boolean
	show_packed?: boolean
	show_prices?: boolean
	show_weights?: boolean
	sort_order?: number
	user: RecordIdString
	weight_unit?: ListsWeightUnitOptions
}

export type UsersRecord<Tschema = unknown> = {
	avatar?: string
	name?: string
	schema?: null | Tschema
}

// Response types include system fields and match responses from the PocketBase API
export type CategoriesItemsResponse<Texpand = unknown> = Required<CategoriesItemsRecord> & BaseSystemFields<Texpand>
export type ItemTagsResponse<Texpand = unknown> = Required<ItemTagsRecord> & BaseSystemFields<Texpand>
export type ItemsResponse<Texpand = unknown> = Required<ItemsRecord> & BaseSystemFields<Texpand>
export type ListCategoriesResponse<Texpand = unknown> = Required<ListCategoriesRecord> & BaseSystemFields<Texpand>
export type ListsResponse<Tcategories = unknown, Texpand = unknown> = Required<ListsRecord<Tcategories>> & BaseSystemFields<Texpand>
export type UsersResponse<Tschema = unknown, Texpand = unknown> = Required<UsersRecord<Tschema>> & AuthSystemFields<Texpand>

// Types containing all Records and Responses, useful for creating typing helper functions

export type CollectionRecords = {
	categories_items: CategoriesItemsRecord
	item_tags: ItemTagsRecord
	items: ItemsRecord
	list_categories: ListCategoriesRecord
	lists: ListsRecord
	users: UsersRecord
}

export type CollectionResponses = {
	categories_items: CategoriesItemsResponse
	item_tags: ItemTagsResponse
	items: ItemsResponse
	list_categories: ListCategoriesResponse
	lists: ListsResponse
	users: UsersResponse
}

// Type for usage with type asserted PocketBase instance
// https://github.com/pocketbase/js-sdk#specify-typescript-definitions

export type TypedPocketBase = PocketBase & {
	collection(idOrName: 'categories_items'): RecordService<CategoriesItemsResponse>
	collection(idOrName: 'item_tags'): RecordService<ItemTagsResponse>
	collection(idOrName: 'items'): RecordService<ItemsResponse>
	collection(idOrName: 'list_categories'): RecordService<ListCategoriesResponse>
	collection(idOrName: 'lists'): RecordService<ListsResponse>
	collection(idOrName: 'users'): RecordService<UsersResponse>
}
