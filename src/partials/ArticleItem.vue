<template>
  <article class="py-5 border-b border-slate-100 dark:border-slate-200">
    <div class="flex items-start">
      <img class="rounded w-16 h-16 sm:w-[88px] sm:h-[88px] object-cover mr-6" :src="item.thumbnail_url" width="88" height="88" :alt="item.thumbnail_url" />
      <div>
        <div class="text-xs text-slate-500 uppercase mb-1"><span class="text-mint-500">—</span> {{formattedDate(item.created_at)}}</div>
        <h3 class="font-aspekta text-lg font-[650] mb-1">
          <router-link class="inline-flex relative hover:text-mint-500 duration-150 ease-out before:scale-x-0 before:origin-center before:absolute before:inset-0 before:bg-mint-200 dark:before:bg-mint-500 before:opacity-30 before:-z-10 before:translate-y-1/4 before:-rotate-2 hover:before:scale-100 before:duration-150 before:ease-in-out"  :to='"/blog/" + item.slug'>{{item.title}}</router-link>
        </h3>
        <div class="flex">
          <div class="grow text-sm text-slate-500 dark:text-slate-400">
            {{item.description}}
          </div>
          <router-link class="hidden lg:flex shrink-0 text-mint-500 items-center justify-center w-12 group" :to='"/blog/" + item.slug' tabindex="-1">
            <svg class="fill-current group-hover:translate-x-2 duration-150 ease-in-out" xmlns="http://www.w3.org/2000/svg" width="14" height="12">
              <path d="M9.586 5 6.293 1.707 7.707.293 13.414 6l-5.707 5.707-1.414-1.414L9.586 7H0V5h9.586Z" />
            </svg>
          </router-link>
        </div>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  name: 'ArticleItem',
  props: ['item'],
  methods: {
    formattedDate(time) {
      const date = new Date(time);
      return date.toLocaleDateString()
    },
  },
}
</script>