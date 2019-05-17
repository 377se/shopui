<template>
  <nuxt-link v-bind:to="articleLink" class="uk-margin-small-bottom uk-link-reset">
    <div class="uk-card uk-card-hover bottom-red-line">
      <div class="uk-card-media-top">
        <transition-group>
          <img :src="article.ImageIdThumb" alt key="article-image">
        </transition-group>
      </div>
      <div class="uk-card-body uk-padding-small uk-padding-remove-bottom uk-text-small">
        <strong>{{ article.HeadCategory }}</strong>
        <br>
        <span>{{ article.ArticleName }}</span>
      </div>
      <div
        class="uk-card-footer uk-padding-small uk-padding-remove-top uk-text-small"
      >{{ article.PriceDisplay }}</div>
    </div>
  </nuxt-link>
</template>

<script>
export default {
  components: {},
  props: {
    article: {}
  },
  computed: {
    articleLink: function() {
      return { path: "article", query: { id: this.article.Id } };
    }
  },
  mounted() {}
};
</script>

<style lang="scss">
@import "~scss/vars";

.bottom-red-line {
  border-bottom: 3px solid $global-primary-background;
}
</style>
