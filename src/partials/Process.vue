<template>
  <section class="mt-14 mb-14">
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <div class="pt-10 pb-12 md:pt-16 md:pb-20">
        <!-- Section header -->
        <div class="max-w-3xl mx-auto text-center pb-12 md:pb-20">
          <h2 class="h2 mb-4" data-aos="fade-up">
            Boost productivity, reduce burnout, and enhance well-being through:
          </h2>
          <!-- <p
            class="text-xl text-gray-300"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Simplify access to mental health resources. 
          </p> -->
        </div>

        <!-- Items -->
        <div
          class="max-w-sm mx-auto grid gap-8 md:grid-cols-3 lg:gap-16 items-start md:max-w-none"
        >
          <!-- 1st item -->
          <div class="relative flex flex-col items-center" data-aos="fade-up">
            <div
              aria-hidden="true"
              class="absolute h-1 border-t border-dashed border-gray-700 hidden md:block"
              style="
                width: calc(100% - 32px);
                left: calc(50% + 48px);
                top: 32px;
              "
              data-aos="fade-in"
              data-aos-delay="200"
            ></div>
            <svg
              class="w-16 h-16 mb-4"
              viewBox="0 0 64 64"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                class="fill-current text-mint-500"
                width="64"
                height="64"
                rx="32"
              />
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
            <h4 class="h4 mb-2">Safety Standards</h4>
            <p class="text-lg text-gray-300 text-center">
              Above all we prioritize safety and security to provide quick and
              easy access to mental health support tools.
              <a
                class="text-mint-600 hover:text-mint-500 transition duration-150 ease-in-out"
                href="/tadhealth-platform#Safety"
                target="_blank"
                >Learn More.</a
              >
            </p>
          </div>

          <!-- 2nd item -->
          <div
            class="relative flex flex-col items-center"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div
              aria-hidden="true"
              class="absolute h-1 border-t border-dashed border-gray-700 hidden md:block"
              style="
                width: calc(100% - 32px);
                left: calc(50% + 48px);
                top: 32px;
              "
              data-aos="fade-in"
              data-aos-delay="400"
            ></div>
            <svg
              class="w-16 h-16 mb-4"
              viewBox="0 0 64 64"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                class="fill-current text-mint-500"
                width="64"
                height="64"
                rx="32"
              />
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
            <h4 class="h4 mb-2">Professional Management</h4>
            <p class="text-lg text-gray-300 text-center">
              Workflows don’t have to be in insecure spreadsheets or paper form
              anymore because TadHealth does it for you.
              <a
                class="text-mint-600 hover:text-mint-500 transition duration-150 ease-in-out"
                href="/tadhealth-platform#Coordination"
                target="_blank"
                >Learn More.</a
              >
            </p>
          </div>

          <!-- 3rd item -->
          <div
            class="relative flex flex-col items-center"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <svg
              class="w-16 h-16 mb-4"
              viewBox="0 0 64 64"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                class="fill-current text-mint-500"
                width="64"
                height="64"
                rx="32"
              />
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
            <h4 class="h4 mb-2">Data Driven Tools</h4>
            <p class="text-lg text-gray-300 text-center">
              Our tools create real-time data so you can handle any surge in
              demand for support. <a
                class="text-mint-600 hover:text-mint-500 transition duration-150 ease-in-out"
                href="/tadhealth-analytics"
                target="_blank"
                >Learn More.</a
              >
            </p>
          </div>
        </div>
      </div>
      <div
        class="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center"
        data-aos="zoom-y-out"
        data-aos-delay="300"
      >
        <div>
          <a
            class="btn text-white bg-mint-500 hover:bg-mint-600 w-full mb-4 sm:w-auto sm:mb-0"
            href="/request-demo"
            >Request Demo</a
          >
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
