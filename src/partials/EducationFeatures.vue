<template>
  <section class="relative pt-32 md:pt-30">
    <!-- Section background (needs .relative class on parent and next sibling elements) -->
    <div
      class="absolute inset-0 bg-gray-900 pointer-events-none"
      aria-hidden="true"
    ></div>
    <div
      class="absolute left-0 right-0 m-auto w-px p-px h-20 bg-gray-800 transform -translate-y-1/2"
    ></div>

    <div class="relative max-w-6xl mx-auto px-4 sm:px-6">
      <div class="pt-12 md:pt-20">
        <!-- Section content -->
        <div class="md:grid md:grid-cols-12 md:gap-6">
          <!-- Content -->
          <div
            class="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6 md:mt-6"
          >
            <div class="md:pr-4 lg:pr-12 xl:pr-16 mb-8">
              <h3 class="h3 mb-3">Featured Experience: The Student</h3>
              <p class=" text-gray-300">
                Anywhere from crisis technology, premium content, or connections
                to professionals we let you explore the power of providing
                resources.
              </p>
            </div>
            <!-- Tabs buttons -->
            <div class="mb-8 md:mb-0">
              <button
                class="flex w-full items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 bg-white shadow-sm border-gray-800 hover:shadow-xl"
                @click.prevent="tab = '1'"
              >
                <div>
                  <div class="font-bold leading-snug tracking-tight mb-1">
                    Easily book a session with a school support worker
                  </div>
                  <!-- <div class="text-gray-300">
                    Give access to all your members by setting them up with a
                    special login to your community mental health resource hub
                    to let them know you care.
                  </div> -->
                </div>
                <div
                  class="flex justify-center items-center w-8 h-8 bg-white rounded-full shrink-0 ml-3"
                >
                 <i class="las la-calendar-check text-2xl text-mint-500"></i>
                </div>
              </button>
              <button
                class="flex w-full items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 bg-white shadow-sm border-gray-800 hover:shadow-xl"
                @click.prevent="tab = '2'"
              >
                <div>
                  <div class="font-bold leading-snug tracking-tight mb-1">
                    Easy access to self help content
                  </div>
                  <!-- <div class="text-gray-300">
                    Our white label tools let you have active resources
                    available to your community 24/7 with our crisis response
                    technology.
                  </div> -->
                </div>
                <div
                  class="flex justify-center items-center w-8 h-8 bg-white rounded-full shrink-0 ml-3"
                >
                  <i class="las la-hands-helping text-2xl text-mint-500"></i>
                </div>
              </button>

              <button
                class="w-full flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out bg-white shadow-sm border-gray-800 hover:shadow-xl"
                @click.prevent="tab = '3'"
              >
                <div>
                  <div class="font-bold leading-snug tracking-tight mb-1">
                    Crisis resources in one click
                  </div>
                  <!-- <div class="text-gray-300">
                    Grow the connection to your community by sending them
                    resources via your custom dashboard.
                  </div> -->
                </div>
                <div
                  class="flex justify-center items-center w-9 h-9 bg-white rounded-full shrink-0 ml-3"
                >
                  <i class="las la-photo-video text-2xl text-mint-500"></i>
                </div>
              </button>
            </div>
          </div>

          <!-- Tabs items -->
          <div
            class="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1"
            data-aos="zoom-y-out"
          >
            <div class="relative flex flex-col text-center lg:text-right">
              <!-- Item 1 -->
              <transition
                enter-active-class="transition ease-in-out duration-700 transform order-first"
                enter-from-class="opacity-0 translate-y-16"
                enter-to-class="opacity-100 translate-y-0"
                leave-active-class="transition ease-in-out duration-300 transform absolute"
                leave-from-class="opacity-100 translate-y-0"
                leave-to-class="opacity-0 -translate-y-16"
              >
                <div class="w-full" v-show="tab === '1'">
                  <div class="relative inline-flex flex-col">
                    <img
                      class="md:max-w-none mx-auto rounded"
                      src="../images/bookapp.png"
                      width="400"
                      height="375"
                      alt="Features bg"
                    />
                  </div>
                </div>
              </transition>
              <!-- Item 2 -->
              <transition
                enter-active-class="transition ease-in-out duration-700 transform order-first"
                enter-from-class="opacity-0 translate-y-16"
                enter-to-class="opacity-100 translate-y-0"
                leave-active-class="transition ease-in-out duration-300 transform absolute"
                leave-from-class="opacity-100 translate-y-0"
                leave-to-class="opacity-0 -translate-y-16"
              >
                <div class="w-full" v-show="tab === '2'">
                  <div class="relative inline-flex flex-col">
                    <img
                      class="md:max-w-none mx-auto rounded"
                      src="../images/book2.png"
                      width="400"
                      height="375"
                      alt="Features bg"
                    />
                  </div>
                </div>
              </transition>
              <!-- Item 3 -->
              <transition
                enter-active-class="transition ease-in-out duration-700 transform order-first"
                enter-from-class="opacity-0 translate-y-16"
                enter-to-class="opacity-100 translate-y-0"
                leave-active-class="transition ease-in-out duration-300 transform absolute"
                leave-from-class="opacity-100 translate-y-0"
                leave-to-class="opacity-0 -translate-y-16"
              >
                <div class="w-full" v-show="tab === '3'">
                  <div class="relative inline-flex flex-col">
                    <img
                      class="md:max-w-none mx-auto rounded"
                      src="../images/ress.png"
                      width="360"
                      height="375"
                      alt="Features bg"
                    />
                  </div>
                </div>
              </transition>
            </div>
          </div>
        </div>
      </div>
    </div>
    <p>lo</p>
  </section>
</template>

<script>
export default {
  name: "FeaturesHome",
  data: function () {
    return {
      tab: "1",
    };
  },
};
</script>
