<template>
  <section class="relative">
    <!-- Background image -->
    <div class="absolute inset-0">
      <!-- <img class="w-full h-full object-cover" src="../images/about-hero.jpg" width="1440" height="394" alt="About" /> -->
      <div
        class="absolute inset-0 bg-gray-900 opacity-75"
        aria-hidden="true"
      ></div>
    </div>

    <!-- Hero content -->
    <div class="max-w-6xl mx-auto px-4 sm:px-6 relative">
      <div class="pt-32 pb-12 md:pt-40 md:pb-20">
        <div class="max-w-3xl mx-auto text-center">
          <h1 class="h1 mb-4" data-aos="fade-up">Our story</h1>
          <p
            class="text-xl text-gray-300 mb-8"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            At TadHealth our mission is to facilitate real-time access to mental
            health services for organizations that can save lives, improve care
            outcomes and enhance the well-being of everyone.
          </p>
        </div>
        <div
          class="hidden md:block absolute left-1/2 -ml-px -mt-4 w-0.5 h-10 bg-slate-200"
          aria-hidden="true"
        ></div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "HeroAbout",
};
</script>
