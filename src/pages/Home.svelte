<script lang="ts">
  import { _ } from "svelte-i18n";
  import { navigate } from "svelte-routing";
  import TeaGroup from "./../components/TeaGroup.svelte";

  import { currentTeaStore } from "./../stores/currentTeaStore";
  import { galleryStore } from "./../stores/galleryStore";

  const gallery = $galleryStore;

  function handleTeaSelect(e: any) {
    const tea = e.detail;
    console.log("tea select", tea);
    currentTeaStore.update((val) => tea);
    navigate("/brew/method");
  }
</script>

<style lang="scss">
  .wrapper {
    width: 100%;
  }
</style>

<div class="flex flex-col items-center justify-center">
  <div class="wrapper flex flex-col">
    <h1 class="ps-4 p-4 flex font-xl font-bold">Hi, User</h1>

    <div class="bg-white rounded-xl shadow p-4">
      <h2 class="font-md font-bold">Tea gallery</h2>

      <div class="flex flex-col">
        {#each gallery as teaGroup}
          <TeaGroup {teaGroup} on:select={handleTeaSelect} />
        {/each}
      </div>
    </div>
  </div>
</div>
