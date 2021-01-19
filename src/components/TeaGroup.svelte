<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import type { ITea, ITeaGroup } from "./../routes/types";
  import { CATEGORIES_COLOR } from "./../routes/constants";
  import TeaCard from "./TeaCard.svelte";

  export let teaGroup: ITeaGroup;

  const dispatch = createEventDispatcher();

  function handleTeaSelect(tea: any) {
    dispatch("select", tea);
  }
</script>

<div class="tea-group flex flex-col py-2 my-4">
  <!-- <h2 class="flex items-center justify-start bg-gray-100 rounded-xl shadow p-4">
    <div
      class="tea-group__badge w-4 mr-2 rounded-full"
      style="background-color:{CATEGORIES_COLOR[teaGroup.type.toUpperCase()]};"
    />
    {teaGroup.type}
  </h2> -->
  <div class="flex flex-row w-full">
    {#each teaGroup.list as tea}
      <TeaCard {tea} on:select={handleTeaSelect} />
    {/each}
  </div>
</div>

<style lang="scss">
  .tea-group {
    overflow-x: auto;
    &__badge {
      width: 20px;
      height: 20px;
    }
  }
</style>
