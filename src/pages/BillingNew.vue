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
      <BillingHeroNew />
      
      <!-- <AnalyticsFeatures /> -->
      <BillingProcess />

      <!-- <Case Study /> -->
      <CaseStudy />
    </main>

    <!-- Site footer -->
    <Footer />

  </div>
</template>


<script>
import Header from '../partials/Header.vue'
import PageIllustration from '../partials/PageIllustration.vue'
import BillingHeroNew from '../partials/BillingHeroNew.vue'
import BillingProcess from '../partials/BillingProcess.vue'
import CaseStudy from '../partials/CaseStudy.vue'
import Footer from '../partials/Footer.vue'

export default {
  name: 'BillingNew',
  components: {
    Header,
    PageIllustration,
    BillingHeroNew,
    BillingProcess,
    CaseStudy,
    Footer
  }
};
</script>
