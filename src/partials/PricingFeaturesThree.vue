<template>
  <section class="pt-20 pb-20 mb-10 relative bg-white">
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <div class="py-12 md:py-20">
        <div>
          <!-- Section content -->

          <div
            class="max-w-xl mx-auto md:max-w-none flex flex-col md:flex-row md:space-x-8 lg:space-x-16 xl:space-x-20 space-y-8 space-y-reverse md:space-y-0"
          >
            <!-- Content -->
            <div
              class="md:w-7/12 lg:w-1/2 order-1 md:order-none"
              data-aos="fade-up"
            >
              <!-- Content #1 -->
              <div v-show="category === '1'">
                <span
                  class="text-xs font-semibold text-mint-500 uppercase mb-4 inline-block"
                  >FOR EVERYONE
                </span>
                <h3 class="h3 font-cabinet-grotesk mb-3">
                  Grow your mental health programs and operations with the
                  TadHealth Platform
                </h3>
                <p class="text-lg text-gray-300 mb-8">
                  Request a quote today and find out how innovative institutions
                  and enterprises effortlessly manage mental health operations,
                  coordination & safety, resources, and more—all within a
                  single, unified platform.
                </p>
                <a
                  class="btn text-white bg-mint-500 hover:bg-mint-600 w-full mb-4 sm:w-auto sm:mb-0"
                  href="/request-demo"
                  >Request Demo</a
                >
              </div>
            </div>

            <!-- Image -->
            <div
              class="md:w-5/12 lg:w-1/2"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <img
                class="mx-auto md:max-w-none mt-12"
                src="https://assets-global.website-files.com/64803fcf2c63890e8809f716/648051cba17e7f2920cc667e_The%20Enterprise%20Operating%20System%20(EOS)%20Unifying%20Your%20Finance%20%26%20Operations.webp"
                height="405"
                width="405"
                alt="Features"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "PricingFeaturesThree",
  data: function () {
    return {
      category: "1",
    };
  },
};
</script>
