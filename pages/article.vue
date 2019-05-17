<template>
  <ArticleDetails v-bind:article="article" v-bind:preloadedImage="preloadedImage"></ArticleDetails>
</template>

<script>
import ArticleDetails from "@/components/articles/ArticleDetails";

export default {
  components: {
    ArticleDetails
  },
  data() {
    return {
      preloadedImage: null,
      article: {
        Name: "",
        Images: [],
        Description: ""
      }
    };
  },
  async asyncData({ app, query }) {
    try {
      const url = `https://www.samdodds.com/sv-SE/webapi/article?id=${
        query.id
      }`;
      const article = await app.$axios.$get(url);

      if (query.withThumb) {
        console.log("article.asyncData: preloadedImage", query.withThumb);
        return {
          article,
          preloadedImage: query.withThumb
        };
      }

      return { article };
    } catch (err) {
      console.log(err);
    }
  }
};
</script>

<style lang="scss">
</style>
