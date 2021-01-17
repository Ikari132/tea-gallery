<script lang="ts">
    import { createEventDispatcher } from "svelte";
    import type { ITea } from "./../routes/types";
    import Button from "./../components/Button.svelte";
    import Rating from "./Rating.svelte";

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
    <Rating rating={tea.rating} />
    <h2>{tea.name}</h2>
    <div>Temperature:{tea.temperature}</div>
    <Button on:click={clickHandler}>Brew</Button>
</div>
