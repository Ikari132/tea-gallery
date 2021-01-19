<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import FaLeaf from "svelte-icons/fa/FaLeaf.svelte";
  import type { ITea } from "./../routes/types";
  import { CATEGORIES_COLOR } from "./../routes/constants";
  import Button from "./../components/Button.svelte";
  import RatingNumber from "./RatingNumber.svelte";
  import BrewsCount from "./BrewsCount.svelte";
  import Icon from "./Icon.svelte";

  export let tea: ITea;
  const dispatch = createEventDispatcher();

  function clickHandler() {
    dispatch("select", tea);
  }
</script>

<div
  class="tea-card flex flex-col items-start justify-between bg-white rounded-xl shadow p-4"
>
  <h2 class="text-lg font-bold flex justify-between w-full">
    {tea.name}
    <Icon color={CATEGORIES_COLOR[tea.type.toUpperCase()]}>
      <FaLeaf />
    </Icon>
  </h2>
  <div class="flex justify-center items-center w-full">
    <RatingNumber rating={tea.rating} />
    <BrewsCount />
  </div>
  {#if tea.tasteProfile}
    <div class="flex">
      {#each tea.tasteProfile as tasteProfile}
        <Icon>
          <FaLeaf />
        </Icon>
      {/each}
    </div>
  {/if}
  <Button on:click={clickHandler} fullWidth>Brew</Button>
</div>

<style lang="scss">
  .tea-card {
    min-height: 200px;
    min-width: 200px;

    width: 200px;
    height: 200px;
    background: #fff;
    padding: 20px;
    box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
  }
</style>
