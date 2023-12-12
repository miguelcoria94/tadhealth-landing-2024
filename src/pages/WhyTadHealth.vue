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
      
      <Intergrations />
      <Pricing />
      <Faqs />
      
      
      <Testimonials />
      <Cta />

    </main>

    <!-- Site footer -->
    <Footer />

  </div>
</template>

<script>
import Header from '../partials/Header.vue'
import PageIllustration from '../partials/PageIllustration.vue'
import WhyHeader from '../partials/WhyHeader.vue'
import Faqs from '../partials/Faqs.vue'
import Testimonials from '../partials/Testimonials.vue'
import Cta from '../partials/Cta.vue'
import Footer from '../partials/Footer.vue'
import Intergrations from "../partials/Intergrations.vue"
import Pricing from "../partials/PricingCom.vue"

export default {
  name: 'WhyTadHealth',
  components: {
    Header,
    PageIllustration,
    WhyHeader,
    Faqs,
    Testimonials,
    Cta,
    Footer,
    Intergrations,
    Pricing
  },
};
</script>
