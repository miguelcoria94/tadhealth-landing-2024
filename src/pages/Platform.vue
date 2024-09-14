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
      <!-- <PlatformHero /> -->
      <PlatformFeature />

      <!-- <PlatformFeatureTwo /> -->
      <!-- <PlatformFeatureThree /> -->
      <!-- <PlatformFeatureFour /> -->
      <PlatformFeatureFive />

      <Tabs />
      <!-- <ResourcesHero /> -->
      <ResourcesFeature />
      <ResourcesBlocks />
      <!-- <ResourcesFAQs /> -->

      <!-- <CoordinationHero /> -->
      <CoordinationFeatures />
      <CoordinationFeaturesThree />
      <!-- <CoordinationFeaturesTwo /> -->
      <!-- <CoordinationFeaturesFour /> -->
      <!-- <CoordinationFeaturesFooter /> -->

      <!-- <SafetyHero /> -->
      <SafetyHeaderTwo />
      <SafetyFeatures />
      <SafetyFeaturesTwo />
      <!-- <SafetyFeaturesThree /> -->
      <PlatformFeatureSix />

      <Newsletter />
    </main>

    <!-- Site footer -->
    <Footer />
  </div>
</template>

<script>
import Header from "../partials/Header.vue";
import PageIllustration from "../partials/PageIllustration.vue";
import SafetyHeaderTwo from "../partials/SafetyHeaderTwo.vue";
import PlatformHero from "../partials/PlatformHero.vue";
import PlatformFeature from "../partials/PlatformFeature.vue";
import PlatformFeatureTwo from "../partials/PlatformFeatureTwo.vue";
import PlatformFeatureThree from "../partials/PlatformFeatureThree.vue";
import PlatformFeatureFour from "../partials/PlatformFeatureFour.vue";
import PlatformFeatureFive from "../partials/PlatformFeatureFive.vue";
import PlatformFeatureSix from "../partials/PlatformFeatureSix.vue";
import ResourcesHero from "../partials/ResourcesHero.vue";
import ResourcesFeature from "../partials/ResourcesFeature.vue";
import ResourcesBlocks from "../partials/ResourcesBlocks.vue";
import ResourcesFAQs from "../partials/ResourcesFAQs.vue";
import Newsletter from "../partials/Newsletter.vue";
import Tabs from "../partials/Tabs.vue";

import CoordinationHero from "../partials/CoordinationHero.vue";
import CoordinationFeatures from "../partials/CoordinationFeatures.vue";
import CoordinationFeaturesTwo from "../partials/CoordinationFeaturesTwo.vue";
import CoordinationFeaturesThree from "../partials/CoordinationFeaturesThree.vue";
import CoordinationFeaturesFour from "../partials/CoordinationFeaturesFour.vue";
import CoordinationFeaturesFooter from "../partials/CoordinationFeaturesFooter.vue";

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
    PlatformHero,
    PlatformFeature,
    PlatformFeatureTwo,
    PlatformFeatureThree,
    PlatformFeatureFour,
    PlatformFeatureFive,
    PlatformFeatureSix,
    ResourcesHero,
    ResourcesFeature,
    ResourcesBlocks,
    ResourcesFAQs,
    CoordinationHero,
    CoordinationFeatures,
    CoordinationFeaturesTwo,
    CoordinationFeaturesThree,
    CoordinationFeaturesFour,
    CoordinationFeaturesFooter,
    SafetyHero,
    SafetyFeatures,
    SafetyFeaturesTwo,
    SafetyFeaturesThree,
    SafetyHeaderTwo,
    Footer,
    Tabs,
    Newsletter,
  },
};
</script>
