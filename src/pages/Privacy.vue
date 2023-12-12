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
      <PrivacyContent />

    </main>

    <!-- Site footer -->
    <Footer />

  </div>
</template>

<script>
import Header from './../partials/Header.vue'
import PageIllustration from '../partials/PageIllustration.vue'
import PrivacyContent from '../partials/PrivacyContent.vue'
import Newsletter from '../partials/Newsletter.vue'
import Footer from './../partials/Footer.vue'

export default {
  name: 'Privacy',
  components: {
    Header,
    PageIllustration,
    PrivacyContent,
    Newsletter,
    Footer,
  },
};
</script>
