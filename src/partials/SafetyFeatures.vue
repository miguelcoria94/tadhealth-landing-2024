<template>
  <section class="relative bg-white">
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <div class="">
        <div>
          <!-- Section content -->

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
                class="mx-auto md:max-w-none rounded-full"
                src="../images/safety-feat-one.png"
                height="605"
                width="605"
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
                <!-- <span
                  class="text-xs font-semibold text-mint-500 uppercase mb-4 inline-block"
                  >TADHEALTH SAFETY
                </span>
                <h3 class="h3 font-cabinet-grotesk mb-3">
                  Your Trusted Mental Health Safety System
                </h3>
                <p class="text-lg text-gray-300 mb-8">
                  Tadhealth Safety lets you localize and customize prevention protocols for risk assessments, suicide prevention, and alerts for when you need it most. Securly customize alerts and protocols using our real-time crisis intervention button.
                </p> -->
                <ul class="inline-flex flex-col space-y-6">
                  <li class="flex items-start">
                    <i
                      class="las la-mouse w-3 h-3 fill-current text-green-500 mt-1.5 mr-3 shrink-0"
                    ></i>

                    <div>
                      <div>
                        <p class="font-bold text-lg mb-2">Easy-To-Use Button</p>
                        <p class="text-gray-300">
                          Experience hassle-free setup of internal resources and
                          secure personal information with our safety button,
                          designed to eliminate concerns about protocol
                          uncertainty.
                        </p>
                      </div>
                    </div>
                  </li>
                  <li class="flex items-start">
                    <i
                      class="las la-bell w-3 h-3 fill-current text-green-500 mt-1.5 mr-3 shrink-0"
                    ></i>
                    <div>
                      <div>
                        <p class="font-bold text-lg mb-2">Real-Time Alerts</p>
                        <p class="text-gray-300">
                          Your data is encrypted, processed, and read only
                          within our secure environment, ensuring accurate,
                          portable, and secure safety measures.
                        </p>
                      </div>
                    </div>
                  </li>
                  <li class="flex items-start">
                    <i
                      class="lab la-connectdevelop w-3 h-3 fill-current text-green-500 mt-1.5 mr-3 shrink-0"
                    ></i>
                    <div>
                      <div>
                        <p class="font-bold text-lg mb-2">Integrate Anywhere</p>
                        <p class="text-gray-300">
                          TadHealth crisis intervention button offers a
                          seamless, safety-first approach to promoting available
                          crisis resources that you can measure. With emergency
                          contacts auto-sync you can be sure to provide access
                          the right way to students.
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
  name: "SafetyFeatures",
  data: function () {
    return {
      category: "1",
    };
  },
};
</script>
