<template>
  <section class="uk-container uk-padding">
    <ArticlePageHeader v-bind:text="article.Name"></ArticlePageHeader>
    <ArticlePageImages v-bind:images="article.Images"></ArticlePageImages>
    <ArticlePageText v-bind:content="article.Description"></ArticlePageText>
  </section>
</template>

<script>
import ArticlePageHeader from "@/components/articles/ArticlePageHeader";
import ArticlePageImages from "@/components/articles/ArticlePageImages";
import ArticlePageText from "@/components/articles/ArticlePageText";
import ArticlePageSizeGuide from "@/components/articles/ArticlePageSizeGuide";
import ArticlePageWashAdvice from "@/components/articles/ArticlePageWashAdvice";

export default {
  components: {
    ArticlePageHeader,
    ArticlePageImages,
    ArticlePageText,
    ArticlePageSizeGuide,
    ArticlePageWashAdvice
  },
  data() {
    return {
      article: {
        Name: "",
        Images: [],
        Description: ""
      }
    };
  },
  async asyncData(context) {
    try {
      const article = await context.app.$axios.$get("testproduct.json");
      return { article };
    } catch (err) {
      console.log(err);
    }
  }
};
</script>

<style lang="scss">
</style>
