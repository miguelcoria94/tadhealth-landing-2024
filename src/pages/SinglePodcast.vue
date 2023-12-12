<template>
  <div class="flex h-screen overflow-hidden">
    <!-- Content area -->
    <div
      class="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden"
    >
      <!-- Site header -->
      <HeaderDash />

      <main class="grow">
        <AudioPlayer ref="audio" :podcast="audio" />
        <div class="px-20">
          <button @click="removePodcast"
            class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          >
            Delete Podcast
          </button>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import HeaderDash from "../partials/HeaderDash.vue";
import { getSinglePodcast, deletePodcast } from "../api/resources.js";
import AudioPlayer from "../partials/AudioPlayer.vue";

export default {
  name: "SinglePodcast",
  components: {
    HeaderDash,
    AudioPlayer,
  },
  data() {
    return {
      audio: {},
    };
  },
  async created() {
    const { data } = await getSinglePodcast(this.$route.params.slug);
    this.audio = data;
    console.log(data.title);
  },
  setup() {
    const audio = ref(null);

    const goToTime = (time) => {
      audio.value.goToTime(time);
    };

    return {
      audio,
      goToTime,
    };
  },
  methods: {
    async removePodcast(){
        try {
            await deletePodcast(this.$route.params.slug)
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
