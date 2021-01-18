<script lang="ts">
  import { writable } from "svelte/store";
  import { _ } from "svelte-i18n";
  import Button from "./../../../components/Button.svelte";
  import Water from "./../../../components/Water.svelte";

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

<div class="flex flex-col items-center justify-center mt-4">
  <div class="flex flex-col bg-white rounded shadow p-8">
    <h1 class="mb-8 ps-4 flex justify-center">Brewing counter</h1>

    <Water filling={fill} on:drain={resetButton} fillCount={counterValue} />

    <p class="mb-4 p-4 flex justify-center">
      {#if $counter}{$_("fill")} {$_("number")} {counterValue}{/if}
    </p>

    <Button on:click={startFill} disabled={fill}>
      {fill ? $_("wait") : $_("start")}
    </Button>
  </div>
</div>
