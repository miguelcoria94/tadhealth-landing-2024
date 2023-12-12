<template>
  <section class="">
    <h2 class="text-xl font-[650] mb-3">Latest Articles</h2>

    <!-- Filters -->
    <ul class="flex flex-wrap text-sm border-b border-slate-200 dark:border-slate-200">
      <li class="px-3 -mb-px">
        <a class="block py-3 font-medium  dark:text-slate-800 border-b-2 border-mint-500" href="#0">All Articles</a>
      </li>
      <!-- <li class="px-3 -mb-px">
        <a class="block py-3 text-slate-500 hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-300" href="#0">Wellness</a>
      </li>
      <li class="px-3 -mb-px">
        <a class="block py-3 text-slate-500 hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-300" href="#0">Education</a>
      </li>
      <li class="px-3 -mb-px">
        <a class="block py-3 text-slate-500 hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-300" href="#0">Community</a>
      </li> -->
    </ul>

    <!-- Articles list -->
    <div v-if="items">
        <ArticleItem v-for="item in items" :key="item.id" :item="item" />
    </div>

  </section>
</template>

<script>
import { ref } from 'vue'
import { getArticles } from "../api/resources.js";

import ArticleItem from "./ArticleItem.vue"

export default {
  name: 'ArticlesList',
  components: {
    ArticleItem,
  },  
  data() {
    return {
      items: null,
    };
  },
  
  async mounted() {
    const { data } = await getArticles();
    this.items = data;
    console.log(data);
  },
}
</script>