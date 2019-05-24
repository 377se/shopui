<template>
  <div>
    <h2 class="uk-heading-xsmall">{{title}}</h2>
    <strong class="uk-heading-xsmall">{{subtitle}}</strong>
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    title: String,
    subtitle: String
  },
  mounted() {}
};
</script>

<style lang="scss">
@import "~scss/vars";

h2 {
  width: 100%;
  margin-bottom: 0;
}

.uppercase {
  text-transform: uppercase;
}
</style>
