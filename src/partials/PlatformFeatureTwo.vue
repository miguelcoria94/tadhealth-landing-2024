<template>
  <!-- make the bg image have a hue on top of it -->
  <section class="pt-32 mb-32relative">
    <div class="max-w-5xl mx-auto px-4 sm:px-6 opacity-100">
      <div class="py-12 md:py-20 border-t border-gray-800">
        <!-- Items -->
        <div>
          <!-- header and subtext -->
          <div class="max-w-5xl text-center pb-12 md:pb-20">
            <h2
              class="text-3xl md:text-4xl font-bold font-cabinet-grotesk mb-10"
            >
              One Platform. All-Mental Health.
            </h2>
            <p class="text-xl text-gray-300">
              Say goodbye to endless point solutions and service providers —
              gain control in a single system of management. The TadHealth
              (MHMS) simplifies every aspect of managing your mental health
              professionals, appointments, resources, workflows and everything
              in between.
            </p>
            <div class="flex justify-center p-4 pt-12 rounded-sm">
              <img
                class="mx-auto rounded-md shadow-md"
                src="../images/feet2.png"
                width="768"
                height="432"
                alt="Hero"
                data-aos="fade-up"
                data-aos-delay="400"
              />
            </div>
            <a
              class="btn text-white bg-mint-500 hover:bg-mint-600 w-full mb-4 sm:w-auto sm:mb-0 mt-10"
              href="/request-demo"
              >Request Demo</a
            >
            <!-- add image below and center it -->
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "PlatformFeatureTwo",
};
</script>

<style scoped>
.bg-image {
  box-shadow: none;
}
</style>
