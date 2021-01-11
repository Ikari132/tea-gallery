<script lang="ts">
    import { _ } from "svelte-i18n";
    import { navigate } from "svelte-routing";
    import { BrewingGlasses } from "./constants";
    import { currentTeaStore } from "./../stores/currentTeaStore";

    let currentTea = {};
    const unsubscribeCurrentTeaStore = currentTeaStore.subscribe((val) => {
        currentTea = val;
    });

    $: {
        console.log("curr tea", currentTea);
    }

    let { name } = currentTea as any;

    function handleMethodChoose() {
        navigate("/brew/prepare");
    }
</script>

<div class="flex flex-col items-center justify-center mt-4">
    <div class="flex flex-col bg-white rounded shadow p-4">
        <h1 class="mb-8 ps-4 flex justify-center">
            {$_('prepare_for_brewing')}
        </h1>
        {name}
        <ul class="list-none flex flex-row">
            {#each BrewingGlasses as glass}
                <li>
                    <div
                        class="m-2 p-4 text-md text-white bg-blue-500 rounded cursor-pointer select-none hover:bg-blue-600 active:bg-blue-700"
                        on:click={handleMethodChoose}>
                        {glass}
                    </div>
                </li>
            {/each}
        </ul>
    </div>
</div>
