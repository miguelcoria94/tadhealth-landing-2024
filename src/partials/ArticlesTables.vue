<template>
  <div
    class="col-span-full bg-white shadow-lg rounded-sm border border-slate-200 m-4"
  >
    <header class="px-5 py-4 border-b border-slate-100">
      <h2 class="font-semibold text-slate-800">All Podcasts</h2>
    </header>
    <div class="p-3">
      <!-- Table -->
      <div class="overflow-x-auto">
        <table class="table-auto w-full">
          <!-- Table header -->
          <thead
            class="text-xs uppercase text-slate-400 bg-slate-50 rounded-sm w-full"
          >
            <tr>
              <th class="p-2 whitespace-nowrap">
                <div class="font-semibold text-left">Name</div>
              </th>
              <th class="p-2 whitespace-nowrap">
                <div class="font-semibold text-left">Uploaded</div>
              </th>
            </tr>
          </thead>
          <!-- Table body -->
          <tbody
            class="text-sm divide-y divide-slate-100"
            v-if="list && list.length"
          >
            <!-- Row -->
            <tr v-for="(item, index) in list" :key="item.id">
              <td class="p-2 whitespace-nowrap">
                <div class="flex items-center">
                  <div class="font-medium text-slate-800">{{ item.title }}</div>
                </div>
              </td>
              <td class="p-2 whitespace-nowrap">
                <div class="flex items-center">
                  <div>{{ formattedDate(item.created_at) }}</div>
                </div>
              </td>
              <td class="p-2 whitespace-nowrap">
                <router-link :to="'/admin/article/' + item.slug">
                  <button
                    class="btn text-white bg-green-500 hover:bg-green-400 w-full"
                  >
                    Manage
                  </button>
                </router-link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import { getArticles } from "../api/resources.js";
export default {
  name: "ArticlesTable",
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
      return date.toLocaleDateString() + " " + date.toLocaleTimeString();
    },
  },
};
</script>
