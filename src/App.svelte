<script lang="ts">
  import { Router, Route } from "svelte-routing";
  import { setupI18n } from "./i18n";
  import { isLoading } from "svelte-i18n";
  import Home from "./pages/Home.svelte";
  import BrewTimer from "./pages/BrewTimer.svelte";
  import BrewMethod from "./pages/BrewMethod.svelte";
  import BrewPrepare from "./pages/BrewPrepare.svelte";
  setupI18n();

  export let url = "";
</script>

{#if $isLoading}
  Please wait...
{:else}
  <Router {url}>
    <Route path="/" component={Home} />

    <Route path="/brew/method" component={BrewMethod} />
    <Route path="/brew/prepare" component={BrewPrepare} />
    <Route path="/brew" component={BrewMethod} />

    <Route path="/timer" component={BrewTimer} />
  </Router>
{/if}
