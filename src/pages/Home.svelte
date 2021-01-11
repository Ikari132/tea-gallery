<script lang="ts">
  import { _ } from "svelte-i18n";
  import { navigate } from "svelte-routing";
  import TeaCard from "./../components/TeaCard.svelte";
  import LinkButton from "./../components/LinkButton.svelte";

  import { currentTeaStore } from "./../stores/currentTeaStore";
  import { galleryStore } from "./../stores/galleryStore";
  import { CATEGORIES_COLOR } from "./constants";

  const gallery: any = $galleryStore;
  let tea = (gallery as any)[0]?.list[0];
  // let tea = (gallery as any)["Зеленый"]?.teaList[0];
  console.log("tea", tea, gallery);

  // let currentTea;
  // const unsubscribeCurrentTeaStore = currentTeaStore.subscribe((val) => {
  //   currentTea = val;
  // });
  // $: {
  //   console.log("tea", tea);
  //   currentTeaStore.update((val) => tea);
  // }

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
          <div class="flex flex-col my-4">
            <h2 class="bg-gray-100 rounded-xl shadow p-4">
              <div
                class="w-4 rounded-full"
                style="background-color:{CATEGORIES_COLOR[teaGroup.name.toUpperCase()]};" />
              {teaGroup.name}
            </h2>
            <div class="flex flex-row">
              {#each teaGroup.list as tea}
                <TeaCard {tea} on:select={handleTeaSelect} />
                <!-- <div
                  class="m-2 p-4 text-md text-white bg-blue-500 rounded cursor-pointer select-none hover:bg-blue-600 active:bg-blue-700"
                  on:click>
                  {tea.name}
                </div> -->
              {/each}
            </div>
          </div>
        {/each}
      </div>
    </div>
  </div>
</div>
