<script lang="ts">
  export let disabled = false;
  export let fullWidth = false
</script>

<button
  class="px-4 py-2 text-md text-white bg-blue-500 rounded cursor-pointer select-none hover:bg-blue-600 active:bg-blue-700"
  {disabled}
  class:w-full={fullWidth}
  on:click>
  <slot />
</button>
