<template>
  <div class="flex h-screen overflow-hidden">
    <!-- Content area -->
    <div class="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
      <!-- Site header -->
      <HeaderDash />

      <main class="grow">
        <div class="px-20">
          <!-- Loader -->
          <div v-if="loading && delayedLoading" class="flex justify-center items-center py-4">
            <div class="loader"></div>
            <span>Loading...</span>
          </div>

          <!-- Article Content -->
          <div v-else>
            <div class="body" v-html="article.body"></div>
            <button @click="removeArticle"
              class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            >
              Delete Article
            </button>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import HeaderDash from "../partials/HeaderDash.vue";
import { getSingleArticle, deleteArticle } from "../api/resources.js";
import AudioPlayer from "../partials/AudioPlayer.vue";

export default {
  name: "SingleArticle",
  components: {
    HeaderDash,
    AudioPlayer,
  },
  data() {
    return {
      article: {},
      loading: true, // Loading state for data fetching
      delayedLoading: false, // State to control delayed loader display
    };
  },
  async created() {
    // Set a timeout to delay showing the loader
    setTimeout(() => {
      this.delayedLoading = true;
    }, 3000); // 1 second delay

    try {
      const { data } = await getSingleArticle(this.$route.params.slug);
      this.article = data;
    } catch (error) {
      console.error("Error fetching article:", error);
    } finally {
      this.loading = false; // Set loading to false once data is fetched
    }
  },
  methods: {
    async removeArticle() {
      try {
        await deleteArticle(this.article.id);
        this.$router.push('/admin/home');
        this.$toast.success(`Deletion Successful!`, {
          position: "top-right",
        });
      } catch {
        this.$toast.error(`There was an error submitting your request!`, {
          position: "top-right",
        });
      }
    }
  }
};
</script>

<!-- Add loader styles -->
<style>
.loader {
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-left-color: #22c55e; /* Change color to match your theme */
  border-radius: 50%;
  width: 36px;
  height: 36px;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
