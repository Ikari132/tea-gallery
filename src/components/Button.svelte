<script lang="ts">
  export let disabled = false;
</script>

<button
  class="px-4 py-2 text-md text-white bg-blue-500 rounded cursor-pointer select-none hover:bg-blue-600 active:bg-blue-700"
  {disabled}
  on:click>
  <slot />
</button>
