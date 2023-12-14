<script lang="ts">
  import { useItems } from "@/hooks/useItem";
  import { Input } from "./ui/input";
  import { Button } from "./ui/button";
  import { Plus } from "lucide-svelte";
  import ItemListItem from "./ItemListItem.svelte";

  let searchTerm = "";
  const items = useItems();

  $: filteredItems =
    $items.data?.filter(
      (item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.description.toLowerCase().includes(searchTerm.toLowerCase()),
    ) ?? [];
</script>

<div>
  <div class="mb-2 flex items-center justify-between gap-4">
    <h2 class="text-sm font-medium">Gear</h2>
    <Input
      type="search"
      placeholder="Search..."
      class="bg-card"
      bind:value={searchTerm}
    />
  </div>
</div>
<div class="flex-1 overflow-auto border-y">
  {#if $items.isError}
    <p>Error: {$items.error}</p>
  {:else if $items.isLoading}
    <p>Loading...</p>
  {:else}
    {#each filteredItems as item (item.id)}
      <ItemListItem {item} />
    {/each}
  {/if}
</div>