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
import { TweenLite, Sine } from "gsap";

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
      this.renderSkeletonArticleDetails(articleId, imageSrc)
        .then(imageBoundingBox => this.transition(image, imageBoundingBox))
        .then(() => this.navigateToArticle(articleId, imageSrc));
    },
    renderSkeletonArticleDetails: function(articleId, imageSrc) {
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
      return new Promise(resolve => {
        const sourceBoundingBox = image.getBoundingClientRect();

        const scale = targetBoundingBox.width / sourceBoundingBox.width;
        let offsetX = targetBoundingBox.x - sourceBoundingBox.x;
        let offsetY = targetBoundingBox.y - sourceBoundingBox.y;

        TweenLite.set(image, {
          position: "absolute",
          zIndex: 110,
          transformOrigin: "0 0 0"
        });
        TweenLite.to(image, 0.2, {
          x: offsetX,
          y: offsetY + window.scrollY,
          scale: scale,
          ease: Sine.easeOut,
          onComplete: resolve
        });

        const whiteout = this.$refs.whiteout;
        TweenLite.set(whiteout, {
          visibility: "visible",
          opacity: 0
        });
        TweenLite.to(whiteout, 0.1, {
          opacity: 1,
          ease: Sine.easeOut
        });
      });
    },
    navigateToArticle: function(articleId, preloadedImageSrc) {
      console.log("navigateToArticle");
      // TODO: Save preloadeImageSrc in store / session for given articleId key instead
      //  and later replace it with actual image (since that's in the browser cache then)
      window.transitionStorage = {
        withThumb: preloadedImageSrc
      };
      this.$router.push({
        path: "/article",
        query: { id: articleId }
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
  background-color: white;
  z-index: 100;
  visibility: hidden;
}
</style>
