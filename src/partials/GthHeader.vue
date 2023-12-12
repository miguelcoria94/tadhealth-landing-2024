<template>
  <header class="absolute w-full z-30">
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <div class="flex items-center justify-between h-16 md:h-20">
        <!-- Site branding -->
        <div class="shrink-0 mr-4">
          <!-- Logo -->
          <router-link class="block" to="/">
            <img src="../images/tad-heart.png" alt="" class="h-10" />
          </router-link>
        </div>

        <!-- Desktop navigation -->
        <nav class="flex grow">
          <!-- Desktop sign in links -->
          <ul class="flex grow justify-end flex-wrap items-center">
            
            <li class="ml-3">
              <router-link
                class="btn-sm text-white bg-green-500 hover:bg-green-400 w-full shadow-sm"
                to="/join-community"
                >Join The Community</router-link
              >
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "GthHeader",
};
</script>
