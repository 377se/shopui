<template>
  <div uk-text>
    <img v-bind:src="urls[0]" uk-img>
  </div>
</template>

<script>
const urlHost =
  "https://res.cloudinary.com/supportersplace/image/fetch/w_640,f_auto/http://static.supportersplace.se/product/";

export default {
  components: {},
  props: {
    images: Array
  },
  computed: {
    urls: function() {
      return this.images.map(image => urlHost + image.Name);
    }
  },
  mounted() {}
};
</script>

<style lang="scss">
@import "~scss/vars";
</style>
