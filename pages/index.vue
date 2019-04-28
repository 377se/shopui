<template>
  <section 
    class="uk-container uk-padding-small">
    <div 
      class="uk-grid uk-grid-match uk-grid-small uk-child-width-1-2 uk-child-width-1-3@s uk-child-width-1-4@m uk-child-width-1-5@l uk-child-width-1-6@xl"
      uk-grid>
      <a
        v-for="article in articlelist"
        :key="article.Id"
        class="uk-margin-small-bottom uk-link-reset">
        <div class="uk-card uk-card-hover">
            <div class="uk-card-media-top">
                <img :src="article.ImageIdThumb" alt="">
            </div>
            <div class="uk-card-body uk-padding-small uk-padding-remove-bottom uk-text-small">
              <strong>{{ article.HeadCategory }}</strong><br>
              <span>{{ article.ArticleName }}</span>
            </div>
            <div class="uk-card-footer uk-padding-small uk-padding-remove-top uk-text-small">
              {{ article.PriceDisplay }}
          </div>
        </div>
      </a>
    </div>
  </section>
</template>

<script>
export default {
  components: {
  },
  data () {
    return { 
      products: null,
      articlelist: []
    }
  },
  mounted(){

  },
  async asyncData (context) 
  {
    try{  
      let [p] = await Promise.all([ 
      await context.app.$axios.$get('/sv-SE/webapi//article/GetArticleList?pi=29&ci=303&fi=0')                                                                                                                                                   
      ])
      return {
        products: p,
        articlelist: p[0].ArticleList
      }
      }catch(err){
      console.log(err);
    }
  } 
}
</script>

<style lang="scss">

</style>
