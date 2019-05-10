<template>
  <div>
    <section class="uk-container uk-padding-small">
      <div
        class="uk-grid uk-grid-match uk-grid-small uk-child-width-1-2 uk-child-width-1-3@s uk-child-width-1-4@m uk-child-width-1-5@l uk-child-width-1-6@xl"
        uk-grid
      >
        <ArticleCard v-for="article in articlelist" :key="article.Id" :article="article"></ArticleCard>
      </div>
    </section>
  </div>
  
</template>

<script>
import ArticleCard from "@/components/articles/ArticleCard";
import LFCHeader from "@/components/lfc/LFCHeader";

export default {
  components: {
    ArticleCard,
    LFCHeader
  },
  data() {
    return {
      products: null,
      articlelist: []
    };
  },
  mounted() {},
  async asyncData(context) {
    try {
      let [p] = await Promise.all([
        await context.app.$axios.$get(
          "/sv-SE/webapi/article/GetArticleList?pi=29&ci=303&fi=0"
        )
      ]);
      return {
        products: p,
        articlelist: p[0].ArticleList
      };
    } catch (err) {
      console.log(err);
    }
  }
};
</script>

<style lang="scss">
</style>
