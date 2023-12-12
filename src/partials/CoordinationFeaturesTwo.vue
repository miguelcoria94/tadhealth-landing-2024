<template>
  <section>
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <div class="">
        <!-- Section header -->
        <!-- <div class="max-w-3xl mx-auto text-center pb-8">
          <span
            class="text-xs font-semibold text-mint-500 uppercase mb-4 inline-block"
            >TadHealth Coordination
          </span>
          <h2 class="h2 font-cabinet-grotesk">
            TadHealth for all your coordination needs
          </h2>
        </div> -->

        <!-- Pricing tables -->
        <div>
          <div
            class="max-w-sm mx-auto grid gap-8 lg:grid-cols-1 lg:gap-6 items-start lg:max-w-none pt-4"
          >
            <!-- Pricing table 3 -->
            <div
              class="relative flex flex-col justify-center items-center content-center h-full p-6 rounded bg-mint-500 bg-opacity-25"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <!-- <div class="mb-6">
                <div class="text-xl font-bold mb-1">
                  <i class="las la-envelope"></i>
                </div>
              </div> -->
              <h4 class="mb-6 text-center max-w-3xl">
                Chat with us about how TadHealth can expand your wellness
                programs and bring resources to everyone.
              </h4>
              <a
                class="btn text-white bg-mint-500 hover:bg-mint-600 w-full mb-4 sm:w-auto sm:mb-0 mt-10"
                href="/request-demo"
                >Request Demo</a
              >
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
