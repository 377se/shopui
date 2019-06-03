<template>
  <section class="uk-container uk-padding-small">
    <div class="uk-text-small">
      <h2>Bli medlem i LFCs Officiella Svenska Supporterklubb!</h2>
      <p>Bli medlem i Liverpools svenska supporterklubb och ta del av en härlig röd gemenskap. Genom Sam Dodds säljs medlemsskap till Official Supporters Club Sweden och detta ger dig tillgång till forum, tävlingar, utlottningar och mycket annat i Sveriges bästa supporterklubb. Ett par exempel finns nedan och du hittar  alla medlemsförmåner på lfc.nu.</p>
      <p class="uk-text-bold">
        <span class="uk-margin-small-right lfc-green" uk-icon="check"/>10% + 50 kronor hos Sam Dodds<br>
        <span class="uk-margin-small-right lfc-green" uk-icon="check"/>15% rabatt på O'Learys<br>
        <span class="uk-margin-small-right lfc-green" uk-icon="check"/>Utlottningar av resor och priser<br>
        <span class="uk-margin-small-right lfc-green" uk-icon="check"/>Tävlingar med fina priser
      </p>
      <p>Är du medlem sedan tidigare, logga då in på ditt konto för att förlänga ditt befintliga medlemsskap. Har du glömt eller saknar lösenord kan du enkelt återställa detta.</p>
    </div>
    <h3>Välj medlemspaket (1/3)</h3>
    <div
      class="uk-flex uk-flex-center uk-grid uk-child-width-1-2 uk-child-width-1-3@s uk-child-width-1-4@m uk-child-width-1-5@l uk-child-width-1-6@xl"
      uk-grid>
      <ArticleCardMember
        v-for="article in articles"
        :key="article.Id"
        :article="article"
      />
    </div>
  </section>
</template>
<script>
import ArticleCardMember from "@/components/articles/ArticleCardMember";
export default {
  components:{
    ArticleCardMember
  },
  data () {
    return {
      story: { content: {} },
      articles: []
    }
  },
  mounted () {
    this.$storybridge.on(['input', 'published', 'change'], (event) => {
      if (event.action == 'input') {
        if (event.story.id === this.story.id) {
          this.story.content = event.story.content
        }
      } else {
        window.location.reload()
      }
    })
  },
  async asyncData (context) {
    // Check if we are in the editor mode
      let version = context.query._storyblok || context.isDev ? 'draft' : 'published'
    try {
      let [a, s] = await Promise.all([
        await context.app.$axios.$get(
          "https://www.samdodds.com/sv-SE/webapi/article/GetArticleList?pi=0&ci=61&fi=0&moreprops=true"
        ),
        await context.app.$storyapi.get('cdn/stories/home', {
          version: version
        })
      ]);
      return {
        articles: a[0].ArticleList,
        story: s.data.story
      };
    } catch (err) {
      console.log(err);
      console.log(err.request);
    }

  }
}
</script>
<style lang="scss">
@import "~scss/vars";

.lfc-green{
  color: $global-secondary-background;
}
</style>
