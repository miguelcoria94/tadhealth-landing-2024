<template>
  <div class="flex h-screen overflow-hidden">
    <!-- Content area -->
    <div
      class="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden"
    >
      <!-- Site header -->
      <HeaderDash />

      <main class="grow">
        <div class="px-20">
        <div class="body" v-html="article.body"></div>
          <button @click="removeArticle"
            class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          >
            Delete Article
          </button>
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
    };
  },
  async created() {
    const { data } = await getSingleArticle(this.$route.params.slug);
    this.article = data;
  },
  setup() {
    
  },
  methods: {
    async removeArticle(){
        try {
            await deleteArticle(this.article.id)
            this.$router.push('/admin/home')
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
