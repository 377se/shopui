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
      <form 
        style="margin-left:4px;margin-right:4px;"
        @click.stop.prevent> 
        <div 
          class="uk-width-1-1"
          uk-form-custom="target: > * > span:first-child">
          <select>
            <option value="">Välj storlek...</option>
            <option 
              v-for="size in article.sizeList"
              :key="size.Value">{{ size.Name }}</option>
          </select>
          <button class="uk-button uk-button-default uk-width-1-1" type="button" tabindex="-1">
              <span></span>
              <span uk-icon="icon: chevron-down"></span>
          </button>
          <button class="uk-button uk-button-primary uk-width-1-1 uk-margin-small" type="button" tabindex="-1">
              Lägg till
          </button>
        </div>
      </form>

      <div 
        class="uk-overlay-default uk-position-cover"
        @click.stop.prevent>
        <div class="uk-position-top-right">
          <span class="uk-icon-button lfc-addon-check-button uk-margin-small-right uk-margin-small-top">
            <span 
              style="fill:#fff;" 
              uk-icon="check"/>
          </span>
        </div>
        <div class="uk-position-center">
          <button class="uk-button uk-button-secondary">Klicka för att ta bort</button>
        </div>
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
.uk-icon-button.lfc-addon-check-button{
  background: $global-secondary-background;
  color:#fff;
  fill:#fff;
}
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

