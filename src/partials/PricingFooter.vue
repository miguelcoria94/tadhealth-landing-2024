<template>
  <!-- make the bg image have a hue on top of it -->
  <section class="relative bg-white pt-16 pb-16">
    <!-- display flex -->
    <div class="max-w-6xl mx-auto px-4 sm:px-6 py-12 flex content-center">
      <!-- Items -->
      <div class="max-w-4xl mx-auto text-center px-12 md:pb-16">
        <!-- small span text in green 500 -->
        <span
          class="text-xs font-semibold text-mint-500 uppercase mb-4 inline-block"
          >THE TadHealth PLATFORM</span
        >
        <h3 class="h3 mb-4" data-aos="fade-up">Still have questions?</h3>
        <p
          class="text-xl text-gray-300"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Can’t find the answer you’re looking for? Please chat with our team!
        </p>
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
</style>
