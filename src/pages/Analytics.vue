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
      <AnalyticsHero />
      <PlatformFeatureThree />
      <!-- <AnalyticsFeatures /> -->
      <AnalyticsFeaturesTwo />
      <AnalyticsFeaturesThree />
      <AnalyticsFAQs />

    </main>

    <!-- Site footer -->
    <Footer />

  </div>
</template>

<script>
import Header from '../partials/Header.vue'
import PageIllustration from '../partials/PageIllustration.vue'
import AnalyticsHero from '../partials/AnalyticsHero.vue'
import AnalyticsFeatures from '../partials/AnalyticsFeatures.vue'
import AnalyticsFeaturesTwo from '../partials/AnalyticsFeaturesTwo.vue'
import AnalyticsFeaturesThree from '../partials/AnalyticsFeaturesThree.vue'
import AnalyticsFAQs from '../partials/AnalyticsFAQs.vue'
import PlatformFeatureThree from '../partials/PlatformFeatureThree.vue'
import Footer from '../partials/Footer.vue'


export default {
  name: 'Analytics',
  components: {
    Header,
    PageIllustration,
    AnalyticsHero,
    AnalyticsFeatures,
    AnalyticsFeaturesTwo,
    AnalyticsFeaturesThree,
    AnalyticsFAQs,
    PlatformFeatureThree,
    Footer,
},
};
</script>
