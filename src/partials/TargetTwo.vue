<template>
  <section>
    <div class="max-w-6xl mx-auto px-4 sm:px-6 pt-32 pb-0 md:pt-30">
      <div class="py-12 md:py-20">
        <!-- Section header -->
        <div class="max-w-3xl mx-auto text-center pb-0 md:pb-20">
          <span
            class="text-xs font-semibold text-mint-500 uppercase mb-4 inline-block"
            >TadHealth Platform
          </span>
          <h2 class="h2 font-playfair-display mb-3">
            Data-backed decisions to help protect students well-being.
          </h2>
          <p class="text-xl text-gray-300">
            Our digital solution helps schools fill the gap between students and available support services. If you answer yes to any of the questions below, Let’s Connect 
          </p>
        </div>

        <!-- Section content -->
        <div
          class="max-w-xl mx-auto md:max-w-none flex flex-col md:flex-row md:items-center md:space-x-8 lg:space-x-16 xl:space-x-18 space-y-8 space-y-reverse md:space-y-0"
        >
          <!-- Content -->
          <div
            class="md:w-7/12 lg:w-1/2 order-1 md:order-none"
            data-aos="fade-right"
          >
            <ul class="space-y-6">
              <li class="bg-white shadow-sm rounded-md p-4 mb-12" style="width: 250px;">
                <p class="text-sm text-gray-400">Do all of your students and families know what resources they have available to them? Do they know how to access them all? </p>
              </li>
              <li class="bg-white shadow-sm rounded-md p-4 text-gray-300"  style="width: 250px;">
                <p class="text-sm text-gray-400">Are you using your Student Information System or Google Sheets to manage your work? </p>
              </li>
            </ul>
          </div>

          <!-- Image -->
          <div class="md:w-5/12 lg:w-1/2" data-aos="fade-left">
            <img
              class="mx-auto md:max-w-none"
              src="../images/simple.png"
              width="540"
              height="540"
              alt="Target"
            />
          </div>

          <!-- Content -->
          <div
            class="md:w-7/12 lg:w-1/2 order-1 md:order-none"
            data-aos="fade-right"
          >
            <ul class="space-y-6">
              <li class="bg-white shadow-sm rounded-md p-4 mb-12"  style="width: 250px;">
                <p class="text-sm text-gray-400">Are you trying to find ways to have consistent tracking and reporting across your school or district? </p>
              </li>
              <li class="bg-white shadow-sm rounded-md p-4 "  style="width: 250px;">
                <p class="text-sm text-gray-400">Are you properly tracking your support staff work for the All-Payer Fee schedule? </p>
              </li>
            </ul>
            
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Target",
};
</script>
