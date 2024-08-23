<template>
  <div
    class="col-span-full bg-white shadow-lg rounded-sm border border-slate-200 m-4"
  >
    <header class="px-5 py-4 border-b border-slate-100">
      <h2 class="font-semibold text-slate-800">All Blogs</h2>
    </header>
    <div class="p-3">
      <!-- Loader -->
      <div v-if="loading" class="flex justify-center items-center py-4">
        <div class="loader"></div>
        <span>Loading...</span>
      </div>

      <!-- Table -->
      <div v-else class="overflow-x-auto">
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
              <th class="p-2 whitespace-nowrap">
                <div class="font-semibold text-left">Actions</div>
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
      loading: true,
    };
  },
  async created() {
    try {
      const { data } = await getArticles();
      this.list = data;
    } catch (error) {
      console.error("Error fetching articles:", error);
    } finally {
      this.loading = false;
    }
  },
  methods: {
    formattedDate(time) {
      const date = new Date(time);
      return date.toLocaleDateString() + " " + date.toLocaleTimeString();
    },
  },
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
