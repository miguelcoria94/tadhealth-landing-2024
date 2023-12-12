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
      <TermsContent />

    </main>

    <!-- Site footer -->
    <Footer />

  </div>
</template>

<script>
import Header from './../partials/Header.vue'
import PageIllustration from '../partials/PageIllustration.vue'
import TermsContent from '../partials/TermsContent.vue'
import Newsletter from '../partials/Newsletter.vue'
import Footer from './../partials/Footer.vue'

export default {
  name: 'Terms',
  components: {
    Header,
    PageIllustration,
    TermsContent,
    Newsletter,
    Footer,
  },
};
</script>
