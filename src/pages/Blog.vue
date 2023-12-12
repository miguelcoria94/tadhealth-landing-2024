<template>
  <div class="flex flex-col min-h-screen overflow-hidden">

    <!-- Site header -->
    <Header />

    <!-- Page content -->
    <main class="w-full h-full">

      
      <!-- Blog Header -->
      <BlogHero />
      <!-- <BlogHeader /> -->
      <!-- Content -->
          <div class="grow md:flex space-y-8 md:space-y-0 md:space-x-8 pb-16 md:pb-20 p-20">

            <!-- Middle area -->
            <div class="grow">
              <div class="max-w-[800px]">
                <div class="space-y-10">

                  <ArticlesList />
                  <Talks />

                </div>
              </div>
            </div>

            <!-- Right sidebar -->
            <aside class="md:w-[240px] lg:w-[300px] shrink-0">
              <div class="space-y-6">

                <WidgetNewsletter />
                <!-- <WidgetSponsor /> -->
                <WidgetBook />

              </div>
            </aside>

          </div>
      

    </main>

    <!-- Site footer -->
    <Footer />

  </div>
</template>

<script>
import Header from './../partials/Header.vue'
import Footer from './../partials/Footer.vue'
import BlogHero from './../partials/BlogHero.vue'
import BlogHeader from './../partials/BlogHeader.vue'
import ArticlesList from "./../partials/ArticlesList.vue"
import Talks from './../partials/Talks.vue'
import Projects from './../partials/Projects.vue'
import WidgetNewsletter from '../partials/WidgetNewsletter.vue'
import WidgetSponsor from '../partials/WidgetSponsor.vue'
import WidgetBook from '../partials/WidgetBook.vue'

export default {
  name: 'Blog',
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
    WidgetBook
  },
};
</script>
