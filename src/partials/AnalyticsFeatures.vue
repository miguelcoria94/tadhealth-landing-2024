<template>
  <section class="pt-10 mb-10 relative bg-white">
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <div class="py-12 md:py-20">
        <div>
          <!-- Section content -->
          <div class="max-w-3xl mx-auto text-center pb-12 md:pb-16 mb-12">
            <!-- small span text in green 500 -->
            <span
              class="text-xs font-semibold text-mint-500 uppercase mb-4 inline-block"
              >FEATURES
            </span>
            <h1 class="h2 mb-4" data-aos="fade-up">
              Transforming mental health analysis
            </h1>
          </div>

          <div
            class="max-w-xl mx-auto md:max-w-none flex flex-col md:flex-row md:space-x-8 lg:space-x-16 xl:space-x-20 space-y-8 space-y-reverse md:space-y-0"
          >
            <!-- Image -->
            <div
              class="md:w-5/12 lg:w-1/2"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <img
                class="mx-auto md:max-w-none pb-4"
                src="../images/analytics2.png"
                height="505"
                width="505"
                alt="Features"
              />
            </div>
            <!-- Content -->
            <div
              class="md:w-7/12 lg:w-1/2 order-1 md:order-none"
              data-aos="fade-up"
            >
              <!-- Content #1 -->
              <div v-show="category === '1'">
                <!-- <h3 class="h3 font-cabinet-grotesk mb-3">Safety Team & Help</h3>
                <p class="text-lg text-gray-300 mb-8">
                  Many crisis situations escalate quickly and making sure you
                  have no delays is crucial to the situation not getting worse.
                  Eliminate the need to rely on paper protocols or assume
                  everyone knows what to do when someone is having a mental
                  health crisis.
                </p> -->
                <ul class="inline-flex flex-col space-y-6">
                  <li class="flex items-start">
                    <i
                      class="las la-hourglass text-2xl fill-current text-green-500 mt-1.5 mr-3 shrink-0"
                    ></i>

                    <div>
                      <div>
                        <p class="font-bold text-lg mb-2">
                         Efficient, real-Time analysis
                        </p>
                        <p class="text-gray-300">
                          Dive deep into your organizations resources with TadHealth Analytics, a powerful tool providing an open window into your mental health operations in real-time.
                        </p>
                      </div>
                    </div>
                  </li>
                  <li class="flex items-start">
                    <i
                      class="las la-book-open text-2xl fill-current text-green-500 mt-1.5 mr-3 shrink-0"
                    ></i>
                    <div>
                      <div>
                        <p class="font-bold text-lg mb-2">
                          Across platform trends 
                        </p>
                        <p class="text-gray-300">
                          Replace traditional variance analyses with TadHealth Analytics, automatically highlighting the most significant resources for your organization.
                        </p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "SafetyFeaturesTwo",
  data: function () {
    return {
      category: "1",
    };
  },
};
</script>
