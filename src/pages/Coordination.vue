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
      <CoordinationHero />
      <CoordinationFeatures />
      <CoordinationFeaturesTwo />
      <CoordinationFeaturesThree />
      <CoordinationFeaturesFour />
      <CoordinationFeaturesFooter />

    </main>

    <!-- Site footer -->
    <Footer />

  </div>
</template>

<script>
import Header from '../partials/Header.vue'
import PageIllustration from '../partials/PageIllustration.vue'
import CoordinationHero from '../partials/CoordinationHero.vue'
import CoordinationFeatures from '../partials/CoordinationFeatures.vue'
import CoordinationFeaturesTwo from '../partials/CoordinationFeaturesTwo.vue'
import CoordinationFeaturesThree from '../partials/CoordinationFeaturesThree.vue'
import CoordinationFeaturesFour from '../partials/CoordinationFeaturesFour.vue'
import CoordinationFeaturesFooter from '../partials/CoordinationFeaturesFooter.vue'
import Footer from '../partials/Footer.vue'

export default {
  name: 'Coordination',
  components: {
    Header,
    PageIllustration,
    CoordinationHero,
    CoordinationFeatures,
    CoordinationFeaturesTwo,
    CoordinationFeaturesThree,
    CoordinationFeaturesFour,
    CoordinationFeaturesFooter,
    Footer
  },
};
</script>
