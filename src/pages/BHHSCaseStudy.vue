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
      <BHHSCaseStudy />
      <CtaEducation />

    </main>

    <!-- Site footer -->
    <Footer />

  </div>
</template>

<script>
import Header from './../partials/Header.vue'
import PageIllustration from '../partials/PageIllustration.vue'
import BHHSCaseStudy from '../partials/BHHSCaseStudy.vue'
import Footer from './../partials/Footer.vue'
import CtaEducation from "../partials/CtaEducation.vue"

export default {
  name: 'BlogPost',
  components: {
    Header,
    PageIllustration,
    BHHSCaseStudy,
    CtaEducation,
    Footer,
  },
};
</script>
