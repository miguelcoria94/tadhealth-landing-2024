<template>
  <section class="relative bg-white pb-4 relative">
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <div class="py-12 md:py-20">
        <!-- Section header -->
        <div class="max-w-3xl mx-auto text-center pb-12 md:pb-20">
          <h2 class="h2 font-red-hat-display mb-4">
            Three tiers of support. One-platform.
          </h2>
          <p class="text-xl text-gray-300 dark:text-gray-300">
            Engineered for security, compliance, and scalability to meet the
            demands of even the largest school districts or community
            organizations.
          </p>
        </div>

        <!-- Items -->
        <div
          class="max-w-sm mx-auto grid gap-12 md:gap-x-6 lg:gap-x-12 md:grid-cols-3 items-start md:max-w-none"
        >
          <!-- 1st item -->
          <!-- id reasources -->
          <a href="/tadhealth-platform#Resources">
            <div
              class="relative h-60 flex flex-col items-center border border-mint-300 border-opacity-40 rounded-xl p-6 md:p-6 lg:p-6 hover:bg-mint-500 hover:bg-opacity-10"
            >
              <!-- Number -->
              <div class="flex items-start w-full">
                <div
                  class="w-12 h-12 rounded-full bg-teal-400 dark:bg-teal-600 dark:bg-opacity-25 flex justify-center items-center text-white dark:text-teal-400 font-medium mb-4 lg:mb-4 shadow-sm"
                >
                  <i class="las la-lock"></i>
                </div>
              </div>

              <div class="flex flex-col relative items-left">
                <div class="flex items-center justify-between mb-1">
                  <div class="font-inter-tight font-semibold text-gray-300">
                    Tier 1
                  </div>
                </div>
                <div class="text-sm text-gray-300">
                  Share verified resources, content, and programs across your
                  entire organization in one click.
                </div>
              </div>
            </div>
          </a>

          <a href="/tadhealth-platform#Coordination">
            <div
              class="relative h-60 flex flex-col items-center border border-mint-300 border-opacity-40 rounded-xl p-6 md:p-6 lg:p-6 hover:bg-mint-500 hover:bg-opacity-10"
            >
              <!-- Number -->
              <div class="flex items-start w-full">
                <div
                  class="w-12 h-12 rounded-full bg-teal-400 dark:bg-teal-600 dark:bg-opacity-25 flex justify-center items-center text-white dark:text-teal-400 font-medium mb-4 lg:mb-4 shadow-sm"
                >
                  <i class="las la-network-wired"></i>
                </div>
              </div>

              <div class="flex flex-col relative items-left">
                <div class="flex items-center justify-between mb-1">
                  <div class="font-inter-tight font-semibold text-gray-300">
                    Tier 2
                  </div>
                </div>
                <div class="text-sm text-gray-300">
                  Connect TadHealth to your information systems or calendar
                  software, automating workflows to coordinate support in
                  real-time.
                </div>
              </div>
            </div>
          </a>

          <a href="/tadhealth-platform#Safety">
            <div
              class="relative h-60 flex flex-col items-center border border-mint-300 border-opacity-40 rounded-xl p-6 md:p-6 lg:p-6 hover:bg-mint-500 hover:bg-opacity-10"
            >
              <!-- Number -->
              <div class="flex items-start w-full">
                <div
                  class="w-12 h-12 rounded-full bg-teal-400 dark:bg-teal-600 dark:bg-opacity-25 flex justify-center items-center text-white dark:text-teal-400 font-medium mb-4 lg:mb-4 shadow-sm"
                >
                  <i class="las la-sitemap"></i>
                </div>
              </div>

              <div class="flex flex-col relative items-left">
                <div class="flex items-center justify-between mb-1">
                  <div class="font-inter-tight font-semibold text-gray-300">
                    Tier 3
                  </div>
                </div>
                <div class="text-sm text-gray-300">
                  Maintain the highest standards for crisis and safety support
                  with customizable protocols and tools for care in seconds.
                </div>
              </div>
            </div>
          </a>
        </div>
        <!-- <div class="mt-12">
          <img class="lg:max-w-none mx-auto" src="/src/images/resourcesfeat.png" width="750" alt="Carousel 01">
        </div> -->
        <div class="flex items-center justify-center">
          <a
            class="btn text-white bg-mint-500 hover:bg-mint-600 w-full mb-4 sm:w-auto sm:mb-0 mt-10"
            href="/request-demo"
            >Request Demo <i class="las la-arrow-right ml-2"></i
          ></a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "PlatformFeatureFive",
};
</script>
