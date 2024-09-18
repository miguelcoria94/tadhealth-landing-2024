<template>
  <div class="flex flex-col min-h-screen overflow-hidden">

    <!-- Site header -->
    <Header />

    <!-- Page content -->
    <main class="grow">
      <p>I'm new</p>

      <!-- Page illustration -->
      <div class="relative max-w-6xl mx-auto h-0 pointer-events-none" aria-hidden="true">
        <PageIllustration />
      </div>

      <!-- Page sections -->
      <AnalyticsHeroNew />
      
      <!-- <AnalyticsFeatures /> -->
      <AnalyticsProcess />

    </main>

    <!-- Site footer -->
    <Footer />

  </div>
</template>

<script>
import Header from '../partials/Header.vue'
import PageIllustration from '../partials/PageIllustration.vue'
import AnalyticsHeroNew from '../partials/AnalyticsHeroNew.vue'
import AnalyticsProcess from '../partials/AnalyticsProcess.vue'
import PlatformFeatureThree from '../partials/PlatformFeatureThree.vue'
import Footer from '../partials/Footer.vue'


export default {
  name: 'Analytics',
  components: {
    Header,
    PageIllustration,
    AnalyticsHeroNew,
    AnalyticsProcess,
    PlatformFeatureThree,
    Footer,
},
};
</script>
