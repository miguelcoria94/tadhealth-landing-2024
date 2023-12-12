<template>
  <div class="sm:flex items-center p-5 border-b border-slate-100" v-show="['All', item.category].includes(category)">
    <div class="flex items-start mb-4 sm:mb-0">
      <img class="shrink-0 rounded ml-5 sm:ml-0 sm:mr-5 order-1 sm:order-none" :src="item.image" width="88" height="88" :alt="item.title" />
      <div>
        <h3 class="font-hkgrotesk font-extrabold text-lg mb-1">
          <router-link class="text-slate-800 hover:text-blue-500 transition duration-150 ease-in-out" :to="item.slug">{{item.title}}</router-link>
        </h3>
        <div class="font-hkgrotesk font-medium text-sm text-slate-500 mb-1">
          <a class="text-blue-500 hover:underline" href="#0">{{item.category}}</a> <span class="text-slate-300">·</span> {{item.date}} <span class="text-slate-300">·</span> Episode {{item.episode}}
        </div>
        <div class="text-sm text-slate-500">
          {{item.excerpt}}
        </div>
      </div>
    </div>
    <div class="shrink-0 sm:ml-5">
      <router-link :to="item.slug" aria-label="play">
        <img src="../images/play-02.svg" width="40" height="40" alt="Play" aria-hidden="true" />
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PodcastItem',
  props: ['item', 'category'],
}
</script>