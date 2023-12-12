<template>
  <div class="flex flex-col min-h-screen overflow-hidden">
    <!-- Site header -->
    <Header />

    <!-- Page content -->
    <main class="grow">
      <PlatformFeatureFour />
      <CompanyLogos />
      <TargetTwoA />

      <!-- <TargetTwo /> -->

      <!-- <Cta /> -->
      <!-- <EducationFeatureTwo /> -->

      <!-- <EducationFeature /> -->
      <!-- <Pricing /> -->

      <!-- <Phones /> -->
      <EducationTabs />
      <EducationFeatures />
      <CtaEducation />
      <!--  -->
      <!-- <Intergrations />
      <Pricing />
      <Faqs /> -->

      <Testimonials />
      <Cta />
    </main>

    <!-- Site footer -->
    <Footer />
  </div>
</template>

<script>
import Header from "./../partials/Header.vue";
import Footer from "./../partials/Footer.vue";
import TargetTwo from "./../partials/TargetTwo.vue";
import EducationFeature from "./../partials/EducationFeature.vue";
import EducationFeatureTwo from "./../partials/EducationFeatureTwo.vue";
import CompanyLogos from "./../partials/CompanyLogos.vue";
import CtaEducation from "./../partials/CtaEducation.vue";
import Pricing from "../partials/PricingCom.vue";
import Cta from "./../partials/Cta.vue";
import Phones from "./../partials/Phones.vue";
import TargetTwoA from "./../partials/TargetTwoA.vue";
import EducationTabs from "./../partials/EducationTabs.vue";
import EducationFeatures from "./../partials/EducationFeatures.vue";
import Intergrations from "../partials/Intergrations.vue";
import Faqs from "../partials/Faqs.vue";
import Testimonials from "../partials/Testimonials.vue";
import PlatformFeatureFour from "../partials/PlatformFeatureFour.vue";

export default {
  name: "education",
  components: {
    Header,
    Footer,
    TargetTwo,
    EducationFeature,
    EducationFeatureTwo,
    TargetTwoA,
    CompanyLogos,
    EducationTabs,
    CtaEducation,
    Pricing,
    EducationFeatures,
    Phones,
    Cta,
    PlatformFeatureFour,
    Intergrations,
    Faqs,
    Testimonials,
  },
};
</script>
