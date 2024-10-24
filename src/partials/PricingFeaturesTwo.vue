<template>
  <section class="pt-32 relative mb-32">
    <div class="max-w-4xl mx-auto text-center mb-32">
      <!-- small span text in green 500 -->
      <!-- <span
            class="text-xs font-semibold text-mint-500 uppercase mb-4 inline-block"
            >TadHealth Safety</span
          > -->
      <h1 class="h2 mb-4" data-aos="fade-up">
        Expanding wellness programs pays dividends, literally.
      </h1>
      <p class="text-xl text-gray-300" data-aos="fade-up" data-aos-delay="200">
        The TadHealth platform and insights integrate seamlessly to help you
        manage, triage, deliver, and bill for all eligible mental health
        services staff. We are built specifically for education and public
        organizations to streamline workflows, staff, and services.
      </p>
    </div>
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
                  How our implementation works.
                </h3>
                <!-- <p class="text-lg text-gray-300 mb-8">
                  We provide our solutions individually or in packages — tell us
                  which services you'd like to use and we'll send a custom
                  quote.
                </p> -->

<!-- image -->
                <img src="../images/circle-art.png" alt="circle"  /> 
              </div>
            </div>

            <!-- Image -->
            <div class="space-y-8">
              <ul class="space-y-8">
                <!-- Item -->
                <li class="relative group pb-4">
                  <div
                    class="flex items-start before:absolute before:left-0 before:h-full before:w-px before:bg-mint-200 before:dark:bg-mint-100 before:self-start before:ml-[28px] before:-translate-x-1/2 before:translate-y-8 before:group-last-of-type:hidden"
                  >
                    <div
                      class="absolute left-0 h-14 w-14 flex items-center justify-center rounded-full bg-mint-500"
                    >
                      <i class="las la-tools text-white"></i>
                    </div>
                    <div class="pl-20 space-y-1">
                      <!-- <div class="text-xs text-gray-300 uppercase">
                        May 2020 <span class="">·</span> Present
                      </div> -->
                      <div class="font-[650]">Pick Your Core Tools and connect reimbursement source</div>
                      <div class="text-sm text-gray-300">
                        Get started with one or more tiers of support and seamlessly connect resources, safety, analytics, and coordination tools in one place.
                      </div>
                    </div>
                  </div>
                </li>
                <!-- Item -->
                <li class="relative group pb-4">
                  <div
                    class="flex items-start before:absolute before:left-0 before:h-full before:w-px before:bg-mint-200 before:dark:bg-mint-100 before:self-start before:ml-[28px] before:-translate-x-1/2 before:translate-y-8 before:group-last-of-type:hidden"
                  >
                    <div
                      class="absolute left-0 h-14 w-14 flex items-center justify-center bg-mint-500 rounded-full"
                    >
                      <i class="las la-parachute-box text-white"></i>
                    </div>
                    <div class="pl-20 space-y-1">
                      <!-- <div class="text-xs text-gray-300 uppercase">
                        May 2017
                        <span class="text-slate-400 dark:text-slate-600"
                          >·</span
                        >
                        Apr 2020
                      </div> -->
                      <div class="font-[650]">Choose How You Deploy</div>
                      <div class="text-sm text-gray-300">
                       You can get started without any customizations or work with our team on a custom implementation.
                      </div>
                    </div>
                  </div>
                </li>
                <!-- Item -->
                <li class="relative group pb-4">
                  <div
                    class="flex items-start before:absolute before:left-0 before:h-full before:w-px before:bg-mint-200 before:dark:bg-mint-100 before:self-start before:ml-[28px] before:-translate-x-1/2 before:translate-y-8 before:group-last-of-type:hidden"
                  >
                    <div
                      class="absolute left-0 h-14 w-14 flex items-center justify-center bg-mint-500 rounded-full"
                    >
                      <i class="las la-project-diagram text-white"></i>
                    </div>
                    <div class="pl-20 space-y-1">
                      <!-- <div class="text-xs text-gray-300 uppercase">
                        Jan 2017
                        <span class="text-slate-400 dark:text-slate-600"
                          >·</span
                        >
                        Apr 2017
                      </div> -->
                      <div class="font-[650]">
                        Seamlessly Integrate with your existing systems

                      </div>
                      <div class="text-sm text-gray-300">
                        Link your pre-existing behavioral health partners or securely sync accross your existing information systems and student solutions.
                      </div>
                    </div>
                  </div>
                </li>
                <!-- Item -->
                <li class="relative group pb-4">
                  <div
                    class="flex items-start before:absolute before:left-0 before:h-full before:w-px before:bg-mint-200 before:dark:bg-mint-100 before:self-start before:ml-[28px] before:-translate-x-1/2 before:translate-y-8 before:group-last-of-type:hidden"
                  >
                    <div
                      class="absolute left-0 h-14 w-14 flex items-center justify-center bg-mint-500 rounded-full"
                    >
                      <i class="las la-clone text-white"></i>
                    </div>
                    <div class="pl-20 space-y-1">
                      <!-- <div class="text-xs text-gray-300 uppercase">
                        Feb 2016
                        <span class="text-slate-400 dark:text-slate-600"
                          >·</span
                        >
                        Dec 2016
                      </div> -->
                      <div class="font-[650]">
                        Easy setup and user-friendly access
                      </div>
                      <div class="text-sm text-gray-300">
                        You can get up and running with TadHealth in the same day you sign up and easily control the roll-out of the system to different members of your organization. 
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
