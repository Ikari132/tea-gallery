<script lang="ts">
  import { goto } from "@sapper/app";
  import { _ } from "svelte-i18n";
  import FaRegClock from "svelte-icons/fa/FaRegClock.svelte";
  import FaPlus from "svelte-icons/fa/FaPlus.svelte";
  import Card from "../components/Card.svelte";
  import Icon from "../components/Icon.svelte";
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
    <div class="flex items-center justify-center w-full px-16 py-4">
      <h2
        class="text-lg text-center font-bold flex items-center justify-center w-32"
      >Perfect for this time, lets brew it</h2>
    </div>
    <div class="brew-now">
      {#if gallery.length}
        <TeaGroup teaGroup={gallery[0]} on:select={handleTeaSelect} />
      {/if}
    </div>

    <h2 class="text-lg font-bold flex items-center justify-center py-4">
      Quick actions
    </h2>
    <div class="grid grid-col-2 gap-4 grid-flow-col w-full px-4">
      <div class="w-full">
        <a href="/brew/type">
          <Card class="quick-action-card items-center justify-start w-full">
            <Icon width={80} height={80}>
              <FaRegClock />
            </Icon>
            <h2 class="text-lg font-bold">Timer</h2>
          </Card>
        </a>
      </div>
      <div class="w-full">
        <a href="/add">
          <Card class="quick-action-card items-center justify-start w-full">
            <Icon width={80} height={80}>
              <FaPlus />
            </Icon>
            <h2 class="text-lg font-bold">Add new tea</h2>
          </Card>
        </a>
      </div>
    </div>
  </div>
</div>

<style lang="scss">
  :root {
    --main-background-from: #139ce9;
    --main-background-to: #8fe9e7;

    --main-background: linear-gradient(
      180deg,
      var(--main-background-from) 0%,
      var(--main-background-to) 100%
    );
    --sun-background-from: #ffff81;
    --sun-background-to: #ffb800;
    --sun-background: linear-gradient(
      180deg,
      var(--sun-background-from) 0%,
      var(--sun-background-to) 100%
    );

    --font-color: rgba(0, 0, 0, 0.75);

    --background-evening: linear-gradient(180deg, #424a89 0%, #ec7e67 100%);
    --background-day: linear-gradient(180deg, #139ce9 0%, #8fe9e7 100%);
    --glass-blur: blur(40px);

    --sun-radius: 200px;
    --sun-evening: linear-gradient(180deg, #ffb800 0%, #bc0071 100%);
    --sun-day: linear-gradient(180deg, #ffff81 0%, #ffb800 100%);

    @media (prefers-color-scheme: dark) {
      --main-background-from: #424a89;
      --main-background-to: #ec7e67;

      --sun-background-from: #ffb800;
      --sun-background-to: #bc0071;

      --font-color: rgba(255, 255, 255, 0.95);
    }
  }
  // .evening {
  //   .sun {
  //     background: var(--sun-evening);
  //   }
  //   background: var(--background-evening);
  // }
  // .day {
  //   .sun {
  //     background: var(--sun-day);
  //   }
  //   background: var(--background-day);
  // }
  .wrapper {
    width: 100%;
    min-height: 100%;
    position: relative;
    padding-top: calc(var(--sun-radius) / 2 + 20px);
    background: var(--main-background);
  }
  // .content {
  //   min-height: 100%;

  //   backdrop-filter: blur(10px);
  //   background: rgba(255, 255, 255, 0.4);
  //   border-radius: 20px 20px 0px 0px;
  //   position: relative;
  //   z-index: 10;
  // }
  .sun {
    position: absolute;
    top: 20px;
    left: calc(50% - var(--sun-radius) / 2);
    width: var(--sun-radius);
    height: var(--sun-radius);
    border-radius: 50%;
    background: var(--sun-background);
  }
  :global(.quick-action-card) {
    background: var(--main-background-from);
    color: var(--font-color);
  }
</style>
