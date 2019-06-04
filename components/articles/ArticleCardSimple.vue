<template>
  <nuxt-link
    class="uk-margin-small-bottom uk-link-reset"
    :to="'/bli-medlem/'+$route.params.id+'/'+article.Id"
  >
    <div class="uk-card uk-card-hover bottom-red-line">
      <div class="uk-card-media-top">
        <img :src="article.ImageIdThumb" alt ref="mainImage">
      </div>
      <div class="uk-card-body uk-padding-small uk-padding-remove-bottom uk-text-small">
        <strong>{{ article.HeadCategory }}</strong>
        <br>
        <span>{{ article.ArticleName }}</span>
      </div>
      <div
        class="uk-card-footer uk-padding-small uk-padding-remove-top uk-text-small"
      >
          <span class="your-price">{{ article.DiscountedPriceDisplay }}</span> 
          <span class="orig-price">{{ article.PriceDisplay }}</span>
      </div>
    </div>
  </nuxt-link>
</template>
<script>
export default {
  components: {},
  props: {
    article: {}
  }
}
</script>
<style lang="scss">
@import "~scss/vars";
.your-price{
  color:$global-primary-background;
  font-weight:bold;
}
.orig-price{
  text-decoration:line-through;
}
.bottom-red-line {
  border-bottom: 3px solid $global-primary-background;
}
</style>

