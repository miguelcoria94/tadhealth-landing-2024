<template>
  <section class="relative bg-white" id="Resources">
    <div class="relative pt-16 pb-4 md:pt-4 md:pb-4">
      <!-- Illustration behind hero content -->

      <!-- Hero content -->
      <div class="relative pt-16 md:pt-20">
        <!-- Content -->
        <div class="max-w-4xl mx-auto text-center pb-12 md:pb-16">
          <!-- small span text in green 500 -->
          <!-- <span class="text-xs font-semibold text-mint-500 uppercase mb-4 inline-block">The TadHealth Platform</span> -->
          <span
            class="text-xs font-semibold text-mint-500 uppercase mb-4 inline-block"
            >TadHealth Resources
          </span>
          <h1 class="h2 mb-4" data-aos="fade-up">
            Resources you can share and measure.
          </h1>
          <p
            class="text-xl text-gray-300"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Manage or create verified content to easily share to individuals or
            groups in a click of a button.
          </p>
        </div>
        <!-- a div with 3 p tags spread across the with on mobile they stack -->
        <div
          class="m-auto max-w-4xl flex justify-around md:flex-row flex-col items-center align-center content-center"
        >
          <p>
            <i class="las la-check text-mint-500"></i> Share content across all
            access points
          </p>
          <p>
            <i class="las la-check text-mint-500"></i> Audience specific
            resources
          </p>
          <p>
            <i class="las la-check text-mint-500"></i> Choose from exclusive
            partners
          </p>
        </div>
        <div class="py-12 md:py-20">
          <!-- Carousel -->
          <div class="max-w-xl lg:max-w-6xl mx-auto px-4 sm:px-6">
            <div
              class="lg:flex space-y-12 lg:space-y-0 lg:space-x-12 xl:space-x-24"
            >
              <!-- Content -->
              <div class="lg:max-w-none lg:min-w-[524px]">
                <!-- Tabs buttons -->
                <div class="mb-8 md:mb-0 space-y-2">
                  <button
                    :class="tab !== '1' ? '' : ''"
                    class="text-left flex items-center px-6 py-4 rounded border border-transparent"
                  >
                    <div>
                      <div class="font-inter-tight text-lg font-semibold mb-1">
                        Make your wellness program stand out
                      </div>
                      <div class="text-gray-300">
                        Save time and keep resources all in one place while
                        accessing shared libraries from other amazing wellness
                        programs.
                      </div>
                    </div>
                  </button>
                  <button
                    :class="tab !== '2' ? '' : ''"
                    class="text-left flex items-center px-6 py-4 rounded border border-transparent"
                  >
                    <div>
                      <div class="font-inter-tight text-lg font-semibold mb-1">
                        Culturally sensitive and responsive resources
                      </div>
                      <div class="text-gray-300">
                        Choose from a library of already verified resources from
                        reliable sources of professional development modules,
                        themes, and trends to stay ahead of challenges.
                      </div>
                    </div>
                  </button>
                  <button
                    :class="tab !== '3' ? '' : ''"
                    class="text-left flex items-center px-6 py-4 rounded border border-transparent"
                  >
                    <div>
                      <div class="font-inter-tight text-lg font-semibold mb-1">
                        Scale and align your programs resources
                      </div>
                      <div class="text-gray-300">
                        Easily share to any audience type whether that be
                        students, parents, staff, and administrators to let them
                        benefit from context appropriate resources.
                      </div>
                    </div>
                  </button>
                </div>
              </div>

              <!-- Tabs items -->
              <div class="relative lg:max-w-none">
                <div class="relative flex flex-col">
                  <!-- Item 1 -->
                  <transition
                    enter-active-class="transition ease-in-out duration-700 transform order-first"
                    enter-from-class="opacity-0 translate-x-8"
                    enter-to-class="opacity-100 translate-x-0"
                    leave-active-class="transition ease-in-out duration-300 transform absolute"
                    leave-from-class="opacity-100 translate-x-0"
                    leave-to-class="opacity-0 -translate-x-8"
                  >
                    <div
                      class="w-full flex items-center content-center justify-center"
                      v-show="tab === '1'"
                    >
                      <div
                        class="flex items-center content-center justify-center"
                      >
                        <img
                          class="mt-12 lg:max-w-none mx-auto rounded-lg shadow-sm border border-gray-500 border-opacity-25"
                          src="/src/images/feat-3.png"
                          width="500"
                          height="360"
                          alt="Feature 03"
                        />
                      </div>
                    </div>
                  </transition>
                  <!-- Item 2 -->
                  <transition
                    enter-active-class="transition ease-in-out duration-700 transform order-first"
                    enter-from-class="opacity-0 translate-x-8"
                    enter-to-class="opacity-100 translate-x-0"
                    leave-active-class="transition ease-in-out duration-300 transform absolute"
                    leave-from-class="opacity-100 translate-x-0"
                    leave-to-class="opacity-0 -translate-x-8"
                  >
                    <div class="w-full" v-show="tab === '2'">
                      <div
                        class="flex items-center content-center justify-center"
                      >
                        <img
                          class="mt-12 lg:max-w-none mx-auto rounded-lg shadow-sm border border-gray-500 border-opacity-25"
                          src="/src/images/feat-3.png"
                          width="700"
                          height="360"
                          alt="Feature 03"
                        />
                      </div>
                    </div>
                  </transition>
                  <!-- Item 3 -->
                  <transition
                    enter-active-class="transition ease-in-out duration-700 transform order-first"
                    enter-from-class="opacity-0 translate-x-8"
                    enter-to-class="opacity-100 translate-x-0"
                    leave-active-class="transition ease-in-out duration-300 transform absolute"
                    leave-from-class="opacity-100 translate-x-0"
                    leave-to-class="opacity-0 -translate-x-8"
                  >
                    <div
                      class="w-full flex items-center content-center justify-center"
                      v-show="tab === '3'"
                    >
                      <div
                        class="flex items-center content-center justify-center"
                      >
                        <img
                          class="mt-12 lg:max-w-none mx-auto rounded-lg shadow-sm border border-gray-500 border-opacity-25"
                          src="/src/images/feat-3.png"
                          width="700"
                          height="360"
                          alt="Feature 03"
                        />
                      </div>
                    </div>
                  </transition>
                </div>
                <!-- Gear illustration -->
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
  name: "ResourcesFeature",
  data() {
    return {
      tab: "1",
    };
  },
};
</script>
