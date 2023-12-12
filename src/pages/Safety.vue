<template>
  <div class="flex flex-col min-h-screen overflow-hidden">
    <!-- Site header -->
    <Header />

    <!-- Page content -->
    <main class="grow">
      <!-- Page illustration -->
      <div
        class="relative max-w-6xl mx-auto h-0 pointer-events-none"
        aria-hidden="true"
      >
        <PageIllustration />
      </div>

      <!-- Page sections -->
      <SafetyHero />
      <SafetyFeatures />
      <SafetyFeaturesTwo />
      <SafetyFeaturesThree />
      
    </main>

    <!-- Site footer -->
    <Footer />
  </div>
</template>

<script>
import Header from "../partials/Header.vue";
import PageIllustration from "../partials/PageIllustration.vue";
import SafetyHero from "../partials/SafetyHero.vue";
import SafetyFeatures from "../partials/SafetyFeatures.vue";
import SafetyFeaturesTwo from "../partials/SafetyFeaturesTwo.vue";
import SafetyFeaturesThree from "../partials/SafetyFeaturesThree.vue";
import Footer from "../partials/Footer.vue";

export default {
  name: "Features",
  components: {
    Header,
    PageIllustration,
    SafetyHero,
    SafetyFeatures,
    SafetyFeaturesTwo,
    SafetyFeaturesThree,
    Footer,
  },
};
</script>
