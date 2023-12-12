<template>
  <section class="relative">
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <div class="pt-32 pb-12 md:pt-40 md:pb-20">
        <!-- Section header -->

        <!-- Pricing tables -->
        <div>
          <!-- Pricing toggle -->
          <!-- <div
              class="flex justify-center mb-16"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <div class="inline-flex items-center">
                <div class="text-gray-300 font-medium mr-3">Billed Monthly</div>
                <div class="form-switch">
                  <input
                    type="checkbox"
                    name="pricing-toggle"
                    id="pricing-toggle"
                    class="sr-only"
                    v-model="value"
                  />
                  <label class="bg-gray-600" for="pricing-toggle">
                    <span class="bg-gray-200" aria-hidden="true"></span>
                    <span class="sr-only">Enable to see yearly prices</span>
                  </label>
                </div>
                <div class="text-gray-300 font-medium ml-3">Billed Annually</div>
              </div>
            </div> -->

          <!-- Bottom infobox -->
          <!-- <div
              class="flex flex-col lg:flex-row justify-between items-center mt-12 lg:mt-6 lg:py-8 lg:border-t lg:border-b lg:border-gray-800"
            >
              <div
                class="font-medium text-lg text-center lg:text-left mb-4 lg:mb-0"
              >
                Expecting more than 1000 Active End Users?
              </div>
              <div>
                <a
                  class="btn-sm text-white bg-green-600 hover:bg-green-700"
                  href="#0"
                  >Contact us</a
                >
              </div>
            </div> -->
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Why TadHealth",
  data: function () {
    return {
      value: true,
      priceOutput: {
        plan1: {
          false: ["$", "55", "/mo"],
          true: ["$", "49", "/mo"],
        },
        plan2: {
          false: ["$", "85", "/mo"],
          true: ["$", "79", "/mo"],
        },
        plan3: {
          false: ["$", "135", "/mo"],
          true: ["$", "129", "/mo"],
        },
      },
    };
  },
};
</script>
