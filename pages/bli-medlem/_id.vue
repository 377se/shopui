<template>
  <section class="uk-container uk-padding-small">
    <h3>Välj dina tillval (2/3)</h3>
    <p class="uk-text-small">Priserna gäller bara då du köper medlemspaket.</p>
    <div
      class="uk-flex uk-flex-center uk-grid uk-child-width-1-2 uk-child-width-1-3@s uk-child-width-1-4@m uk-child-width-1-5@l uk-child-width-1-6@xl"
      uk-grid>
      <ArticleCardSimple
        v-for="article in articles"
        :key="article.Id"
        :article="article"
      />
    </div>
    <div>
      <nuxt-child keep-alive />
    </div>
  </section>
</template>
<script>
import ArticleCardSimple from "@/components/articles/ArticleCardSimple";
export default {
  components:{
    ArticleCardSimple
  },
  data () {
    return {
      articles: []
    }
  },
  async asyncData (context) {
    try {
      let [a] = await Promise.all([
        await context.app.$axios.$get(
          "https://www.samdodds.com/sv-SE/webapi/article/GetArticleList?rt=Membership&id="+context.route.params.id
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

</style>
