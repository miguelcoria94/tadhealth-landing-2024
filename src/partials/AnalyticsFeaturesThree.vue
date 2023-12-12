<template>
  <section class="relative bg-white">
    <div class="relative pt-32 pb-4 md:pt-12">
      <!-- Illustration behind hero content -->

      <!-- Hero content -->
      <div class="relative pt-32 pb-4 md:pt-20 md:pb-4">
        <!-- Content -->
        <div class="max-w-4xl mx-auto text-center pb-4 md:pb-4">
          <!-- small span text in green 500 -->
          <!-- <span class="text-xs font-semibold text-mint-500 uppercase mb-4 inline-block">The TadHealth Platform</span> -->
          <h1 class="h2 mb-4" data-aos="fade-up">
            Expert-level insights for your organization and leadership
          </h1>
          <!-- <p
            class="text-xl text-gray-300"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Manage payments and deposits efficiently with a no-fees for
            effortless commercial banking.
          </p> -->
        </div>

        <div class="py-12 md:py-20">
          <!-- Carousel -->
          <div class="max-w-xl lg:max-w-6xl mx-auto px-4 sm:px-6">
            <div
              class="lg:flex space-y-12 lg:space-y-0 lg:space-x-12 xl:space-x-24"
            >
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
                    <div class="w-full" v-show="tab === '1'">
                      <div>
                        <img
                          class="lg:max-w-none mx-auto rounded-lg shadow-sm border border-gray-500 border-opacity-25"
                          src="../images/feat-1.png"
                          width="500"
                          alt="Carousel 01"
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
                      <div>
                        <img
                          class="lg:max-w-none mx-auto rounded-lg shadow-sm border border-gray-500 border-opacity-25"
                          src="../images/feat-2.png"
                          width="500"
                          alt="Carousel 02"
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
                    <div class="w-full" v-show="tab === '3'">
                      <div>
                        <img
                          class="lg:max-w-none mx-auto rounded-lg shadow-sm border border-gray-500 border-opacity-25"
                          src="../images/feat-3.png"
                          width="500"
                          height="620"
                          alt="Carousel 03"
                        />
                      </div>
                    </div>
                  </transition>
                </div>
                <!-- Gear illustration -->
              </div>

              <!-- Content -->
              <div class="lg:max-w-none lg:min-w-[524px]">
                <!-- Tabs buttons -->
                <div class="mb-8 md:mb-0 space-y-2">
                  <button
                    :class="
                      tab !== '1'
                        ? 'bg-zinc-200  opacity-50 hover:opacity-100 transition'
                        : 'bg-mint-200 border border-mint-500 hover:border-mint-300 hover:border-opacity-100 bg-opacity-30 rounded-lg'
                    "
                    class="text-left flex items-center px-6 py-4 rounded"
                    @click.prevent="tab = '1'"
                  >
                    <div>
                      <div class="font-inter-tight text-lg font-semibold mb-1">
                        Make crisis intervention smarter
                      </div>
                      <div class="text-gray-300">
                        Connect to localized resources and alerts to advance
                        communication safety when you need it most.
                      </div>
                    </div>
                  </button>
                  <button
                    :class="
                      tab !== '2'
                        ? 'bg-zinc-200  opacity-50 hover:opacity-100 transition'
                        : 'bg-mint-200 border border-mint-500 hover:border-mint-300 hover:border-opacity-100 bg-opacity-30 rounded-lg'
                    "
                    class="text-left flex items-center px-6 py-4 rounded border border-transparent"
                    @click.prevent="tab = '2'"
                  >
                    <div>
                      <div class="font-inter-tight text-lg font-semibold mb-1">
                        Advanced availability insights
                      </div>
                      <div class="text-gray-300">
                        Save time and keep things consistent across all
                        professionals internal and external to understand demand
                        at any given time.
                      </div>
                    </div>
                  </button>
                  <button
                    :class="
                      tab !== '3'
                        ? 'bg-zinc-200  opacity-50 hover:opacity-100 transition'
                        : 'bg-mint-200 border border-mint-500 hover:border-mint-300 hover:border-opacity-100 bg-opacity-30 rounded-lg'
                    "
                    class="text-left flex items-center px-6 py-4 rounded border border-transparent"
                    @click.prevent="tab = '3'"
                  >
                    <div>
                      <div class="font-inter-tight text-lg font-semibold mb-1">
                        Traumatic incident response
                      </div>
                      <div class="text-gray-300">
                        Reduce the effects of trauma for at risk individuals by
                        countering with resources verified to help intervene
                        when an external event is causing risk to increase.
                      </div>
                    </div>
                  </button>
                </div>
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
  name: "AnalyticsFeaturesThree",
  data() {
    return {
      tab: "1",
    };
  },
};
</script>
