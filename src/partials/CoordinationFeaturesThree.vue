<template>
  <section class="bg-white">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 pb-12 bg-white">
      <div class="pt-12 md:pt-20">
        <!-- Section header -->
        <div class="max-w-3xl mx-auto text-center pb-8">
          <!-- <span
            class="text-xs font-semibold text-mint-500 uppercase mb-4 inline-block"
            >SOLUTIONS

          </span> -->
          <h2 class="h2 font-cabinet-grotesk">
            TadHealth for all your coordination needs.
          </h2>
        </div>

        <!-- Pricing tables -->
        <div>
          <div
            class="max-w-sm mx-auto grid gap-8 lg:grid-cols-3 lg:gap-6 items-start lg:max-w-none pt-4"
          >
            <div
              class="relative flex flex-col h-full p-6 rounded border border-gray-500 border-opacity-25"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div class="mb-6">
                <div class="text-xl font-bold mb-1">
                  <i class="las la-link text-mint-500 text-2xl"></i>
                </div>
              </div>
              <div class="mb-6">
                <div class="text-xl font-bold mb-1">
                  AI enabled availability
                </div>
              </div>

              <p class="mb-6 text-gray-300">
                Automatically synchronize local availability and access our
                private network to increase verified capacity on demand.
              </p>
            </div>

            <div
              class="relative flex flex-col h-full p-6 rounded border border-gray-500 border-opacity-25"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div class="mb-6">
                <div class="text-xl font-bold mb-1">
                  <i class="las la-network-wired text-mint-500 text-2xl"></i>
                </div>
              </div>
              <div class="mb-6">
                <div class="text-xl font-bold mb-1">Controlled referrals</div>
              </div>

              <p class="mb-6 text-gray-300">
                Connect to referrals effortlessly and manage additional support
                through the administrator dashboard.
              </p>
            </div>

            <div
              class="relative flex flex-col h-full p-6 rounded border border-gray-500 border-opacity-25"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div class="mb-6">
                <div class="text-xl font-bold mb-1">
                  <i class="las la-chalkboard text-mint-500 text-2xl"></i>
                </div>
              </div>
              <div class="mb-6">
                <div class="text-xl font-bold mb-1">Two-way booking</div>
              </div>

              <p class="mb-6 text-gray-300">
                Control the cadence of appointments with dedicated booking
                controls for different levels of professionals.
              </p>
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
  name: "CoordinationFeaturesTwo",
  setup() {
    const annual = ref(false);

    return {
      annual,
    };
  },
};
</script>
