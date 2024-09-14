<template>
  <Head>
    <!-- HTML Meta Tags -->
    <title>TadHealth | Home</title>
    <meta
      name="description"
      content="Helping companies, organizations, and institutions give individuals access to crisis intervention and mental health care resources."
    />

    <!-- Facebook Meta Tags -->
    <meta
      property="og:url"
      content="https://ornate-vacherin-924a7c.netlify.app/"
    />
    <meta property="og:type" content="website" />
    <meta property="og:title" content="TadHealth | Home" />
    <meta
      property="og:description"
      content="Helping companies, organizations, and institutions give individuals access to crisis intervention and mental health care resources."
    />
    <meta
      property="og:image"
      content="https://i.ibb.co/BTKXWTR/tadhealth-meta-img.png"
    />

    <!-- Twitter Meta Tags -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta
      property="twitter:domain"
      content="ornate-vacherin-924a7c.netlify.app"
    />
    <meta
      property="twitter:url"
      content="https://ornate-vacherin-924a7c.netlify.app/"
    />
    <meta name="twitter:title" content="TadHealth | Home" />
    <meta
      name="twitter:description"
      content="Helping companies, organizations, and institutions give individuals access to crisis intervention and mental health care resources."
    />
    <meta
      name="twitter:image"
      content="https://i.ibb.co/BTKXWTR/tadhealth-meta-img.png"
    />

    <!-- Meta Tags Generated via https://www.opengraph.xyz -->
  </Head>
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
      <HeroHome />

      

      <Process />
      <Clients2 />
      <PhonesHome />
      <!-- <FeaturesHome /> -->
      <PricingFeaturesTwo />
      <Tabs />
      <Target />

      <Inter />
      <News />

      <!-- <Newsletter /> -->
      <HomeCTA />
    </main>

    <!-- Site footer -->
    <Footer />
  </div>
</template>

<script>
import { Head } from "@vueuse/head";
import Header from "./../partials/Header.vue";
import PageIllustration from "./../partials/PageIllustration.vue";
import HeroHome from "./../partials/HeroHome.vue";
import Process from "./../partials/Process.vue";
import FeaturesHome from "./../partials/FeaturesHome.vue";
import Tabs from "./../partials/Tabs.vue";
import Target from "./../partials/Target.vue";
import Newsletter from "./../partials/Newsletter.vue";
import Footer from "./../partials/Footer.vue";
import News from "./../partials/News.vue";
import Clients2 from "./../partials/Clients2.vue";
import Inter from "./../partials/Inter.vue";
import HomeCTA from "../partials/HomeCTA.vue";
import PhonesHome from "../partials/PhonesHome.vue";
import PricingFeaturesTwo from "../partials/PricingFeaturesTwo.vue";

export default {
  name: "Home",
  components: {
    Header,
    PageIllustration,
    HeroHome,
    Process,
    FeaturesHome,
    Tabs,
    Target,
    Newsletter,
    Footer,
    Head,
    News,
    Clients2,
    Inter,
    HomeCTA,
    PhonesHome,
    PricingFeaturesTwo,
},
};
</script>
