<script lang="ts">
  import { Router, Route } from "svelte-routing";
  import { setupI18n } from "./i18n";
  import { isLoading } from "svelte-i18n";
  import Home from "./pages/Home.svelte";
  import Gallery from "./pages/Gallery.svelte";

  import BrewTimer from "./pages/BrewTimer.svelte";
  import BrewMethod from "./pages/BrewMethod.svelte";
  import BrewPrepare from "./pages/BrewPrepare.svelte";
  import Toolbar from "./components/Toolbar.svelte";
  setupI18n();

  export let url = "";
</script>

<style lang="scss">
  .app {
    min-height: 100%;
    background-color: #fff;

    &* {
      box-sizing: border-box;
    }

    // background: #fb06c8;
    // background: -webkit-radial-gradient(top left, #fb06c8, #2962be);
    // background: -moz-radial-gradient(top left, #fb06c8, #2962be);
    // background: radial-gradient(to bottom right, #fb06c8, #2962be);
  }
</style>

{#if $isLoading}
  Please wait...
{:else}
  <div class="app">
    <Router {url}>
      <Route path="/" component={Home} />
      <Route path="gallery" component={Gallery} />

      <Route path="/brew/method" component={BrewMethod} />
      <Route path="/brew/prepare" component={BrewPrepare} />
      <Route path="/brew" component={BrewMethod} />

      <Route path="/timer" component={BrewTimer} />
    </Router>
    <Toolbar />
  </div>
{/if}
