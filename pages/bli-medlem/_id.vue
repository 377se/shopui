<template>
  <section
    style="padding-bottom:80px;">
    <div 
      class="uk-container uk-padding-small">
      <h3>Välj dina tillval (2/3)</h3>
      <p class="uk-text-small">Priserna gäller bara då du köper medlemspaket.</p>
      <div
        class="uk-grid-small uk-child-width-1-2 uk-child-width-1-4@m"
        uk-height-match="target: > a > .uk-card"
        uk-grid>
        <ArticleCardSimple
          v-for="article in articles"
          :key="article.Id"
          :article="article"
        />
      </div>
      <div>
        <nuxt-child 
          keep-alive />
      </div>
    </div>
    <div 
      class="lfc-checkout-bar uk-background-primary uk-light uk-width-1-1">
        <div class="uk-container uk-padding-small uk-flex uk-flex-middle">
          <span class="uk-width-expand">Summa {{ total }} {{ currency }}</span>
          <button 
            class="uk-button uk-button-default"
            style="text-transform:none;">Till betalningen!</button>
        </div>
    </div> 
  </section>
</template>
<script>
import ArticleCardSimple from "@/components/articles/ArticleCardSimple";
import { mapMutations } from 'vuex'

export default {
  components:{
    ArticleCardSimple
  },
  data () {
    return {
      articles: [],
      currency: this.$store.state.currency
    }
  },
  computed:{
    total(){
      return this.$store.state.total
    }
  },
  mounted(){
    window.scrollTo(0,0);
  },
  async fetch ({app, store, params}) {
    let data = await app.$axios.$get("https://www.samdodds.com/sv-SE/webapi/article?id="+params.id)
    return store.commit('addmemberpackage', data)
  },
  async asyncData ({app, params}) {
    try {
      let [a] = await Promise.all([
        await app.$axios.$get(
          "https://www.samdodds.com/sv-SE/webapi/article/GetArticleList?rt=Membership&id="+params.id
        )
      ]);
      return {
        articles: a[0].ArticleList
      };
    } catch (err) {
      console.log(err);
      console.log(err.request);
    }

  }
}
</script>
<style lang="scss" scoped>
@import "~scss/vars";
.lfc-checkout-bar{
  position:fixed;
  bottom:0;
  left:0;
}
</style>
