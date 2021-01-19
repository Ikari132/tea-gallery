<script lang="ts">
  import { goto } from "@sapper/app";
  import { _ } from "svelte-i18n";
  import TeaGroup from "./../components/TeaGroup.svelte";
  import { currentTeaStore } from "./../stores/currentTeaStore";
  import { galleryStore } from "./../stores/galleryStore";

  const gallery = $galleryStore;

  function handleTeaSelect(e: any) {
    const tea = e.detail;
    console.log("tea select", tea);
    currentTeaStore.update((val) => tea);
    goto("/brew/method");
  }
</script>

<div class="wrapper day">
  <div class="sun" />
  <div class="content">
    <div class="flex items-center justify-center w-full px-16 ">
      <h2 class="text-lg font-bold flex items-center justify-center w-32">
        Perfect for this time, lets brew it
      </h2>
    </div>
    {#if gallery.length}
      <TeaGroup teaGroup={gallery[0]} on:select={handleTeaSelect} />
    {/if}
  </div>
</div>

<style lang="scss">
  :root {
    --background-evening: linear-gradient(180deg, #424a89 0%, #ec7e67 100%);
    --background-day: linear-gradient(180deg, #139ce9 0%, #8fe9e7 100%);
    --glass-blur: blur(40px);

    --sun-radius: 200px;
    --sun-evening: linear-gradient(180deg, #ffb800 0%, #bc0071 100%);
    --sun-day: linear-gradient(180deg, #ffff81 0%, #ffb800 100%);
  }
  .evening {
    .sun {
      background: var(--sun-evening);
    }
    background: var(--background-evening);
  }
  .day {
    .sun {
      background: var(--sun-day);
    }
    background: var(--background-day);
  }
  .wrapper {
    width: 100%;
    height: 100%;
    min-height: 100%;
    position: relative;
    padding-top: calc(var(--sun-radius) / 2 + 20px);
  }
  .content {
    min-height: 100%;

    backdrop-filter: blur(10px);
    background: rgba(255, 255, 255, 0.4);
    border-radius: 20px 20px 0px 0px;
    position: relative;
    z-index: 10;
    padding: 15px;

    h2 {
      text-align: center;
    }
  }
  .sun {
    position: absolute;
    top: 20px;
    left: calc(50% - var(--sun-radius) / 2);
    width: var(--sun-radius);
    height: var(--sun-radius);
    border-radius: 50%;
  }
</style>
