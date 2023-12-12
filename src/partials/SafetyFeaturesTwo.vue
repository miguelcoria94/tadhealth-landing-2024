<template>
  <section class="pt-10 mb-10 relative">
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <div class="py-12 md:py-20">
        <div>
          <!-- Section content -->

          <div
            class="max-w-xl mx-auto md:max-w-none flex flex-col md:flex-row md:space-x-8 lg:space-x-16 xl:space-x-20 space-y-8 space-y-reverse md:space-y-0"
          >
            <!-- Content -->
            <div
              class="md:w-7/12 lg:w-1/2 order-1 md:order-none"
              data-aos="fade-up"
            >
              <!-- Content #1 -->
              <div v-show="category === '1'">
                <span
                  class="text-xs font-semibold text-mint-500 uppercase mb-4 inline-block"
                  >TADHEALTH SAFETY
                </span>
                <h3 class="h3 font-cabinet-grotesk mb-3">Safety Team & Help</h3>
                <p class="text-lg text-gray-300 mb-8">
                  Many crisis situations escalate quickly. Eliminate the need to
                  rely on paper protocols or assume everyone knows what to do
                  when someone is having a mental health crisis.
                </p>
                <ul class="inline-flex flex-col space-y-6">
                  <li class="flex items-start">
                    <i
                      class="las la-concierge-bell text-2xl fill-current text-green-500 mt-1.5 mr-3 shrink-0"
                    ></i>

                    <div>
                      <div>
                        <p class="font-bold text-lg mb-2">
                          Easy access and secure alerts
                        </p>
                        <p class="text-gray-300">
                          TadHealth crisis intervention button works on any
                          digital interface, website, or platform making sure no
                          one falls through the cracks when seeking support.
                        </p>
                      </div>
                    </div>
                  </li>
                  <li class="flex items-start">
                    <i
                      class="las la-users text-2xl fill-current text-green-500 mt-1.5 mr-3 shrink-0"
                    ></i>
                    <div>
                      <div>
                        <p class="font-bold text-lg mb-2">
                          Streamlined communication and collaboration
                        </p>
                        <p class="text-gray-300">
                          With safety team built right into the software you can
                          be confident everyone knows what to do and how to help
                          someone in a mental health crisis.
                        </p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <!-- Image -->
            <div
              class="md:w-5/12 lg:w-1/2"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <img
                class="mx-auto md:max-w-none mt-12"
                src="../images/team.png"
                height="405"
                width="405"
                alt="Features"
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
  name: "SafetyFeaturesTwo",
  data: function () {
    return {
      category: "1",
    };
  },
};
</script>
