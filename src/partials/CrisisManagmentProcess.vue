<template>
  <section class="mt-14 mb-14">
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <div class="pt-10 pb-12 md:pt-16 md:pb-20">

        <!-- Items -->
        <div class="max-w-md mx-auto grid gap-12 md:grid-cols-3 lg:gap-24 items-start md:max-w-none">
          
          <!-- 1st item -->
          <div class="relative flex flex-col items-center" data-aos="fade-up">
            <div
              aria-hidden="true"
              class="absolute h-1 border-t border-dashed border-gray-700 hidden md:block"
              style="width: calc(100% - 20px); left: calc(50% + 60px); top: 60px;"
              data-aos="fade-in"
              data-aos-delay="200"
            ></div>
            <svg class="w-28 h-28 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
              <rect class="fill-current text-mint-500" width="64" height="64" rx="32" />
              <path
                class="stroke-current text-mint-200"
                stroke-width="2"
                stroke-linecap="square"
                d="M21 23h22v18H21z"
                fill="none"
                fill-rule="evenodd"
              />
              <path
                class="stroke-current text-mint-200"
                d="M26 28h12M26 32h12M26 36h5"
                stroke-width="2"
                stroke-linecap="square"
              />
            </svg>
            <p style="font-size: 1.275rem; font-weight: bold;" class="mb-2">Easily Accessible</p>
            <p class="text-lg text-gray-300 text-center">
              Students, parents, and teachers can effortlessly request appointments via the TadHealth portal.
            </p>
          </div>

          <!-- 2nd item -->
          <div class="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="200">
            <div
              aria-hidden="true"
              class="absolute h-1 border-t border-dashed border-gray-700 hidden md:block"
              style="width: calc(100% - 20px); left: calc(50% + 60px); top: 60px;"
              data-aos="fade-in"
              data-aos-delay="400"
            ></div>
            <svg class="w-28 h-28 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
              <rect class="fill-current text-mint-500" width="64" height="64" rx="32" />
              <g fill="none" fill-rule="evenodd">
                <path
                  class="stroke-current text-mint-200"
                  d="M40 22a2 2 0 012 2v16a2 2 0 01-2 2H24a2 2 0 01-2-2V24a2 2 0 012-2"
                  stroke-width="2"
                  stroke-linecap="square"
                />
                <path
                  class="stroke-current text-mint-200"
                  stroke-width="2"
                  stroke-linecap="square"
                  d="M36 32l-4-3-4 3V22h8z"
                />
              </g>
            </svg>
            <p style="font-size: 1.275rem; font-weight: bold;" class="mb-2 text-center">One-Stop-Shop for<br>Crisis Resources</p>
            <p class="text-lg text-gray-300 text-center">
              Referrals can be sent directly to care professionals or assigned through the school administrator.
            </p>
          </div>

          <!-- 3rd item -->
          <div class="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="400">
            <svg class="w-28 h-28 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
              <rect class="fill-current text-mint-500" width="64" height="64" rx="32" />
              <path
                class="stroke-current text-mint-200"
                stroke-width="2"
                stroke-linecap="square"
                d="M21 35l4 4 12-15"
                fill="none"
                fill-rule="evenodd"
              />
              <path
                class="stroke-current text-mint-200"
                d="M42 29h-3M42 34h-7M42 39H31"
                stroke-width="2"
                stroke-linecap="square"
              />
            </svg>
            <p style="font-size: 1.275rem; font-weight: bold;" class="mb-2">Real-Time Alerts</p>
            <p class="text-lg text-gray-300 text-center">
              School officials receive instant notifications, enabling quick intervention and support for students.
            </p>
          </div>
        </div>
      </div>

      <!-- Button -->
      <div class="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center" data-aos="zoom-y-out" data-aos-delay="300">
        <div>
          <a class="btn text-white bg-mint-500 hover:bg-mint-600 w-full mb-4 sm:w-auto sm:mb-0" href="/request-demo">
            Contact Us
          </a>
        </div>
      </div>

    </div>
  </section>
</template>

<script>
export default {
  name: "CrisisManagmentProcess",
};
</script>
