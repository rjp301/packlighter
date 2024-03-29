<script lang="ts">
	import { Input } from '@/components/ui/input';
	import {
		Table,
		TableBody,
		TableCell,
		TableHead,
		TableHeader,
		TableRow
	} from '@/components/ui/table';
	import { useItems, useUpdateItemsOrder, useDeleteItem, useCreateItem } from '@/hooks/useItem';
	import { ItemsWeightUnitOptions, type ItemsResponse } from '@/lib/types';
	import ItemImage from '@/components/ItemImage.svelte';
	import { SHADOW_ITEM_MARKER_PROPERTY_NAME, dndzone } from 'svelte-dnd-action';
	import DeleteButton from '@/components/base/DeleteButton.svelte';
	import { Button, buttonVariants } from '@/components/ui/button';
	import { flipDurationMs } from '@/lib/constants';
	import { getListItemIds, transformDraggedElement } from '@/lib/helpers';

	import { ArrowLeft } from 'lucide-svelte';
	import AppHeader from '@/components/AppHeader.svelte';

	$: items = useItems();
	$: updateItemsOrder = useUpdateItemsOrder();
	$: deleteItem = useDeleteItem();

	let searchTerm = '';

	type ItemWithShadowItem = ItemsResponse & {
		[SHADOW_ITEM_MARKER_PROPERTY_NAME]?: string;
	};

	$: itemsData = ($items.data?.filter(
		(item) =>
			item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
			item.description.toLowerCase().includes(searchTerm.toLowerCase())
	) ?? []) as ItemWithShadowItem[];

	$: console.log(itemsData.filter((i) => i.tags.length > 0));
</script>

<svelte:head>
	<title>PackLighter - Gear</title>
</svelte:head>

<div class="flex h-screen flex-col">
	<AppHeader>
		<div class="flex items-center gap-4">
			<a href="/" class={buttonVariants({ variant: 'secondary' })}>
				<ArrowLeft class="mr-2 h-4 w-4" />
				Back
			</a>
			<span class="text-lg font-semibold">Gear Catalogue</span>
		</div>
	</AppHeader>
	<Table>
		<TableHeader>
			<TableRow>
				<TableHead class="w-0">Image</TableHead>
				<TableHead class="w-64 pl-5">Name</TableHead>
				<TableHead class="pl-5">Description</TableHead>
				<TableHead class="w-32 text-right">Weight</TableHead>
				<TableHead class="w-0" />
			</TableRow>
		</TableHeader>
		<TableBody class="sticky top-0">
			{#each itemsData as item (item.id)}
				<TableRow>
					<TableCell>
						<ItemImage {item} fullSizePlaceholer />
					</TableCell>
					<TableCell>
						<Input
							class="h-auto border-none py-0.5 shadow-none placeholder:italic"
							placeholder="Unnamed item"
							autocomplete="off"
							bind:value={item.name}
						/>
					</TableCell>
					<TableCell class="text-muted-foreground">
						<Input
							class="h-auto border-none py-0.5 shadow-none placeholder:italic"
							placeholder="Description"
							autocomplete="off"
							bind:value={item.description}
						/>
					</TableCell>
					<TableCell class="flex justify-end text-right">
						<Input
							bind:value={item.weight}
							type="number"
							autocomplete="off"
							min="0"
							class="h-auto border-none px-1 py-0.5 text-right shadow-none"
						/>
						<select bind:value={item.weight_unit} class="bg-inherit">
							{#each Object.values(ItemsWeightUnitOptions) as massUnit}
								<option value={massUnit}>
									{massUnit}
								</option>
							{/each}
						</select>
					</TableCell>
					<TableCell>
						<DeleteButton handleDelete={() => $deleteItem.mutate(item.id)} />
					</TableCell>
				</TableRow>
			{/each}
		</TableBody>
	</Table>
</div>
