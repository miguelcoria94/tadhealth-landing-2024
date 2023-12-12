<template>
    <header class="absolute w-full z-30">
      <div class="max-w-6xl mx-auto px-4 sm:px-6">
        <div class="flex items-center justify-between h-16 md:h-20">
    
          <!-- Site branding -->
          <div class="shrink-0 mr-4">
            <!-- Logo -->
            <router-link class="block group" to="/" aria-label="Cruip">
              <img src="../images/logo.svg" width="36" height="28" alt="Logo" />
            </router-link>
          </div>
    
          <!-- Desktop navigation -->
          <nav class="flex grow">
    
            <!-- Desktop sign in links -->
            <ul class="flex grow justify-end flex-wrap items-center">
              <li>
                <router-link class="btn-sm text-white bg-blue-500 hover:bg-blue-600 group shadow-sm" to="/subscribe">
                  Subscribe <span class="tracking-normal text-blue-2300 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">-&gt;</span>
                </router-link>
              </li>
            </ul>
    
          </nav>
    
        </div>
      </div>
    </header>
  </template>
  
  <script>
  export default {
    name: 'PodcastsHeader',
  }
  </script>