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
      <ResourcesHero />
      <ResourcesFeature />
      <ResourcesBlocks />
      <ResourcesFAQs />
      
    </main>

    <!-- Site footer -->
    <Footer />
  </div>
</template>

<script>
import Header from "../partials/Header.vue";
import PageIllustration from "../partials/PageIllustration.vue";
import ResourcesHero from "../partials/ResourcesHero.vue";
import ResourcesFeature from "../partials/ResourcesFeature.vue";
import ResourcesBlocks from "../partials/ResourcesBlocks.vue";
import ResourcesFAQs from "../partials/ResourcesFAQs.vue";
import Footer from "../partials/Footer.vue";


export default {
  name: "Resources",
  components: {
    Header,
    PageIllustration,
    ResourcesHero,
    ResourcesFeature,
    ResourcesBlocks,
    ResourcesFAQs,
    Footer,
},
};
</script>
