<script lang="ts">
  import { setupI18n } from "./../i18n";
  import Navbar from "./../components/Navbar.svelte";
  import GlobalStyles from "./../components/GlobalStyles.svelte";
  setupI18n();
  // export let segment: string;
</script>

<GlobalStyles />
<main>
  <slot />
</main>
<Navbar />

<style lang="scss">
  :global(*) {
    box-sizing: border-box;
  }
  :global(.app) {
    height: 100%;
    min-height: 100%;
  }

  main {
    position: relative;
    max-width: 56em;
    min-height: 100%;
    height: 100%;

    background-color: white;
    // padding: 2em;
    margin: 0 auto;
    box-sizing: border-box;
  }
</style>
