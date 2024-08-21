<template>
  <Head>
    <title>TadHealth | Manage Podcasts</title>
  </Head>
  <div class="flex flex-col min-h-screen overflow-hidden">
    <!-- Site header -->
    <HeaderDash/>

    <!-- Page content -->
    <main class="grow">
      <div
        class="grid grid-flow-col sm:auto-cols-max justify-start sm:justify-end gap-2 m-5"
      >
      <router-link to="/admin/upload-podcast" >
<button class="btn bg-green-500 hover:bg-green-400 text-white">
          <svg
            class="w-4 h-4 fill-current opacity-50 shrink-0"
            viewBox="0 0 16 16"
          >
            <path
              d="M15 7H9V1c0-.6-.4-1-1-1S7 .4 7 1v6H1c-.6 0-1 .4-1 1s.4 1 1 1h6v6c0 .6.4 1 1 1s1-.4 1-1V9h6c.6 0 1-.4 1-1s-.4-1-1-1z"
            />
          </svg>
          <span class="xs:block ml-2">Add New Blog</span>
        </button>
      </router-link>
        
      </div>
      <!-- Page illustration -->
      <PodcastsTable />
    </main>
  </div>
</template>

<script>
import { Head } from "@vueuse/head";
import HeaderDash from "./../partials/HeaderDash.vue";
import PageIllustration from "../partials/PageIllustration.vue";
import HeroAbout from "../partials/HeroAbout.vue";
import TeamImages from "../partials/TeamImages.vue";
import Timeline from "../partials/Timeline.vue";
import Team from "../partials/Team.vue";
import PodcastsTable from "../partials/PodcastsTable.vue"
import TestimonialsCarousel from "../partials/TestimonialsCarousel.vue";
import Career from "../partials/Career.vue";
import Clients from "../partials/Clients.vue";
import Newsletter from "../partials/Newsletter.vue";
import Footer from "./../partials/Footer.vue";

export default {
  name: "PodcastsList",
  components: {
    Head,
    HeaderDash,
    PageIllustration,
    HeroAbout,
    TeamImages,
    PodcastsTable,
    Timeline,
    Team,
    TestimonialsCarousel,
    Career,
    Clients,
    Newsletter,
    Footer,
  },
};
</script>
