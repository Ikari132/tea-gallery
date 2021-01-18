<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import type { ITea } from "./../routes/types";
  import Button from "./../components/Button.svelte";
  //   import Rating from "./Rating.svelte";

  export let tea: ITea;
  const dispatch = createEventDispatcher();

  function clickHandler() {
    dispatch("select", tea);
  }
</script>

<div
  class="tea-card flex flex-col items-start justify-between bg-white rounded-xl shadow p-4"
>
  <!-- <Rating rating={tea.rating} /> -->
  <h2 class="text-lg font-bold">{tea.name}</h2>
  <div>Temperature:{tea.temperature}</div>
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
