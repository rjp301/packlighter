<script>
  import { onMount } from "svelte";
  import { slide } from "svelte/transition";
  import { pb } from "../lib/pocketbase";
  import OpenButton from "./OpenButton.svelte";

  let open = false;
  let items = [];
  onMount(async () => {
    items = await pb.collection("items").getFullList();
  });
</script>


<ul class="divide-y px-2 py-1 overflow-scroll bg-slate-700 rounded">
  {#each items as item}
    <li class="py-1">
      <div class="flex justify-between items-center">
        <div>
          {item.name}
          <p class="text-slate-500">{item.description}</p>
        </div>
        <div class="flex items-center">
          <span>{item.weight_g}g</span>
          <i class="fa-solid fa-x px-3" />
        </div>
      </div>
    </li>
  {/each}
</ul>
