<template>
  <section class="relative bg-white pt-16">
    <div class="relative pt-14 pb-4 md:pt-14 md:pb-4">
      <!-- Illustration behind hero content -->

      <!-- Hero content -->
      <div class="relative pt-32 md:pt-20 md:pb-20">
        <!-- Content -->
        <div class="max-w-4xl mx-auto text-center pb-12 md:pb-16">
          <!-- small span text in green 500 -->
          <!-- <span class="text-xs font-semibold text-mint-500 uppercase mb-4 inline-block">The TadHealth Platform</span> -->
          <h1 class="h2 mb-4" data-aos="fade-up">
            Everything you need to securely manage behavioral health operations
            and data.
          </h1>
          <p
            class="text-xl text-gray-300"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            TadHealth’s ecosystem of HIPAA and FERPA-compliant tools have been
            created from the evidence-based MTSS framework.
          </p>
          <a
            class="btn text-white bg-mint-500 hover:bg-mint-600 w-full mb-4 sm:w-auto sm:mb-0 mt-10"
            href="/request-demo"
            >Request Demo</a
          >
        </div>
        <!-- Image -->
        <img
          class="lg:max-w-none mx-auto"
          src="/src/images/resourcesfeat.png"
          width="750"
          alt="Carousel 01"
        />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "PlatformFeature",
};
</script>
