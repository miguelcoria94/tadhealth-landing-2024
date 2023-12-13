<template>
  <!-- make the bg image have a hue on top of it -->
  <section class="pt-40 pb-40 relative bg-mint-500 bg-opacity-25">
    <!-- display flex -->
    <div
      class="max-w-6xl mx-auto px-4 sm:px-6 opacity-100 py-12 bg-white rounded-xl shadow-lg grid gap-4 grid-cols-2 sm:grid-cols-1"
    >
      <!-- Items -->
      <div class="max-w-4xl mx-auto text-left px-12 md:pb-16">
        <!-- small span text in green 500 -->
        <span
          class="text-xs font-semibold text-mint-500 uppercase mb-4 inline-block"
          >TadHealth Analytics</span
        >
        <h3 class="h3 mb-4" data-aos="fade-up">
          Platform Analytics: Your key to funding and impact
        </h3>
        <p
          class="text-xl text-gray-300 text-center"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          The TadHealth Platform automatically captures and secures the right
          mental health data. Unlock the benefits of a truly centralized
          management system across the ecosystem of tools in one HIPAA + FERPA
          compliant space.
        </p>
      </div>
      <div>
        <!-- image -->
        <img
          class="mx-auto rounded-full"
          width="450"
          src="../images/Circle.png"
          data-aos="fade-up"
          data-aos-delay="400"
        />
      </div>
      <div class="max-w-4xl mx-auto text-left px-12 md:pb-16">
        <a
          class="btn text-white bg-mint-500 hover:bg-mint-600 w-full mb-4 sm:w-auto sm:mb-0 mt-10"
          href="/request-demo"
        >Request Demo</a
        >
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "PlatformFeatureThree",
};
</script>

<style scoped>
  .bg-image {
    box-shadow: none;
  }

  @media (max-width: 768px) {
    .grid-cols-2 > div:last-child {
      display: none;
    }

    
  }
</style>

