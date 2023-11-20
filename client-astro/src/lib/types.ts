/**
* This file was @generated using pocketbase-typegen
*/

import type PocketBase from 'pocketbase'
import type { RecordService } from 'pocketbase'

export enum Collections {
	CategoriesItems = "categories_items",
	Items = "items",
	ListCategories = "list_categories",
	ListItems = "list_items",
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
	gear: RecordIdString
	quantity?: number
	worn_weight?: boolean
}

export type ItemsRecord = {
	description?: string
	image_url?: string
	name?: string
	user: RecordIdString
	weight_g?: number
}

export type ListCategoriesRecord = {
	list: RecordIdString
	name?: string
}

export type ListItemsRecord = {
	category?: string
	item: RecordIdString
	list: RecordIdString
	packed?: boolean
	quantity?: number
}

export type ListsRecord = {
	description?: string
	name?: string
	user: RecordIdString
}

export type UsersRecord = {
	avatar?: string
	name?: string
}

// Response types include system fields and match responses from the PocketBase API
export type CategoriesItemsResponse<Texpand = unknown> = Required<CategoriesItemsRecord> & BaseSystemFields<Texpand>
export type ItemsResponse<Texpand = unknown> = Required<ItemsRecord> & BaseSystemFields<Texpand>
export type ListCategoriesResponse<Texpand = unknown> = Required<ListCategoriesRecord> & BaseSystemFields<Texpand>
export type ListItemsResponse<Texpand = unknown> = Required<ListItemsRecord> & BaseSystemFields<Texpand>
export type ListsResponse<Texpand = unknown> = Required<ListsRecord> & BaseSystemFields<Texpand>
export type UsersResponse<Texpand = unknown> = Required<UsersRecord> & AuthSystemFields<Texpand>

// Types containing all Records and Responses, useful for creating typing helper functions

export type CollectionRecords = {
	categories_items: CategoriesItemsRecord
	items: ItemsRecord
	list_categories: ListCategoriesRecord
	list_items: ListItemsRecord
	lists: ListsRecord
	users: UsersRecord
}

export type CollectionResponses = {
	categories_items: CategoriesItemsResponse
	items: ItemsResponse
	list_categories: ListCategoriesResponse
	list_items: ListItemsResponse
	lists: ListsResponse
	users: UsersResponse
}

// Type for usage with type asserted PocketBase instance
// https://github.com/pocketbase/js-sdk#specify-typescript-definitions

export type TypedPocketBase = PocketBase & {
	collection(idOrName: 'categories_items'): RecordService<CategoriesItemsResponse>
	collection(idOrName: 'items'): RecordService<ItemsResponse>
	collection(idOrName: 'list_categories'): RecordService<ListCategoriesResponse>
	collection(idOrName: 'list_items'): RecordService<ListItemsResponse>
	collection(idOrName: 'lists'): RecordService<ListsResponse>
	collection(idOrName: 'users'): RecordService<UsersResponse>
}