<template>
  <section>
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <div class="py-12 md:py-20">
        <!-- Section header -->
        <div class="max-w-3xl mx-auto text-center pb-12 md:pb-20">
          <h2 class="h2">
            Instantly grow your community mental health programs
          </h2>
        </div>

        <section>
          <div class="relative max-w-6xl mx-auto px-4 sm:px-6">
            <div class="py-12 md:py-20">
              <!-- Line -->
              <div
                class="hidden md:block absolute top-0 left-1/2 -ml-px -mt-4 w-0.5 h-12 bg-slate-200"
                aria-hidden="true"
              ></div>

              <!-- Customers -->
              <div class="max-w-xl mx-auto md:max-w-none space-y-20">
                <!-- 1st Customer -->
                <div
                  class="flex flex-col-reverse md:flex-row-reverse md:items-center md:space-x-reverse lg:space-x-reverse xl:space-x-reverse md:space-x-8 lg:space-x-16 xl:space-x-20 space-y-4 space-y-reverse md:space-y-0"
                >
                  <!-- Content -->
                  <div class="md:min-w-[30rem]" data-aos="fade-left">
                    <h2 class="h3 md:text-4xl font-playfair-display mb-4">
                      <router-link
                        class="text-slate-800 hover:underline hover:decoration-mint-400"
                        to="/casestudies"
                        >Morgan’s Message
                      </router-link>
                    </h2>
                    <p
                      class="text-lg text-slate-500 border-l-2 border-slate-800 pl-4 mb-8"
                    >
                      Morgan’s Message strives to eliminate the stigma
                      surrounding mental health, equalize the treatment for
                      mental health and physical injuries, normalize and expand
                      dialogue and empower those who suffer in silence & feel
                      alone.
                    </p>
                    
                    <div class="space-y-3">
                      <svg
                        class="fill-mint-500"
                        width="20"
                        height="16"
                        viewBox="0 0 20 16"
                      >
                        <path
                          d="M2.76 16c2.577 0 5.154-3.219 5.154-5.996 0-1.357-.613-2.272-1.748-2.272s-2.27.726-3.283 1.64C3.16 6.439 5.613 3.346 9.571.885L9.233 0C3.466 2.903 0 7.732 0 12.213 0 14.517.828 16 2.76 16Zm10.43 0c2.577 0 5.154-3.219 5.154-5.996 0-1.357-.614-2.272-1.749-2.272-1.135 0-2.27.726-3.282 1.64.276-2.934 2.73-6.027 6.687-8.488L19.663 0c-5.767 2.903-9.234 7.732-9.234 12.213 0 2.304.829 3.787 2.761 3.787Z"
                        />
                      </svg>
                      <blockquote
                        class="font-playfair-display text-slate-500 italic"
                      >
                        TadHealth is helping us develop and expand our mental
                        health programs that support our 2,336 student-athlete
                        Ambassadors on 915 high school and collegiate campuses
                        in 42 states, D.C. and Canada. Their team is dedicated
                        to our mission to
                        <strong>Taking A Shot At Mental Health.</strong>
                      </blockquote>
                    </div>
                    
                    <div>
                      
                    </div>
                    <div class="flex items-center mt-4">
                        <img
                          class="rounded-full shrink-0 mr-3"
                          src="../images/Dona.png"
                          width="32"
                          height="32"
                          alt="Customer Avatar 01"
                        />
                      <span></span>
                      <div class="font-medium">
                        <span
                          class="text-slate-800  transition duration-150 ease-in-out"
                          to="#0"
                          >Dona Rogers</span
                        >
                        <span class="text-slate-300"> · </span>
                        <span class="text-slate-500"
                          >Co-Founder, Morgan’s Message </span 
                        >
                        <div>
                      <a href="https://morgansmessage.org/" target="_blank" class="text-mint-500 hover:text-mint-400">@morgansmessage</a>
                    </div>
                      </div>
                      
                    </div>
                    
                  </div>

                  <!-- Image -->
                  <div
                    class="flex justify-center items-center"
                    data-aos="fade-right"
                  >
                    <div class="relative">
                      <div
                        class="absolute inset-0 pointer-events-none border-2 border-slate-200 -translate-x-4 -translate-y-4 -z-10"
                        aria-hidden="true"
                      ></div>
                      <img
                        class="mx-auto md:max-w-none"
                        src="../images/mmc.png"
                        width="540"
                        height="405"
                        alt="Customer 01"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "News",
};
</script>
