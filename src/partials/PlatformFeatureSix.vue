<template>
  <section>
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <div class="py-12 md:py-20">
        <!-- Section header -->
        <div class="max-w-3xl mx-auto text-center pb-12 md:pb-20">
          <h2 class="h2 font-red-hat-display mb-4">Why choose TadHealth?</h2>
          <p class="text-xl text-gray-300 dark:text-gray-300">
            Our enterprise Mental Health Management System (MHMS) combines
            essential modules for running your wellness centers, eliminating
            silos, and providing a smooth transition between processes and
            active resources within your community.
          </p>
        </div>

        <!-- Articles list -->
        <div class="mx-auto max-w-4xl">
          <div
            class="grid gap-12 md:grid-cols-1 md:gap-x-6 md:gap-y-8 items-start"
          >
            <!-- 1st article -->
            <article
              class="flex flex-col border border-gray-500 rounded-md border-opacity-30 bg-white"
            >
              <header class="p-8">
                <span
                  class="text-xs font-semibold text-mint-500 uppercase mb-4 inline-block"
                  >A centralized system of record has major benefits
                </span>
                <h4 class="h5 mb-4">
                  <router-link
                    to="/blog-post"
                    class="hover:text-gray-100 transition duration-150 ease-in-out"
                    >Your system for streamlining mental health</router-link
                  >
                </h4>
                <p class="text-md text-gray-300 grow mb-4">
                  TadHealth connects all systems to one record for operational
                  data, streamlining updates, management, and reporting in a
                  single platform.
                </p>

                <p class="text-md text-gray-300 grow pb-10">
                  Learn more about how Alison Norman, the lead wellness
                  counselor at BHUSD, uses TadHealth
                  <router-link
                    class="text-mint-500 hover:text-mint-600"
                    to="/blog-post"
                    >here.</router-link
                  >
                </p>
              </header>

              <router-link to="/bhhs-case-study" class="block" target="_blank">
                <figure class="relative h-0 pb-9/16 overflow-hidden">
                  <img
                    class="absolute w-full object-cover transform hover:scale-105 transition duration-700 ease-out"
                    src="../images/bhhsfeat.png"
                    width="352"
                    height="198"
                    alt="News 01"
                  />
                </figure>
              </router-link>
            </article>

            <!-- <article
              class="flex flex-col border border-gray-500 rounded-md border-opacity-30"
            >
              <header class="p-8">
                <span
                  class="text-xs font-semibold text-mint-500 uppercase mb-4 inline-block"
                  >AUTOMATE EVERYTHING
                </span>
                <h4 class="h5 mb-4">
                  <router-link
                    to="/blog-post"
                    class="hover:text-gray-100 transition duration-150 ease-in-out"
                    >Mental Health Service Delivery reinvented</router-link
                  >
                </h4>
                <p class="text-md text-gray-300 mb-4 grow">
                  Our MHMS provides an end-to-end technology platform for resources, coordination, workforce management, and more, connecting district partners and behavioral health teams, and offering actionable insights.
                </p>

                <p class="text-md text-gray-300 mb-4 grow">
                  Embrace the future of mental health management systems with our all-in-one solution that unifies data, connects systems, and automates processes to help your students, faculty, and school community thrive.
                </p>
              </header>

              <router-link to="/bhhs-case-study" target="_blank" class="block">
                <figure class="relative h-0 pb-9/16 overflow-hidden">
                  <img
                    class="absolute inset-0 w-full h-full object-cover transform hover:scale-105 transition duration-700 ease-out"
                    src="../images/schoolfeat.png"
                    width="352"
                    height="198"
                    alt="News 01"
                  />
                </figure>
              </router-link>
            </article> -->
          </div>
        </div>
        <!-- <div class="flex justify-center">
          <a
            class="btn text-white bg-mint-500 hover:bg-mint-600 w-full mb-4 sm:w-auto sm:mb-0 mt-10"
            href="/request-demo"
            >Request Demo</a
          >
        </div> -->
      </div>
    </div>
  </section>

  <section class="relative bg-white">
    <!-- display flex -->
    <div class="max-w-6xl mx-auto px-4 sm:px-6 py-12 flex content-center">
      <!-- Items -->
      <div class="max-w-4xl mx-auto text-center px-12 md:pb-16">
        <!-- small span text in green 500 -->
        <span
          class="text-xs font-semibold text-mint-500 uppercase mb-4 inline-block"
          >TADHEALTH COORDINATION</span
        >
        <h3 class="h3 mb-4" data-aos="fade-up">Still have questions?</h3>
        <p
          class="text-xl text-gray-300"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Can’t find the answer you’re looking for? Please chat with our team!
        </p>
        <a
          class="btn text-white bg-mint-500 hover:bg-mint-600 w-full mb-4 sm:w-auto sm:mb-0 mt-10"
          href="/request-demo"
          >Request Demo</a
        >
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "News",
};
</script>
