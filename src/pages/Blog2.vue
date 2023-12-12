<template>
    <div class="flex flex-col min-h-screen overflow-hidden">
  
      <!-- Site header -->
      <Header />
  
      <!-- Page content -->
      <main class="grow">
  
        <!-- Page sections -->
        <BlogList2 />
  
      </main>
  
      <!-- Site footer -->
      <Footer />
  
    </div>
  </template>
  
  <script>
  import Header from './../partials/Header.vue'
  import BlogList2 from './../partials/BlogList2.vue'
  import Footer from './../partials/Footer.vue'
  
  export default {
    name: 'Blog',
    components: {
      Header,
      BlogList2,
      Footer,
    },
  }
  </script>
  