<template>
  <section class="relative">
    <!-- Bg gradient -->
    <div
      class="absolute top-0 left-0 right-0 bg-gradient-to-b from-gray-50 to-white h-2/3 pointer-events-none -z-10"
      aria-hidden="true"
    ></div>

    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <div class="py-12 md:py-20">
        <!-- Section header -->
        <div class="max-w-3xl mx-auto text-center pb-12 md:pb-16">
          <h2 class="h2 font-cabinet-grotesk">
            Become a member of the wellness counselor network
          </h2>
        </div>

        <!-- Pricing tables -->
        <div>
          <div class="max-w-sm mx-auto flex items-center content-center pt-4">
            <!-- Pricing table 2 -->
            <div
              class="relative flex flex-col h-full p-6 bg-gray-800"
              data-aos="fade-left"
            >
              <div class="absolute top-0 right-0 mr-6 -mt-4">
                <div
                  class="inline-flex items-center text-sm font-semibold py-1 px-4 text-emerald-600 bg-emerald-200 rounded-full"
                >
                  Most Popular
                </div>
              </div>
              <div class="mb-6">
                <div
                  class="font-cabinet-grotesk text-xl text-gray-100 font-semibold mb-1"
                >
                  Business
                </div>
                <div
                  class="font-cabinet-grotesk text-gray-100 inline-flex items-baseline mb-2"
                >
                  <span class="text-5xl font-bold">Free</span>
                </div>
                <div class="text-gray-300 mb-6">
                  Explore tools, trends, tips and ways to add to your wellness
                  programs.
                </div>
                <router-link
                  class="btn text-white bg-green-500 hover:bg-green-400 w-full shadow-sm"
                  to="/join-community"
                  >Join The Community</router-link
                >
              </div>
              <div class="font-medium text-gray-100 mb-4">
                Network Includes:
              </div>
              <ul class="text-gray-300 space-y-3 grow">
                <li class="flex items-center">
                  <svg
                    class="w-3 h-3 fill-current text-emerald-500 mr-3 shrink-0"
                    viewBox="0 0 12 12"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"
                    />
                  </svg>
                  <span
                    >App exclusive for counselors for resource feed and news
                    (coming soon)
                  </span>
                </li>
                <li class="flex items-center">
                  <svg
                    class="w-3 h-3 fill-current text-emerald-500 mr-3 shrink-0"
                    viewBox="0 0 12 12"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"
                    />
                  </svg>
                  <span
                    >Community channel for invitations to relevant conferences,
                    community events, and webinars
                  </span>
                </li>
                <li class="flex items-center">
                  <svg
                    class="w-3 h-3 fill-current text-emerald-500 mr-3 shrink-0"
                    viewBox="0 0 12 12"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"
                    />
                  </svg>
                  <span
                    >Community only access to new wellness programs and new
                    technology features curated for your needs</span
                  >
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
import { ref } from "vue";

export default {
  name: "GthPricing",
  setup() {
    const annual = ref(true);

    return {
      annual,
    };
  },
};
</script>
