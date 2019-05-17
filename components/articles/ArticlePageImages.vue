<template>
  <div uk-text class="relative">
    <img v-if="this.measureImage" v-bind:src="measureImage" uk-img v-on:load="handleMeasureLoaded">
    <img
      v-else
      v-bind:src="urls[0]"
      uk-img
      v-on:load="handleImageLoad"
      v-bind:class="hideDuringLoad()"
    >

    <img v-if="this.showPreloaded" v-bind:src="preloadedImage" uk-img class="preloaded">
  </div>
</template>

<script>
const urlHost =
  "https://res.cloudinary.com/supportersplace/image/fetch/w_640,f_auto/http://static.supportersplace.se/product/";

export default {
  components: {},
  props: {
    images: Array,
    measureImage: {
      type: String,
      required: false,
      default: null
    },
    preloadedImage: {
      type: String,
      required: false,
      default: null
    }
  },
  data() {
    return {
      imageLoaded: false
    };
  },
  computed: {
    urls: function() {
      return this.images.map(image => {
        if (typeof image === "string") return image;
        //return "https://static.zara.net/photos///2018/I/0/2/p/7545/327/306/2/c-209-0-2048-3072/w/560/7545327306_1_1_1.jpg?ts=1531224923474";
        return urlHost + image.Name;
      });
    },
    showPreloaded: function() {
      console.log(
        "ArticlePageImages.showPreloaded",
        this.preloadedImage && !this.imageLoaded
      );
      return this.preloadedImage && !this.imageLoaded;
    }
  },
  mounted() {},
  methods: {
    hideDuringLoad: function() {
      if (this.showPreloaded) return "invisible absolute";
      return "";
    },
    handleImageLoad: function(event) {
      //this.imageLoaded = true;
      requestAnimationFrame(() => {
        this.imageLoaded = true;
      });
    },
    handleMeasureLoaded: function(event) {
      var rect = event.target.getBoundingClientRect();

      const bubblingEvent = new CustomEvent("articleImageMeasured", {
        detail: rect
      });
      this.$el.dispatchEvent(bubblingEvent, { bubbles: true });
    }
  }
};
</script>

<style lang="scss">
@import "~scss/vars";

img {
  width: 100%;
}

.relative {
  position: relative;
}

.invisible {
  visibility: hidden;
}

.preloaded {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
}
</style>
