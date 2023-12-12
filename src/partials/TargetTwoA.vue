<template>
  <section class="pt-4 relative">
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
                  >For Education
                </span>
                <h3 class="h3 font-cabinet-grotesk mb-3">
                  What we are hearing from district support leaders
                </h3>
                <p class="text-lg text-gray-300">
                  We provide our solutions individually or in packages — tell us
                  which services you'd like to use and we'll send a custom
                  quote.
                </p>
                <img src="../images/rev.png" class="image" />
              </div>
            </div>

            <!-- Image -->
            <div class="space-y-8">
              <ul class="space-y-8 mt-12">
                <!-- Item -->
                <li class="relative group pb-12">
                  <div
                    class="flex items-start before:absolute before:left-0 before:h-full before:w-px before:bg-mint-200 before:dark:bg-mint-100 before:self-start before:ml-[28px] before:-translate-x-1/2 before:translate-y-8 before:group-last-of-type:hidden"
                  >
                    <div
                      class="absolute left-0 h-14 w-14 flex items-center justify-center rounded-full bg-mint-500"
                    >
                      <i class="las la-quote-left text-white"></i>
                    </div>
                    <div class="pl-20 space-y-1">
                      <!-- <div class="text-xs text-gray-300 uppercase">
                        May 2020 <span class="">·</span> Present
                      </div> -->
                      <!-- <div class="font-[650]">Pick Your Core Tools</div> -->
                      <div class="font-semibold text-lg text-gray-300 mt-2">
                        “We are trying to find ways to ensure our students and
                        families know what resources they have available to
                        them”
                      </div>
                    </div>
                  </div>
                </li>
                <!-- Item -->
                <li class="relative group pb-12">
                  <div
                    class="flex items-start before:absolute before:left-0 before:h-full before:w-px before:bg-mint-200 before:dark:bg-mint-100 before:self-start before:ml-[28px] before:-translate-x-1/2 before:translate-y-8 before:group-last-of-type:hidden"
                  >
                    <div
                      class="absolute left-0 h-14 w-14 flex items-center justify-center bg-mint-500 rounded-full"
                    >
                      <i class="las la-quote-left text-white"></i>
                    </div>
                    <div class="pl-20 space-y-1">
                      <!-- <div class="text-xs text-gray-300 uppercase">
                        May 2017
                        <span class="text-slate-400 dark:text-slate-600"
                          >·</span
                        >
                        Apr 2020
                      </div> -->
                      <!-- <div class="font-[650]">Choose How You Deploy</div> -->
                      <div class="font-semibold text-lg text-gray-300 mt-2">
                        “Many support colleagues on my team have no other option
                        than using pen and paper, google forms and sheets, or
                        student information systems”
                      </div>
                    </div>
                  </div>
                </li>
                <!-- Item -->
                <li class="relative group pb-12">
                  <div
                    class="flex items-start before:absolute before:left-0 before:h-full before:w-px before:bg-mint-200 before:dark:bg-mint-100 before:self-start before:ml-[28px] before:-translate-x-1/2 before:translate-y-8 before:group-last-of-type:hidden"
                  >
                    <div
                      class="absolute left-0 h-14 w-14 flex items-center justify-center bg-mint-500 rounded-full"
                    >
                      <i class="las la-quote-left text-white"></i>
                    </div>
                    <div class="pl-20 space-y-1">
                      <!-- <div class="text-xs text-gray-300 uppercase">
                        Jan 2017
                        <span class="text-slate-400 dark:text-slate-600"
                          >·</span
                        >
                        Apr 2017
                      </div> -->
                      <!-- <div class="font-[650]">
                        Seamlessly Integrate with your existing systems
                      </div> -->
                      <div class="font-semibold text-lg text-gray-300 mt-2">
                        “We’re trying to find a solution to have consistent
                        tracking and reporting across the district”
                      </div>
                    </div>
                  </div>
                </li>
                <!-- Item -->
                <li class="relative group pb-8">
                  <div
                    class="flex items-start before:absolute before:left-0 before:h-full before:w-px before:bg-mint-200 before:dark:bg-mint-100 before:self-start before:ml-[28px] before:-translate-x-1/2 before:translate-y-8 before:group-last-of-type:hidden"
                  >
                    <div
                      class="absolute left-0 h-14 w-14 flex items-center justify-center bg-mint-500 rounded-full"
                    >
                      <i class="las la-quote-left text-white"></i>
                    </div>
                    <div class="pl-20 space-y-1">
                      <!-- <div class="text-xs text-gray-300 uppercase">
                        Feb 2016
                        <span class="text-slate-400 dark:text-slate-600"
                          >·</span
                        >
                        Dec 2016
                      </div> -->
                      <!-- <div class="font-[650]">
                        Easy setup and user-friendly access
                      </div> -->
                      <div class="font-semibold text-lg text-gray-300 mt-4">
                        “My counselors have a hard time documenting and tracking
                        their work”
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "PricingFeaturesTwo",
  data: function () {
    return {
      category: "1",
    };
  },
};
</script>

<style scoped>
.image {
  width: auto;
  height: 300px;
  object-fit: cover;
}
</style>
