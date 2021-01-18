<script lang="ts">
  import FaHome from "svelte-icons/fa/FaHome.svelte";
  import FaBox from "svelte-icons/fa/FaBox.svelte";
  import FaRegUser from "svelte-icons/fa/FaRegUser.svelte";

  const routes = [
    {
      icon: FaHome,
      name: "home",
      path: "/",
    },
    {
      icon: FaBox,
      name: "gallery",
      path: "/gallery",
    },
    {
      icon: FaRegUser,
      name: "account",
      path: "/account",
    },
  ];
</script>

<nav class="main-toolbar glass-25">
  {#each routes as route}
    <div class="main-toolbar__button">
      <a href={route.path} rel="prefetch">
        <div class="icon">
          <svelte:component this={route.icon} />
        </div>
      </a>
    </div>
  {/each}
</nav>

<style lang="scss">
  .main-toolbar {
    width: 100%;
    height: 60px;
    position: fixed;
    bottom: 0;
    left: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    // background: #fff;
    padding: 0 20px;
    z-index: 9999;

    &__button {
      display: flex;
      justify-content: center;
      align-items: center;

      height: 100%;
      padding: 0 20px;
      .icon {
        width: 24px;
        height: 24px;
      }
    }
  }
</style>
