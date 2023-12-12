<template>
  <div class="flex flex-col min-h-screen overflow-hidden">

    <!-- Site header -->
    <Header />

    <!-- Page content -->
    <main class="grow">

      <!-- Page illustration -->
      <div class="relative max-w-6xl mx-auto h-0 pointer-events-none" aria-hidden="true">
        <PageIllustration />
      </div>

      <!-- Page sections -->
      <ArticleOne />
      <Newsletter />

    </main>

    <!-- Site footer -->
    <Footer />

  </div>
</template>

<script>
import Header from './../partials/Header.vue'
import PageIllustration from '../partials/PageIllustration.vue'
import ArticleOne from '../partials/ArticleOne.vue'
import Newsletter from '../partials/Newsletter.vue'
import Footer from './../partials/Footer.vue'

export default {
  name: 'TalkAndWalk',
  components: {
    Header,
    PageIllustration,
    ArticleOne,
    Newsletter,
    Footer,
  },
};
</script>
