<script lang="ts">
  import { setupI18n } from "./../i18n";
  import Navbar from "./../components/Navbar.svelte";
  setupI18n();
  // export let segment: string;
</script>

<main>
  <slot />
</main>
<Navbar />

<style lang="scss">
  :global(*) {
    box-sizing: border-box;
  }

  main {
    position: relative;
    max-width: 56em;
    min-height: 100%;
    height: 100%;

    background-color: white;
    padding: 2em;
    margin: 0 auto;
    box-sizing: border-box;
  }
</style>
