<template>
  <div>
    <div class="uk-card uk-card-hover bottom-red-line">
      <div class="uk-card-media-top">
        <nuxt-link
          :to="'/bli-medlem/'+$route.params.id+'/'+article.Id"
        >
          <img :src="article.ImageIdThumb" alt ref="mainImage">
        </nuxt-link>
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
          uk-form-custom="target: > .uk-button-default > span:first-child">
          <select
            v-model="chosenSize">
            <option value="-1">Välj storlek...</option>
            <option 
              v-for="size in article.SizeList"
              :key="size.Value"
              :value="size.Value">{{ size.Name }}</option>
          </select>
          <button 
            class="uk-button uk-button-default uk-width-1-1" 
            type="button" 
            tabindex="-1">
              <span></span>
              <span uk-icon="icon: chevron-down"></span>
          </button>
        </div>
        <button 
          class="uk-button uk-button-primary uk-width-1-1 uk-margin-small" 
          type="button" 
          tabindex="-1"
          @click.stop.prevent="add_addon()">
          Lägg till
        </button>
      </form>

      <div 
        v-if="isAdded"
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
          <button 
            class="uk-button uk-button-secondary"
            @click.stop.prevent="remove_addon()">Ta bort</button>
        </div>
      </div>

    </div>
  </div>
</template>
<script>
import { mapMutations } from 'vuex'

export default {
  components: {},
  props: {
    article: {}
  },
  data() {
    return{
      chosenSize:-1
    }
  },
  computed:{
    isAdded(){ 
      let addons = this.$store.state.addons
      if(addons.list[this.article.Id]){
        return true
      }else{
        return false
      }
    }
  },
  methods:{
    add_addon(){
      if(this.chosenSize>-1){
        this.$store.commit('add',{'Id':this.article.Id, 'Article':this.article, 'Size': this.chosenSize})
      }else{
        UIkit.modal.alert('Du måste välja en storlek!')
      }
    },
    remove_addon(){
      this.$store.commit('remove',this.article.Id)
    }
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

