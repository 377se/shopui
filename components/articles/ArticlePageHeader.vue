<template>
  <h3 class="uk-heading-xsmall">{{text}}</h3>
</template>

<script>
export default {
  components: {},
  props: {
    text: String
  },
  mounted() {}
};
</script>

<style lang="scss">
@import "~scss/vars";

h3 {
  width: 100%;
}
</style>
