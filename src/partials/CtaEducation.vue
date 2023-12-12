<template>
  <section class="bg-gray-900">
    <div class="relative max-w-6xl mx-auto px-4 sm:px-6">
      <div class="py-12 md:py-20">
        <div class="relative max-w-4xl mx-auto text-center">
          <!-- <div
            class="absolute right-0 -mt-4 -mr-1 fill-slate-300 hidden lg:block"
            aria-hidden="true"
          >
            <svg class="fill-green-500" width="56" height="43">
              <path
                d="M4.532 30.45C15.785 23.25 24.457 12.204 29.766.199c.034-.074-.246-.247-.3-.186-4.227 5.033-9.298 9.282-14.372 13.162C10 17.07 4.919 20.61.21 24.639c-1.173 1.005 2.889 6.733 4.322 5.81M18.96 42.198c12.145-4.05 24.12-8.556 36.631-12.365.076-.024.025-.349-.055-.347-6.542.087-13.277.083-19.982.827-6.69.74-13.349 2.24-19.373 5.197-1.53.75 1.252 7.196 2.778 6.688"
              />
            </svg>
          </div> -->

          <div class="relative">
            <h2 class="h2 mb-4">
              Interested in seeing a particular experience?
            </h2>
            <p class="text-xl text-slate-500 mb-8">
              Click the button below to get started.
            </p>
            <div class="flex justify-center content-center mb-6 mt-12">
              <!-- <div class="block flex justify-center content-center">
                <p
                  class="block flex justify-center content-center items-center mr-3"
                >
                  Not sure where to start?
                </p>
              </div> -->

              <router-link
                class="btn text-white bg-green-500 hover:bg-green-600 group"
                to="https://calendly.com/tadhealth/tad-intro"
                target="_blank"
              >
                Book A Time
                <i
                  class="las la-calendar group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-2"
                ></i>
                <span
                  class="tracking-normal text-white group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-2"
                >
                </span>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "CtaEducation",
};
</script>
