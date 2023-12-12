<template>
  <section>
    <div class="max-w-6xl mx-auto px-4 sm:px-6 md:pt-10">
      <div class="py-12 md:py-20">
        <!-- Section header -->
        <div class="max-w-3xl mx-auto text-center pb-12 md:pb-20">
          <h2 class="h2 font-playfair-display">
            Customized experience for your counseling center and students
          </h2>
        </div>

        <!-- Section content -->
        <div
          class="max-w-xl mx-auto md:max-w-none flex flex-col md:flex-row md:items-start md:space-x-8 lg:space-x-16 xl:space-x-18 space-y-8 space-y-reverse md:space-y-0"
        >
          <!-- Tabs items (images) -->
          <div
            class="md:rtl md:w-5/12 lg:w-1/2 order-1 md:order-none"
            data-aos="fade-down"
          >
            <div class="relative flex flex-col">
              <!-- Item 1 -->
              <transition
                enter-active-class="transition ease-in-out duration-700 order-first"
                enter-from-class="opacity-0 -translate-y-16"
                enter-to-class="opacity-100 translate-y-0"
                leave-active-class="transition ease-in-out duration-300 absolute"
                leave-from-class="opacity-100 -translate-y-0"
                leave-to-class="opacity-0 translate-y-16"
              >
                <div class="w-full">
                  <img
                    class="md:max-w-none mx-auto rounded"
                    src="../images/foryou.png"
                    width="540"
                    height="620"
                    alt="Features home 2 01"
                  />
                </div>
              </transition>
              <!-- Item 2 -->
            </div>
          </div>

          <!-- Content -->
          <div class="md:w-7/12 lg:w-1/2" data-aos="fade-up">
            <div class="mb-8 text-center md:text-left">
              <h3 class="h3 font-playfair-display mb-3">
                Built exclusively for schools
              </h3>
              <p class="text-xl text-gray-300">
                Our platform optimizes student resources in real-time by
                reducing scheduling errors, lost forms, and building trust.
              </p>
            </div>
            <!-- Tabs buttons -->
            <div class="mb-8 md:mb-0">
              <button
                class="flex items-start text-left bg-white border-2 border-mint-500 px-5 py-3 rounded shadow-md transition duration-300 ease-in-out mb-3"
                @click="tab = 1"
              >
                <svg
                  class="w-4 h-4 fill-current text-mint-500 shrink-0 mt-1 mr-4"
                  viewBox="0 0 16 16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.4 6.6c.8.8.8 2 0 2.8-.8.8-2 .8-2.8 0-.8-.8-5-7.8-5-7.8s7 4.2 7.8 5Z"
                  />
                  <path
                    d="M8 16c-4.4 0-8-3.6-8-8 0-.6.4-1 1-1s1 .4 1 1c0 3.3 2.7 6 6 6s6-2.7 6-6-2.7-6-6-6c-.6 0-1-.4-1-1s.4-1 1-1c4.4 0 8 3.6 8 8s-3.6 8-8 8Z"
                  />
                </svg>
                <div>
                  <div class="font-medium mb-1">Community Feedback</div>
                  <div class="text-gray-300">
                    Mobilize resources that connect to the right demographic and
                    programs in your school.
                  </div>
                </div>
              </button>
              <button
                class="flex items-start text-left bg-white border-2 border-mint-500 px-5 py-3 rounded shadow-md transition duration-300 ease-in-out mb-3"
                @click="tab = 2"
              >
                <svg
                  class="w-4 h-4 fill-current text-mint-500 shrink-0 mt-1 mr-4"
                  viewBox="0 0 16 16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.019 15.276.034 1.329A1.058 1.058 0 0 1 1.33.034L15.276 4.02c.896.299.996 1.494.1 1.893L8.8 8.8l-2.79 6.574c-.498.897-1.693.797-1.992-.1ZM2.525 2.525l2.69 9.463 1.892-4.383c.1-.199.299-.398.498-.498l4.383-1.893-9.463-2.69Z"
                  />
                </svg>
                <div>
                  <div class="font-medium mb-1">Upload Premium Content</div>
                  <div class="text-gray-300">
                    TadHealth premium content lets you explore podcasts,
                    articles, and videos from verified professionals and company
                    ambassadors.
                  </div>
                </div>
              </button>
              <button
                class="flex items-start text-left bg-white border-2 border-mint-500 px-5 py-3 rounded shadow-md transition duration-300 ease-in-out"
                @click="tab = 3"
              >
                <svg
                  class="w-4 h-4 fill-current text-mint-600 shrink-0 mt-1 mr-4"
                  viewBox="0 0 16 16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.686 5.71 10.291.3c-.4-.4-.999-.4-1.399 0a.97.97 0 0 0 0 1.403l.6.6L2.698 6.01l-1-1.002c-.4-.4-.999-.4-1.398 0a.97.97 0 0 0 0 1.403l1.498 1.502 2.398 2.404L.6 14.023 2 15.425l3.696-3.706 3.997 4.007c.5.5 1.199.2 1.398 0a.97.97 0 0 0 0-1.402l-.999-1.002 3.697-6.711.6.6c.599.602 1.199.201 1.398 0 .3-.4.3-1.1-.1-1.502Zm-7.193 6.11L4.196 7.511l6.695-3.706 1.298 1.302-3.696 6.711Z"
                  />
                </svg>
                <div>
                  <div class="font-medium mb-1">Smart Insights</div>
                  <div class="text-gray-300">
                    Our analytics let you send resources at the right time
                    giving you control to optimize mental health at scale.
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { ref } from "vue";

export default {
  name: "FeaturesHome02",
};
</script>
