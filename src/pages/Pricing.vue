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

      <!-- <PricingHero /> -->
      <!-- <PricingFeaturesTwo /> -->
      <!-- <Intergrations /> -->
      <PricingCom />
      <CoordinationFeaturesTwo />
      <!-- <Faqs /> -->
<!--       
      <PricingFeatures />
      
      <PricingFeaturesThree /> -->
      <PricingFAQs />
      <PricingFooter />
    </main>

    <!-- Site footer -->
    <Footer />
  </div>
</template>

<script>
import Header from "../partials/Header.vue";
import PageIllustration from "../partials/PageIllustration.vue";
import PricingHero from "../partials/PricingHero.vue";
import PricingFeatures from "../partials/PricingFeatures.vue";
// import PricingFeaturesTwo from "../partials/PricingFeaturesTwo.vue";
import PricingFeaturesThree from "../partials/PricingFeaturesThree.vue";
import PricingFAQs from "../partials/PricingFAQs.vue";
import PricingFooter from "../partials/PricingFooter.vue";
import CoordinationFeaturesTwo from "../partials/CoordinationFeaturesTwo.vue";
import Footer from "../partials/Footer.vue";
// import Intergrations from "../partials/Intergrations.vue";
import Faqs from "../partials/Faqs.vue";
import PricingCom from "../partials/PricingCom.vue";

export default {
  name: "Pricing",
  components: {
    Header,
    PageIllustration,
    PricingHero,
    PricingFeatures,
    // PricingFeaturesTwo,
    PricingFeaturesThree,
    PricingFAQs,
    PricingFooter,
    CoordinationFeaturesTwo,
    Footer,
    // Intergrations,
    Faqs,
    PricingCom,
  },
};
</script>
