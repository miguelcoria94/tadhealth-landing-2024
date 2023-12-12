<template>
  <div class="flex flex-col min-h-screen overflow-hidden">
    <!-- Site header -->
    <Header />

    <main class="grow">
      <!-- Page sections -->
      <section class="relative">
        <div class="max-w-8xl mx-auto px-4 sm:px-6">
          <div class="pt-32 pb-12 md:pt-40 md:pb-20">
            <div class="max-w-3xl mx-auto">
              <h2 class="h2 mb-10">{{ article.title }}</h2>
              <div class="body" v-html="article.body"></div>
            </div>
          </div>
        </div>
      </section>
    </main>

    <!-- Site footer -->
    <Footer />
  </div>
</template>

<script>


import Header from "./../partials/Header.vue";
import Footer from "./../partials/Footer.vue";
import BlogHero from "./../partials/BlogHero.vue";
import BlogHeader from "./../partials/BlogHeader.vue";
import ArticlesList from "./../partials/ArticlesList.vue";
import Talks from "./../partials/Talks.vue";
import Projects from "./../partials/Projects.vue";
import WidgetNewsletter from "../partials/WidgetNewsletter.vue";
import WidgetSponsor from "../partials/WidgetSponsor.vue";
import WidgetBook from "../partials/WidgetBook.vue";
import { getSingleArticle } from "../api/resources.js";

export default {
  name: "Article",
  components: {
    Header,
    Footer,
    BlogHero,
    BlogHeader,
    ArticlesList,
    Talks,
    Projects,
    WidgetNewsletter,
    WidgetSponsor,
    WidgetBook,
  },
  data() {
    return {
      article: {},
    };
  },
  async created() {
    const { data } = await getSingleArticle(this.$route.params.slug);
    this.article = data;
  },
};
</script>

<style >



p img {
    display: block !important;
			margin: auto !important;
}
</style>