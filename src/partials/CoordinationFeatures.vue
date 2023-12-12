<template>
  <section class="pt-10 mb-10 relative bg-white" id="Coordination">
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <div class="py-12 md:py-20">
        <div>
          <!-- Section content -->
          <div class="max-w-3xl mx-auto text-center pb-12 md:pb-16 mb-12">
            <!-- small span text in green 500 -->
            <span
              class="text-xs font-semibold text-mint-500 uppercase mb-4 inline-block"
              >TadHealth Coordination
            </span>
            <h1 class="h2 mb-4" data-aos="fade-up">
             Professional and appointment management simplified.
            </h1>
          </div>

          <div
            class="max-w-xl mx-auto md:max-w-none flex flex-col md:flex-row md:space-x-8 lg:space-x-16 xl:space-x-20 space-y-8 space-y-reverse md:space-y-0"
          >
            <!-- Image -->
            <div
              class="md:w-5/12 lg:w-1/2 flex justify-center content-center items-center"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <img
                class="mx-auto md:max-w-none"
                src="../images/feat-2.png"
                height="600"
                width="600"
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
                      class="las la-users text-2xl fill-current text-green-500 mt-1.5 mr-3 shrink-0"
                    ></i>

                    <div>
                      <div>
                        <p class="font-bold text-lg mb-2">
                          Streamlined behavioral health professional management
                        </p>
                        <p class="text-gray-300">
                          Effortlessly manage internal and external teams across your organization, ensure compliance, and expand your programs with our unified solution.
                        </p>
                      </div>
                    </div>
                  </li>
                  <li class="flex items-start">
                    <i
                      class="las la-calendar text-2xl fill-current text-green-500 mt-1.5 mr-3 shrink-0"
                    ></i>
                    <div>
                      <div>
                        <p class="font-bold text-lg mb-2">
                          Simplify appointments and access points
                        </p>
                        <p class="text-gray-300">
                         Automate appointment processes, integrate with calendar software, and select extra availability on demand with our private network.
                        </p>
                      </div>
                    </div>
                  </li>
                  <li class="flex items-start">
                    <i
                      class="las la-chart-line text-2xl fill-current text-green-500 mt-1.5 mr-3 shrink-0"
                    ></i>
                    <div>
                      <div>
                        <p class="font-bold text-lg mb-2">
                          Enhanced wellness brand and growth
                        </p>
                        <p class="text-gray-300">
                          Attract and retain professionals, accelerate your programs, and allow them to save hundreds of hours of time with a unified resource ecosystem. 
                        </p>
                      </div>
                    </div>
                  </li>
                  <li class="flex items-start">
                    <i
                      class="las la-arrow-up text-2xl fill-current text-green-500 mt-1.5 mr-3 shrink-0"
                    ></i>
                    <div>
                      <div>
                        <p class="font-bold text-lg mb-2">
                          Next-level wellness technology
                        </p>
                        <p class="text-gray-300">
                          Leverage our innovative cloud-based tools, professional content, and customized solutions to revolutionize your mental health service coordination. 
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
  name: "CoordinationFeatures",
  data: function () {
    return {
      category: "1",
    };
  },
};
</script>
