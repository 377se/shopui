<template>
  <div class="rel-root">
    <section class="uk-container uk-padding-small">
      <div
        class="uk-grid uk-grid-match uk-grid-small uk-child-width-1-2 uk-child-width-1-3@s uk-child-width-1-4@m uk-child-width-1-5@l uk-child-width-1-6@xl"
        uk-grid
      >
        <ArticleCard
          v-for="article in articles"
          :key="article.Id"
          :article="article"
          v-on:showArticle="handleShowArticle"
        ></ArticleCard>
      </div>
    </section>

    <div v-if="outroArticle" class="overlay">
      <ArticleDetails v-bind:measureImage="this.outroImageSrc"/>
    </div>

    <div class="overlay" ref="whiteout"></div>
  </div>
</template>

<script>
import ArticleCard from "@/components/articles/ArticleCard";
import ArticleDetails from "@/components/articles/ArticleDetails";

export default {
  components: {
    ArticleCard,
    ArticleDetails
  },
  data() {
    return {
      articles: [],
      outroArticle: null,
      outroImageSrc: null
    };
  },
  mounted() {},
  async asyncData(context) {
    try {
      let [p] = await Promise.all([
        await context.app.$axios.$get(
          "https://www.samdodds.com/sv-SE/webapi/article/GetArticleList?pi=29&ci=303&fi=0"
        )
      ]);
      return {
        articles: p[0].ArticleList
      };
    } catch (err) {
      console.log(err);
      console.log(err.request);
    }
  },

  methods: {
    handleShowArticle: function({ articleId, imageSrc, image }) {
      console.log("handleShowArticle", articleId, image);

      this.renderSkeletonArticleDetails(articleId, imageSrc)
        .then(imageBoundingBox => this.transition(image, imageBoundingBox))
        .then(() => this.navigateToArticle(articleId, imageSrc));
    },
    renderSkeletonArticleDetails: function(articleId, imageSrc) {
      console.log("renderSkeletonArticleDetails");
      const article = this.articles.filter(a => a.id === articleId);

      return new Promise(resolve => {
        this.$el.addEventListener(
          "articleImageMeasured",
          event => resolve(event.detail),
          { capture: true }
        );

        this.outroArticle = article;
        this.outroImageSrc = imageSrc;
      });
    },
    transition: function(image, targetBoundingBox) {
      console.log("transition", image, targetBoundingBox);
      return new Promise(resolve => {
        const sourceBoundingBox = image.getBoundingClientRect();

        const scale = targetBoundingBox.width / sourceBoundingBox.width;
        let offsetX = targetBoundingBox.x - sourceBoundingBox.x;
        let offsetY = targetBoundingBox.y - sourceBoundingBox.y;

        const centerX = sourceBoundingBox.width / 2;
        const centerY = sourceBoundingBox.height / 2;

        let style = `
          transform-origin: 0 0 0;
          transform: translate(${offsetX}px, ${offsetY}px) scale(${scale}) ;
          position: absolute;
          z-index: 110;
          transition: transform 200ms;
          transition-timing-function: ease-in-out;
        `;
        image.style.cssText = style;

        const whiteout = this.$refs.whiteout;
        console.log("whiteout", whiteout);
        whiteout.style.cssText = `
          visibility: visible;
          background-color: rgba(255, 255, 255, 255);
          transition: background-color 150ms;
          transition-timing-function: ease-in-out;
        `;

        setTimeout(resolve, 500);
      });
    },
    navigateToArticle: function(articleId, preloadedImageSrc) {
      console.log("navigateToArticle");
      // TODO: Save preloadeImageSrc in store / session for given articleId key instead
      //  and later replace it with actual image (since that's in the browser cache then)
      this.$router.push({
        path: "/article",
        query: { id: articleId, withThumb: preloadedImageSrc }
      });
    }
  }
};
</script>

<style lang="scss">
.rel-root {
  position: relative;
  background-color: white;
}

.overlay {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: rgba(255, 255, 255, 0);
  z-index: 100;
  visibility: hidden;
}
</style>
