<script lang="ts">
  import { Router, Route } from "svelte-routing";
  import { setupI18n } from "./i18n";
  import { isLoading } from "svelte-i18n";
  import Home from "./pages/Home.svelte";
  setupI18n();

  export let url = "";
</script>

{#if $isLoading}
  Please wait...
{:else}
  <Router {url}>
    <Route path="/" component={Home} />
  </Router>
{/if}
