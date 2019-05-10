<template>
  <div id="offscreen-menu" uk-offcanvas>
    <div class="uk-offcanvas-bar">
      <button class="uk-offcanvas-close" type="button" uk-close></button>
    </div>
  </div>
</template>

<script>
export default {
  components: {}
};
</script>

<style lang="scss">
@import "~scss/vars";

.menu {
  background-color: $global-primary-background !important;
  width: 240px;
  height: 100%;
}
</style>
