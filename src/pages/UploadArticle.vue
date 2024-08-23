<template>
  <div class="flex h-screen overflow-hidden">
    <!-- Content area -->
    <div
      class="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden"
    >
      <!-- Site header -->
      <HeaderDash />

      <main>
        <div class="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
          <h2 class="text-3xl md:text-4xl font-hkgrotesk font-extrabold mb-10">
            Upload New Blog
          </h2>

          <form
            @submit.prevent="submit"
            class="bg-white p-5"
          >
            <div class="flex flex-wrap -mx-3 mb-4">
              <div class="w-full px-3">
                <label
                  class="block text-gray-300 text-sm font-medium mb-1"
                  for="title"
                  >Title <span class="text-red-600">*</span></label
                >
                <input
                  v-model="title"
                  id="title"
                  type="text"
                  class="form-input w-full text-gray-300"
                  required
                />
              </div>
            </div>
            <div class="flex flex-wrap -mx-3 mb-4">
              <div class="w-full px-3">
                <label
                  class="block text-gray-300 text-sm font-medium mb-1"
                  for="description"
                  >Description <span class="text-red-600">*</span></label
                >
                <input
                  v-model="description"
                  id="description"
                  type="text"
                  class="form-input w-full text-gray-300"
                  required
                />
              </div>
            </div>

            <div class="flex flex-wrap -mx-3 mb-4">
              <div class="w-full px-3">
                <label
                  class="block text-gray-300 text-sm font-medium mb-1"
                  for="thumbnail_name"
                  >Thumbnail Image <span class="text-red-600">*</span></label
                >
                <input
                  @change="onFileSelected"
                  id="thumbnail_name"
                  type="file"
                  class="form-input w-full text-gray-300"
                  accept="image/png, image/gif, image/jpeg"
                  required
                />
              </div>
            </div>
            <div class="flex flex-wrap -mx-3 mb-4">
              <div class="w-full px-3">
                <label
                  class="block text-gray-300 text-sm font-medium mb-1"
                  for="thumbnail_name"
                  >Image Preview <i class="las la-image"></i
                ></label>
                <img :src="imageUrl" class="max-h-48 rounded m-5" />
              </div>
            </div>
            <div class="flex flex-wrap -mx-3">
              <div class="w-full px-3">
                <label
                  class="block text-gray-300 text-sm font-medium mt-5"
                  for="email"
                  >Write Article <span class="text-red-600">*</span></label
                >
                <QuillEditor
                  ref="myEditor"
                  v-model="body"
                  theme="snow"
                  toolbar="full"
                  contentType="html"
                />
              </div>
            </div>

            <div class="flex flex-wrap -mx-3 mt-40">
              <div class="w-full px-3">
                <button
                  class="btn text-white bg-green-600 hover:bg-green-700 w-full"
                >
                  Upload Article
                </button>
              </div>
            </div>
          </form>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
// Basic Use - Covers most scenarios
import { QuillEditor } from "@vueup/vue-quill";
import "@vueup/vue-quill/dist/vue-quill.snow.css";

import { ref } from "vue";
import HeaderDash from "../partials/HeaderDash.vue";
import PodcastBanner from "../partials/PodcastBanner.vue";
import ArticleBanner from "../partials/ArticleBanner.vue";
import { createArticle, uploadArticleImage } from "../api/resources.js"

export default {
  name: "UploadPodcast",
  components: {
    HeaderDash,
    PodcastBanner,
    ArticleBanner,
    QuillEditor,
  },
  data() {
    return {
      title: null,
      description: null,
      thumbnail_name: null,
      body: null,
      imageUrl: null,
    };
  },
  methods: {
    async submit() {
      try {
        const content = this.$refs.myEditor.getHTML();
        this.body = content;
        if (
          !this.title ||
          !this.description ||
          !this.thumbnail_name ||
          !this.body
        ) {
          this.$toast.warning(`Please fill out the entire form`, {
            position: "top-right",
          });
          return;
        }
        let slug = this.title.split(" ").join("-")

        const { data } = await createArticle({
          title: this.title,
          description: this.description,
          body: this.body,
          is_draft: false,
          slug: slug
        })

        const formData = new FormData()
        formData.append("thumbnail_in", this.thumbnail_name)

        await uploadArticleImage(data.id, formData)

        this.$router.push("/admin/home");
        this.$toast.success(`You created a new article`, {
          position: "top-right",
        });
      } catch (e) {
        this.$toast.error(`There was an error submitting your request!`, {
          position: "top-right",
        });
      }
    },
    onFileSelected(event) {
      this.thumbnail_name = event.target.files[0];
      this.imageUrl = URL.createObjectURL(this.thumbnail_name);
    },
  },
};
</script>

<style scoped></style>
