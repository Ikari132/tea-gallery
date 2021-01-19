<script type="ts">
  export let width = 24;
  export let height = 24;
  export let color = "#000";
</script>

<div class="icon" style="color:{color};width:{width}px;height:{height}px">
  <slot />
</div>

<style lang="scss">
</style>
