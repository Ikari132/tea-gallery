<script lang="ts">
  import { writable } from "svelte/store";
  import { _ } from "svelte-i18n";
  import Button from "./../../../components/Button.svelte";
  import Water from "./../../../components/Water.svelte";
  import { CATEGORIES_BREW_TIME } from "../../constants";
  import { onMount } from "svelte";
  import type { ITeaType } from "../../types";

  let brewingTime = 10;
  let teaType: ITeaType;

  onMount(() => {
    //[todo] maybe store this value in store
    if (window) {
      const hash = `${window.location.hash}`.replace("#", "");
      if (CATEGORIES_BREW_TIME[hash]) {
        teaType = hash as ITeaType;
        brewingTime = CATEGORIES_BREW_TIME[hash];
      }
    }
  });

  // let counter = 0;
  let counter = writable(0);
  let counterValue = 0;
  let unsubscribeCounter = counter.subscribe((value) => {
    counterValue = value;
  });

  // let fill = writable(false);
  let fill = false;

  function startFill() {
    counter.update((v) => v + 1);
    // fill.set(true);
    fill = true;
  }
  function resetButton() {
    console.log("on drain end");
    // fill.set(false);
    fill = false;
  }
</script>

<div class="content flex flex-col items-center justify-center">
  <div class="flex flex-col bg-white">
    <!-- <h1 class="mb-8 ps-4 flex justify-center">Brewing counter</h1> -->

    <Water
      filling={fill}
      on:drain={resetButton}
      fillCount={counterValue}
      {brewingTime}
      {teaType}
    />

    <p class="mb-4 p-4 flex flex-col justify-center items-center">
      {#if $counter}
        <div class="text-md text-center">
          {$_("fill")}
        </div>
        <div class="text-2xl font-bold text-center">
          {counterValue}
        </div>
      {/if}
    </p>

    <Button on:click={startFill} disabled={fill}>
      {fill ? $_("wait") : $_("start")}
    </Button>
  </div>
</div>
