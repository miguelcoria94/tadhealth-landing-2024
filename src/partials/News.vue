<template>
  <section>
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <div class="py-12 md:py-20">
        <div class="max-w-3xl mx-auto text-center pb-12 md:pb-20">
          <h2 class="h2">Stay ahead of mental health trends</h2>
        </div>

        <!-- Articles list -->
        <div class="max-w-sm mx-auto md:max-w-none">
          <div
            v-if="list && list.length"
            class="grid gap-12 md:grid-cols-3 md:gap-x-6 md:gap-y-8 items-start"
          >
            <article
              v-for="(item, index) in list"
              :key="item.id"
              class="flex flex-col h-full"
              data-aos="zoom-y-out"
            >
              <header>
                <router-link :to="'/blog/' + item.slug" class="block mb-6">
                  <figure
                    class="relative h-0 pb-9/16 overflow-hidden translate-z-0 rounded"
                  >
                    <img
                      class="absolute inset-0 w-full h-full object-cover transform scale-105 hover:-translate-y-1 transition duration-700 ease-out"
                      :src="item.thumbnail_url"
                      width="352"
                      height="198"
                      alt="News 01"
                    />
                  </figure>
                </router-link>

                <h3 class="text-xl font-bold leading-snug tracking-tight mb-3">
                  <router-link
                    :to="'/blog/' + item.slug"
                    class="hover:underline"
                    >{{ item.title }}</router-link
                  >
                </h3>
                <div>
                  <a class="text-gray-300" href="#0">{{ item.description }}</a>
                </div>
              </header>
              <footer class="text-sm flex items-center mt-4">
                <div>
                  <a class="text-gray-300" href="#0">{{
                    formattedDate(item.created_at)
                  }}</a>
                </div>
              </footer>
            </article>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { getArticles } from "../api/resources.js";
export default {
  name: "News",
  data() {
    return {
      list: [],
    };
  },
  async created() {
    const { data } = await getArticles();
    this.list = data;
    console.log(this.list);
  },
  methods: {
    formattedDate(time) {
      const date = new Date(time);
      return date.toLocaleDateString();
    },
  },
};
</script>
