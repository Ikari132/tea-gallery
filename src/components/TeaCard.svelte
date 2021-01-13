<script lang="ts">
    import { createEventDispatcher } from "svelte";
    import type { ITea } from "./../pages/types";
    import Button from "./../components/Button.svelte";

    export let tea: ITea;
    const dispatch = createEventDispatcher();

    function clickHandler() {
        dispatch("select", tea);
    }
</script>

<style lang="scss">
    .tea-card {
        min-height: 200px;
        min-width: 200px;

        width: 200px;
        height: 200px;
    }
</style>

<div
    class="tea-card flex flex-col items-start justify-start bg-white rounded-xl shadow p-4">
    <h2>{tea.name}</h2>

    <Button on:click={clickHandler}>Brew</Button>
</div>
