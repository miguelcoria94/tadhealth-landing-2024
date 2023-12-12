<template>
  <div class="flex flex-col min-h-screen overflow-hidden">
    <!-- Site header -->
    <Header />

    <!-- Page content -->
    <main class="grow">
      <SimpleCards />
      <FeaturesWorld />
      <ProfitCards />
      <CtaEducation />
    </main>

    <!-- Site footer -->
    <Footer />
  </div>
</template>

<script>
import Header from "./../partials/Header.vue";
import Footer from "./../partials/Footer.vue";
import SimpleCards from "./../partials/SimpleCards.vue";
import FeaturesWorld from "./../partials/FeaturesWorld.vue";
import ProfitCards from "./../partials/ProfitCards.vue";
import CtaEducation from './../partials/CtaEducation.vue';

export default {
  name: "education",
  components: {
    Header,
    Footer,
    SimpleCards,
    FeaturesWorld,
    ProfitCards,
    CtaEducation,
  },
};
</script>
