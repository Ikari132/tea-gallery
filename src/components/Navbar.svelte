<script lang="ts">
  import FaHome from "svelte-icons/fa/FaHome.svelte";
  import FaBox from "svelte-icons/fa/FaBox.svelte";
  import FaRegUser from "svelte-icons/fa/FaRegUser.svelte";
  import FaHistory from "svelte-icons/fa/FaHistory.svelte";
  import FaRegListAlt from "svelte-icons/fa/FaRegListAlt.svelte";

  const routes = [
    {
      icon: FaHome,
      name: "home",
      path: "/",
    },
    {
      icon: FaRegListAlt,
      name: "articles",
      path: "/articles",
    },
    {
      icon: FaBox,
      name: "box",
      path: "/box",
    },
    {
      icon: FaHistory,
      name: "history",
      path: "/history",
    },
    {
      icon: FaRegUser,
      name: "settings",
      path: "/settings",
    },
  ];
</script>

<nav class="main-toolbar glass-25">
  {#each routes as route}
    <div class="main-toolbar__button">
      <a
        href={route.path}
        rel="prefetch"
        class="flex flex-col items-center justify-center">
        <div class="icon">
          <svelte:component this={route.icon} />
        </div>
        <div class="name">
          {route.name}
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
    background: var(--card-background);
    border-radius: 20px 20px 0 0;

    padding: 0 20px;
    z-index: 9999;
    color:var(--font-color);

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
      .name {
        font-size: 12px;
      }
    }
  }
</style>
