<template>
  <section class="relative">
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <div class="pt-32 pb-12 md:pt-40 md:pb-20">
        <!-- Section header -->
        <div class="max-w-3xl mx-auto text-center pb-12">
          <h1 class="h1 mb-4" data-aos="fade-up">
            Let Our Network Work For You
          </h1>
          <p
            class="text-xl text-gray-300"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            TadHealth allows anyone verified on our network access to resources,
            prospective clients, and other opportunities.
          </p>
        </div>

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

          <div
            class="max-w-sm mx-auto grid gap-8 lg:grid-cols-3 lg:gap-6 items-start lg:max-w-none"
          >
            <!-- Pricing table 1 -->
            <div
              class="relative flex flex-col h-full p-6 bg-white shadow-md"
              data-aos="fade-up"
              data-aos-delay="700"
            >
              <div class="mb-4 pb-4 border-b border-gray-700">
                <div class="h4 text-green-500 mb-1">Creator</div>
                <div class="inline-flex items-baseline mb-2">
                  <!-- <span
                    class="text-2xl md:text-3xl font-medium text-gray-300"
                    >{{ priceOutput.plan1[value][0] }}</span
                  >
                  <span class="h2">{{ priceOutput.plan1[value][1] }}</span>
                  <span class="font-medium text-gray-300">{{
                    priceOutput.plan1[value][2]
                  }}</span> -->
                </div>
                <div class="text-gray-300">
                  Share content like never before.
                </div>
              </div>
              <!-- <div class="font-medium mb-3">I am a:</div> -->
              <ul class="text-gray-300 -mb-3 grow">
                <li class="flex items-center mb-3">
                  <svg
                    class="w-3 h-3 fill-current text-green-500 mr-3 shrink-0"
                    viewBox="0 0 12 12"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"
                    />
                  </svg>
                  <span>Verified creator</span>
                </li>
                <li class="flex items-center mb-3">
                  <svg
                    class="w-3 h-3 fill-current text-green-500 mr-3 shrink-0"
                    viewBox="0 0 12 12"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"
                    />
                  </svg>
                  <span>Audience of 10k+</span>
                </li>
                <li class="flex items-center mb-3">
                  <svg
                    class="w-3 h-3 fill-current text-green-500 mr-3 shrink-0"
                    viewBox="0 0 12 12"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"
                    />
                  </svg>
                  <span>Promote mental health</span>
                </li>
                <li class="flex items-center mb-3">
                  <svg
                    class="w-3 h-3 fill-current text-green-500 mr-3 shrink-0"
                    viewBox="0 0 12 12"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"
                    />
                  </svg>
                  <span>Growing my brand</span>
                </li>
              </ul>
              <div class="border border-gray-900 p-3 mt-6">
                <a
                  class="btn-sm text-white bg-mint-500 hover:bg-mint-400 w-full"
                  href="/apply?user=creator"
                  >Apply</a
                >
              </div>
            </div>

            <!-- Pricing table 2 -->
            <div
              class="relative flex flex-col h-full p-6 bg-white shadow-md"
              data-aos="fade-up"
              data-aos-delay="600"
            >
              <div class="absolute top-0 right-0 mr-6 -mt-4">
                <!-- <div
                  class="inline-flex text-sm font-semibold py-1 px-3 mt-px text-green-600 bg-green-200 rounded-full"
                >
                  Most Popular
                </div> -->
              </div>
              <div class="mb-4 pb-4 border-b border-gray-700">
                <div class="h4 text-green-500 mb-1">Professional</div>
                <div class="inline-flex items-baseline mb-2">
                  <!-- <span
                    class="text-2xl md:text-3xl font-medium text-gray-300"
                    >{{ priceOutput.plan2[value][0] }}</span
                  >
                  <span class="h2">{{ priceOutput.plan2[value][1] }}</span>
                  <span class="font-medium text-gray-300">{{
                    priceOutput.plan2[value][2]
                  }}</span> -->
                </div>
                <div class="text-gray-300">
                  Reach new clients on your terms.
                </div>
              </div>
              <!-- <div class="font-medium mb-3">I am a:</div> -->
              <ul class="text-gray-300 -mb-3 grow">
                <li class="flex items-center mb-3">
                  <svg
                    class="w-3 h-3 fill-current text-green-500 mr-3 shrink-0"
                    viewBox="0 0 12 12"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"
                    />
                  </svg>
                  <span>Licensed professional </span>
                </li>
                <li class="flex items-center mb-3">
                  <svg
                    class="w-3 h-3 fill-current text-green-500 mr-3 shrink-0"
                    viewBox="0 0 12 12"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"
                    />
                  </svg>
                  <span>3000+ hours of experience</span>
                </li>
                <li class="flex items-center mb-3">
                  <svg
                    class="w-3 h-3 fill-current text-green-500 mr-3 shrink-0"
                    viewBox="0 0 12 12"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"
                    />
                  </svg>
                  <span>Individual practitioner</span>
                </li>
                <li class="flex items-center mb-3">
                  <svg
                    class="w-3 h-3 fill-current text-green-500 mr-3 shrink-0"
                    viewBox="0 0 12 12"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"
                    />
                  </svg>
                  <span>Growing my practice</span>
                </li>
              </ul>
              <div class="border border-gray-900 p-3 mt-6">
                <a
                  class="btn-sm text-white bg-mint-500 hover:bg-mint-400 w-full"
                  href="/apply?user=professional"
                  >Apply</a
                >
              </div>
            </div>

            <!-- Pricing table 3 -->
            <div
              class="relative flex flex-col h-full p-6 bg-white shadow-md"
              data-aos="fade-up"
              data-aos-delay="800"
            >
              <div class="mb-4 pb-4 border-b border-gray-700">
                <div class="h4 text-green-500 mb-1">Private Practice</div>
                <div class="inline-flex items-baseline mb-2">
                  <!-- <span
                    class="text-2xl md:text-3xl font-medium text-gray-300"
                    >{{ priceOutput.plan3[value][0] }}</span
                  >
                  <span class="h2">{{ priceOutput.plan3[value][1] }}</span>
                  <span class="font-medium text-gray-300">{{
                    priceOutput.plan3[value][2]
                  }}</span> -->
                </div>
                <div class="text-gray-300">Grow your practice, your way.</div>
              </div>
              <!-- <div class="font-medium mb-3">
               I am a:
              </div> -->
              <ul class="text-gray-300 -mb-3 grow">
                <li class="flex items-center mb-3">
                  <svg
                    class="w-3 h-3 fill-current text-green-500 mr-3 shrink-0"
                    viewBox="0 0 12 12"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"
                    />
                  </svg>
                  <span>2+ licensed professionals</span>
                </li>
                <li class="flex items-center mb-3">
                  <svg
                    class="w-3 h-3 fill-current text-green-500 mr-3 shrink-0"
                    viewBox="0 0 12 12"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"
                    />
                  </svg>
                  <span>Provide telehealth therapy</span>
                </li>

                <li class="flex items-center mb-3">
                  <svg
                    class="w-3 h-3 fill-current text-green-500 mr-3 shrink-0"
                    viewBox="0 0 12 12"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"
                    />
                  </svg>
                  <span>Traditional rates</span>
                </li>
                <li class="flex items-center mb-3">
                  <svg
                    class="w-3 h-3 fill-current text-green-500 mr-3 shrink-0"
                    viewBox="0 0 12 12"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"
                    />
                  </svg>
                  <span>Growing client base</span>
                </li>
              </ul>
              <div class="border border-gray-900 p-3 mt-6">
                <a
                  class="btn-sm text-white bg-mint-500 hover:bg-mint-400 w-full"
                  href="/apply?user=private-practice"
                  >Apply</a
                >
              </div>
            </div>
          </div>

          <!-- Bottom infobox -->
          <div
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
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "PricingTables",
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
