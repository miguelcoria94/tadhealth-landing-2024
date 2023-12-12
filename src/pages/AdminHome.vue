<template>
  <div class="flex h-screen overflow-hidden">


    <!-- Content area -->
    <div class="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
      
      <!-- Site header -->
      <HeaderDash  />

      <main>
        <div class="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">

          <!-- Welcome banner -->
          <PodcastBanner />
          <ArticleBanner />
          
          <!-- Dashboard actions -->
          <div class="sm:flex sm:justify-between sm:items-center mb-8">

            

          </div>


        </div>
      </main>

    </div> 

  </div>
</template>

<script>
import { ref } from 'vue'
import HeaderDash from '../partials/HeaderDash.vue'
import PodcastBanner from '../partials/PodcastBanner.vue'
import ArticleBanner from '../partials/ArticleBanner.vue'

export default {
  name: 'Dashboard',
  components: {
    HeaderDash,
    PodcastBanner,
    ArticleBanner
  }
}
</script>