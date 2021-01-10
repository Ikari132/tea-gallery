<script lang="ts">
  import { _ } from "svelte-i18n";
  import Button from "./../components/Button.svelte";

  let counter = 0;

  function increment() {
    counter += 1;
  }
</script>

<div class="flex flex-col items-center justify-center mt-24">
  <div
    class="flex flex-col items-center justify-center p-4 bg-white rounded shadow">
    <h1 class="mb-8">Hello Snowpack!</h1>

    <p class="mb-4">Clicked {counter} times.</p>

    <Button on:click={increment}>{$_('click_me')}</Button>
  </div>
</div>
