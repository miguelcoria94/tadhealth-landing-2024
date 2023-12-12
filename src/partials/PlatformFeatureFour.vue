<template>
  <section class="pt-32 mb-10 relative">
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <div class="py-12 md:py-20">
        <div>
          <!-- Section content -->

          <div
            class="max-w-xl mx-auto md:max-w-none flex flex-col md:flex-row md:space-x-8 lg:space-x-16 xl:space-x-20 space-y-8 space-y-reverse md:space-y-0"
          >
            <!-- Image -->
            <div
              class="md:w-5/12 lg:w-1/2"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <img
                class="mx-auto md:max-w-none"
                src="../images/Collage2.png"
                height="405"
                width="405"
                alt="Features"
              />
            </div>

            <!-- Content -->
            <div
              class="md:w-7/12 lg:w-1/2 order-1 md:order-none"
              data-aos="fade-up"
            >
              <!-- Content #1 -->
              <div v-show="category === '1'">
                <span
                  class="text-xs font-semibold text-mint-500 uppercase mb-4 inline-block"
                  >Features For Education
                </span>
                <h3 class="h3 font-cabinet-grotesk mb-3">
                  Protecting Students Through Streamlined Support.
                </h3>
                <p class="text-lg mb-8">
                  TadHealth is a powerful network of digital mental health tools
                  give you comprehensive coverage and control of how you share,
                  engage, and coordinate mental health resources.
                </p>
                <ul class="inline-flex flex-col space-y-6">
                  <li class="flex items-start">
                    <svg
                      class="w-3 h-3 fill-current text-green-500 mt-1.5 mr-3 shrink-0"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"
                      />
                    </svg>
                    <div>
                      <div class="text-gray-300">
                        Customize tools without losing context
                      </div>
                    </div>
                  </li>
                  <li class="flex items-start">
                    <svg
                      class="w-3 h-3 fill-current text-green-500 mt-1.5 mr-3 shrink-0"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"
                      />
                    </svg>
                    <div>
                      <div class="text-gray-300">
                        Enjoy high-level privacy and security
                      </div>
                    </div>
                  </li>
                  <li class="flex items-start">
                    <svg
                      class="w-3 h-3 fill-current text-green-500 mt-1.5 mr-3 shrink-0"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"
                      />
                    </svg>
                    <div>
                      <div class="text-gray-300">
                        Experience connected resources and support students
                        through different access points
                      </div>
                    </div>
                  </li>
                  <li class="flex items-start">
                    <svg
                      class="w-3 h-3 fill-current text-green-500 mt-1.5 mr-3 shrink-0"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"
                      />
                    </svg>
                    <div>
                      <div class="text-gray-300">
                        Ensure a uniform experience for your school community
                        across essential services
                      </div>
                    </div>
                  </li>
                  <li class="flex items-start">
                    <svg
                      class="w-3 h-3 fill-current text-green-500 mt-1.5 mr-3 shrink-0"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"
                      />
                    </svg>
                    <div>
                      <div class="text-gray-300">
                        Automate processes across your entire back office and
                        experience for students
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Features02",
  data: function () {
    return {
      category: "1",
    };
  },
};
</script>
