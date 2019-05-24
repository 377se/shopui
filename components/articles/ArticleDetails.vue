<template>
  <section class="uk-container uk-background-default">
    <div class="uk-grid uk-flex uk-flex-center uk-align-center uk-padding-small">
      <section class="uk-container uk-width-1-1 uk-width-2-3@m uk-width-xlarge@l">
        <template v-if="measureImage">
          <ArticlePageImages v-bind:measureImage="measureImage"></ArticlePageImages>
        </template>
        <template v-else>
          <ArticlePageImages
            v-bind:preloadedImage="this.preloadedImage"
            v-bind:images="article.Images"
          ></ArticlePageImages>
        </template>
      </section>

      <section class="uk-container uk-width-1-1 uk-width-1-3@m uk-width-medium@l">
        <ArticlePageHeader v-bind:title="article.Name" v-bind:subtitle="article.Brand"></ArticlePageHeader>
        <ArticlePageText v-bind:content="article.Description"></ArticlePageText>
        <div uk-text>STORLEKSGUIDE</div>
        <div uk-text>TVÄTTGUIDE</div>
      </section>
    </div>
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
  props: {
    article: {
      type: Object,
      default: () => ({
        Name: "",
        Images: [],
        Description: ""
      }),
      required: false
    },
    preloadedImage: {
      type: String,
      default: null,
      required: false
    },
    measureImage: {
      type: String,
      default: null,
      required: false
    }
  },
  mounted() {
    console.log(
      "ArticleDetails.mounted this.preloadedImage",
      this.preloadedImage
    );
  }
};
</script>

<style lang="scss">
</style>
