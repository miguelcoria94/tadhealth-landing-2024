<template>
  <section class="relative pt-12 pb-12">
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <div class="py-12 md:py-20 dark:border-gray-800">
        <!-- Section header -->
        <div class="max-w-3xl mx-auto text-center pb-12 md:pb-20">
          <h2 class="h2 font-red-hat-display mb-4">So, how does it work?</h2>
          <p class="text-xl text-gray-600 dark:text-gray-400">
            Built exclusively for any public organization, the TadHealth
            platform optimizes resources in real-time to reduce scheduling
            errors, lost forms, and prevent individuals from falling through the
            cracks.
          </p>
        </div>

        <!-- Glow illustration -->
        <svg
          class="absolute left-1/2 transform -translate-x-1/2 mt-20 lg:mt-40 pointer-events-none -z-1 dark:opacity-20 hidden md:block"
          aria-hidden="true"
          width="854"
          height="509"
          viewBox="0 0 854 509"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <radialGradient
              cx="50%"
              cy="50%"
              fx="50%"
              fy="50%"
              r="39.386%"
              id="iphonesill__a"
            >
              <stop stop-color="#667EEA" offset="0%" />
              <stop stop-color="#667EEA" stop-opacity="0" offset="100%" />
            </radialGradient>
            <radialGradient
              cx="50%"
              cy="50%"
              fx="50%"
              fy="50%"
              r="39.386%"
              id="iphonesill__b"
            >
              <stop stop-color="#9F7AEA" offset="0%" />
              <stop stop-color="#9F7AEA" stop-opacity="0" offset="100%" />
            </radialGradient>
          </defs>
          <g transform="translate(-64 -64)" fill="none" fill-rule="evenodd">
            <circle
              fill-opacity=".64"
              fill="url(#iphonesill__a)"
              cx="300"
              cy="300"
              r="300"
            />
            <circle
              fill-opacity=".72"
              fill="url(#iphonesill__b)"
              cx="729"
              cy="384"
              r="240"
            />
          </g>
        </svg>

        <!-- Items -->
        <div
          class="max-w-sm mx-auto grid gap-12 md:gap-x-6 lg:gap-x-12 md:grid-cols-3 items-start md:max-w-none"
        >
          <!-- 1st item -->
          <div class="relative flex flex-col items-center">
            <!-- Line connecting (1) and (2) -->
            <div
              aria-hidden="true"
              class="absolute h-px opacity-50 bg-gradient-to-r from-white via-teal-400 to-white dark:from-gray-900 dark:via-teal-400 dark:to-gray-900 hidden md:block"
              style="
                width: calc(100% - 48px);
                left: calc(50% + 48px);
                top: 24px;
              "
            >
              <div
                class="absolute inset-0 border-t border-dashed border-white dark:border-gray-900"
              ></div>
            </div>
            <!-- Number -->
            <div
              class="w-12 h-12 rounded-full bg-teal-400 dark:bg-teal-600 dark:bg-opacity-25 flex justify-center items-center text-white dark:text-teal-400 font-medium"
            >
              1
            </div>
            <!-- Mobile mockup -->
            <div class="flex flex-col relative justify-center items-center">
              <!-- Image inside mockup size: 290x624px (or 580x1248px for Retina devices) -->
              <!-- iPhone mockup -->
              <h4 class="inline-block mb-8 mt-8 h4 text-mint-500 font-bold">
                Setup Access
              </h4>
              <!-- <p class="text-sm text-center" style="min-height: 80px;">
                Single sign on to access all support resources in one place.
              </p> -->
              <img
                class="relative max-w-full mx-auto h-auto pointer-events-none"
                src="../images/custom.png"
                height="374"
                alt="iPhone mockup"
                aria-hidden="true"
              />
            </div>
          </div>

          <!-- 2nd item -->
          <div class="relative flex flex-col items-center">
            <!-- Line connecting (2) and (3) -->
            <div
              aria-hidden="true"
              class="absolute h-px opacity-50 bg-gradient-to-r from-white via-teal-400 to-white dark:from-gray-900 dark:via-teal-400 dark:to-gray-900 hidden md:block"
              style="
                width: calc(100% - 48px);
                left: calc(50% + 48px);
                top: 24px;
              "
            >
              <div
                class="absolute inset-0 border-t border-dashed border-white dark:border-gray-900"
              ></div>
            </div>
            <!-- Number -->
            <div
              class="w-12 h-12 rounded-full bg-teal-400 dark:bg-teal-600 dark:bg-opacity-25 flex justify-center items-center text-white dark:text-teal-400 font-medium"
            >
              2
            </div>
            <!-- Mobile mockup -->
            <div class="flex flex-col relative justify-center items-center">
              <!-- Image inside mockup size: 290x624px (or 580x1248px for Retina devices) -->
              <!-- iPhone mockup -->
              <h4 class="inline-block mb-8 mt-8 h4 text-mint-500 font-bold">
                Connect Resources
              </h4>
              <!-- <p class="text-sm text-center"  style="min-height: 80px;">
                TadHealth premium content lets you explore podcasts, articles,
                and videos from verified professionals and company ambassadors.
              </p> -->
              <img
                class="relative max-w-full mx-auto h-auto pointer-events-none"
                src="../images/res.png"
                height="374"
                alt="iPhone mockup"
                aria-hidden="true"
              />
            </div>
          </div>

          <!-- 3rd item -->
          <div class="relative flex flex-col items-center">
            <div
              class="w-12 h-12 rounded-full bg-teal-400 dark:bg-teal-600 dark:bg-opacity-25 flex justify-center items-center text-white dark:text-teal-400 font-medium"
            >
              3
            </div>
            <!-- Mobile mockup -->
            <div class="flex flex-col relative justify-center items-center">
              <!-- Image inside mockup size: 290x624px (or 580x1248px for Retina devices) -->
              <!-- iPhone mockup -->
              <h4 class="inline-block mb-8 mt-8 h4 text-mint-500 font-bold">
                Track Support
              </h4>
              <!-- <p class="text-sm text-center"  style="min-height: 80px;">
                Our analytics let you respond to the demand for support and
                continue to sustain program growth through connected analytics.
              </p> -->
              <img
                class="relative max-w-full mx-auto h-auto pointer-events-none"
                src="../images/charts.png"
                height="374"
                alt="iPhone mockup"
                aria-hidden="true"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Process",
};
</script>
