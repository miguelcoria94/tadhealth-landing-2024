<template>
  <div
    class="relative bg-white border border-slate-200 p-4 sm:p-6 rounded-sm overflow-hidden mb-8"
  >
    <!-- Background illustration -->

    <!-- Content -->
    <div class="relative mb-5">
      <h1 class="text-2xl md:text-3xl text-slate-800 font-bold mb-1">
        Manage Podcasts
      </h1>
      <p>Upload, edit, delete blogs.</p>
    </div>
    <button>
      <div class="flex flex-wrap -mx-3 mt-6">
        <div class="w-full px-3">
          <router-link to="/admin/podcasts" class="block shrink-0">
          <button class="btn text-white bg-green-500 hover:bg-green-400 w-full">
            Manage Podcasts
          </button>
          </router-link>
          
        </div>
      </div>
    </button>
  </div>
</template>

<script>
import Podcast from "../pages/PodcastsActive.vue";

export default {
  name: "PodcastBanner",
  components: {Podcast},
};
</script>
