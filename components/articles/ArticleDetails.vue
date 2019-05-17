<template>
  <section class="uk-container uk-padding uk-background-default">
    <div uk-grid>
      <section class="uk-container uk-width-xlarge">
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

      <section class="uk-container uk-width-medium">
        <ArticlePageHeader v-bind:text="article.Name"></ArticlePageHeader>
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
