<template>
  <section class="relative">
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <div class="pt-32 pb-12 md:pt-40 md:pb-20">
        <!-- Page header -->
        <div class="max-w-3xl pb-12 md:pb-20 text-center md:text-left">
          <h1 class="h1" data-aos="fade-up">
            Beverly Hills Unified: A Case Study
          </h1>
        </div>

        <!-- Featured article -->
        <div class="pb-12 md:pb-20">
          <article
            class="max-w-sm mx-auto md:max-w-none grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 xl:gap-16 items-center"
          >
            <router-link
              to="/bhhs-case-study"
              class="relative block group"
              data-aos="fade-right"
              data-aos-delay="200"
            >
              <div
                class="absolute inset-0 bg-gray-800 hidden md:block transform md:translate-y-2 md:translate-x-4 xl:translate-y-4 xl:translate-x-8 group-hover:translate-x-0 group-hover:translate-y-0 transition duration-700 ease-out pointer-events-none"
                aria-hidden="true"
              ></div>
              <figure
                class="relative h-0 pb-9/16 md:pb-3/4 lg:pb-9/16 overflow-hidden transform md:-translate-y-2 xl:-translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 transition duration-700 ease-out"
              >
                <img
                  class="absolute inset-0 w-full h-full object-cover transform hover:scale-105 transition duration-700 ease-out"
                  src="../images/bhhs-case-study.png"
                  width="540"
                  height="303"
                  alt="Blog post 01"
                />
              </figure>
            </router-link>
            <div data-aos="fade-left" data-aos-delay="200">
              <header>
                <div class="mb-3">
                  <ul class="flex flex-wrap text-xs font-medium -m-1">
                    <li class="m-1">
                      <a
                        class="inline-flex text-center text-gray-800 py-1 px-3 rounded-full bg-green-500 hover:bg-green-700 transition duration-150 ease-in-out"
                        href="#0"
                        >Case Study</a
                      >
                    </li>
                  </ul>
                </div>
                <h3 class="h3 text-2xl lg:text-3xl mb-2">
                  <router-link
                    to="/bhhs-case-study"
                    class="hover:text-gray-100 transition duration-150 ease-in-out"
                    >Beverly Hills Unified Customer Story - Alison
                    Norman-Franks, Lead Wellness Counselor
                  </router-link>
                </h3>
              </header>
              <p class="text-lg text-gray-300 grow">
                Beverly Hills High School is a public high school serving 1,300
                students in Beverly Hills, CA. The school is unique in its
                student mental wellness approach and has one of the nation’s
                first school based mental health centers, NormanAid Wellness
                Center (NAWC).
              </p>
              <!-- <footer class="flex items-center mt-4">
                <a href="/bhhs-case-study">
                  <img
                    class="rounded-full shrink-0 mr-4"
                    src="../images/ben.png"
                    width="40"
                    height="40"
                    alt="Author 04"
                  />
                </a>
                <div>
                  <a
                    class="font-medium text-gray-200 hover:text-gray-100 transition duration-150 ease-in-out"
                    href="/bhhs-case-study"
                    >Ben Greiner</a
                  >
                  <span class="text-gray-700"> - </span>
                  <span class="text-gray-300">Jan 19, 2020</span>
                </div>
              </footer> -->
            </div>
          </article>
        </div>

        <!-- Articles list -->
        <div class="max-w-sm mx-auto md:max-w-none">
          <!-- Section title -->
          <h4 class="h4 pb-6 mb-10 border-b border-gray-700" data-aos="fade-up">
            All Case Studies
          </h4>

          <!-- Articles container -->
          <div
            class="grid gap-12 md:grid-cols-3 md:gap-x-6 md:gap-y-8 items-start"
          >
            <!-- 1st article -->
            <article class="flex flex-col h-full" data-aos="fade-up">
              <header>
                <router-link to="/blog-post" class="block mb-6">
                  <figure
                    class="relative h-0 pb-9/16 overflow-hidden rounded-sm"
                  >
                    <img
                      class="absolute inset-0 w-full h-full object-cover transform hover:scale-105 transition duration-700 ease-out"
                      src="../images/bhhs-case-study.png"
                      width="352"
                      height="198"
                      alt="News 01"
                    />
                  </figure>
                </router-link>

                <h3 class="h4 mb-2">
                  <router-link
                    to="/blog-post"
                    class="hover:text-gray-100 transition duration-150 ease-in-out"
                    >Beverly Hills Unified School District</router-link
                  >
                </h3>
              </header>
              <p class="text-lg text-gray-300 grow">
                Beverly Hills High School is a public high school serving 1,300
                students in Beverly Hills, CA. The school is unique in its
                student mental wellness approach and has one of the nation’s
                first school based mental health centers, NormanAid Wellness
                Center (NAWC) all powered by TadHealth.
              </p>
              <!-- <footer class="flex items-center mt-4">
                <a href="#0">
                  <img
                    class="rounded-full shrink-0 mr-4"
                    src="../images/news-author-01.jpg"
                    width="40"
                    height="40"
                    alt="Author 01"
                  />
                </a>
                <div class="font-medium">
                  <a
                    class="text-gray-200 hover:text-gray-100 transition duration-150 ease-in-out"
                    href="#0"
                    >Anastasia Dan</a
                  >
                  <span class="text-gray-700"> - </span>
                  <span class="text-gray-300">Jan 17, 2020</span>
                </div>
              </footer> -->
            </article>

            <!-- 2nd article -->
            <article
              class="flex flex-col h-full"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <header>
                <a class="block mb-6">
                  <figure
                    class="relative h-0 pb-9/16 overflow-hidden rounded-sm"
                  >
                    <img
                      class="absolute inset-0 w-full h-full object-cover transform hover:scale-105 transition duration-700 ease-out"
                      src="../images/gw.png"
                      width="352"
                      height="198"
                      alt="News 02"
                    />
                  </figure>
                </a>

                <h3 class="h4 mb-2">
                  <a
                    class="hover:text-gray-100 transition duration-150 ease-in-out"
                    >Greenwood College (Coming Soon)</a
                  >
                </h3>
              </header>
              <p class="text-lg text-gray-300 grow">
                Greenwood College school is a private highschool located in
                ontario canada. With the implementation of TadHealth, the school
                now has a comprehensive wellness program working in synergy with
                their social workers and director Kathryn Connelly who leads the
                program.
              </p>
              <!-- <footer class="flex items-center mt-4">
                <a href="#0">
                  <img
                    class="rounded-full shrink-0 mr-4"
                    src="../images/news-author-02.jpg"
                    width="40"
                    height="40"
                    alt="Author 02"
                  />
                </a>
                <div class="font-medium">
                  <a
                    class="text-gray-200 hover:text-gray-100 transition duration-150 ease-in-out"
                    href="#0"
                    >Markus Barker</a
                  >
                  <span class="text-gray-700"> - </span>
                  <span class="text-gray-300">Jan 12, 2020</span>
                </div>
              </footer> -->
            </article>

            <article class="flex flex-col h-full" data-aos="fade-up">
              <header>
                <router-link to="/blog-post" class="block mb-6">
                  <figure
                    class="relative h-0 pb-9/16 overflow-hidden rounded-sm"
                  >
                    <img
                      class="absolute inset-0 w-full h-full object-cover transform hover:scale-105 transition duration-700 ease-out"
                      src="../images/mm.png"
                      width="352"
                      height="198"
                      alt="News 01"
                    />
                  </figure>
                </router-link>

                <h3 class="h4 mb-2">
                  <router-link
                    to="/blog-post"
                    class="hover:text-gray-100 transition duration-150 ease-in-out"
                    >Morgans Message (Coming Soon)</router-link
                  >
                </h3>
              </header>
              <p class="text-lg text-gray-300 grow">
                TadHealth is helping us develop and expand our mental health
                programs that support our 2,336 student-athlete Ambassadors on
                915 high school and collegiate campuses in 42 states, D.C. and
                Canada. Their team is dedicated to our mission to Taking A Shot
                At Mental Health.
              </p>
              <!-- <footer class="flex items-center mt-4">
                <a href="#0">
                  <img
                    class="rounded-full shrink-0 mr-4"
                    src="../images/news-author-01.jpg"
                    width="40"
                    height="40"
                    alt="Author 01"
                  />
                </a>
                <div class="font-medium">
                  <a
                    class="text-gray-200 hover:text-gray-100 transition duration-150 ease-in-out"
                    href="#0"
                    >Anastasia Dan</a
                  >
                  <span class="text-gray-700"> - </span>
                  <span class="text-gray-300">Jan 17, 2020</span>
                </div>
              </footer> -->
            </article>

            <!-- 3nd article -->
            <article
              class="flex flex-col h-full"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <header>
                <a class="block mb-6">
                  <figure
                    class="relative h-0 pb-9/16 overflow-hidden rounded-sm"
                  >
                    <img
                      class="absolute inset-0 w-full h-full object-cover transform hover:scale-105 transition duration-700 ease-out"
                      src="../images/lb.png"
                      width="352"
                      height="198"
                      alt="News 02"
                    />
                  </figure>
                </a>

                <h3 class="h4 mb-2">
                  <a
                    class="hover:text-gray-100 transition duration-150 ease-in-out"
                    >Laguna Beach Counseling (Coming Soon)</a
                  >
                </h3>
              </header>
              <p class="text-lg text-gray-300 grow">
                Laguna Beach Counseling is a LMFT group serving residents in
                Orange County California. Kathleen is a long time practitioner
                focused on a holistic approach to relationships and wellness.
              </p>
              <!-- <footer class="flex items-center mt-4">
                <a href="#0">
                  <img
                    class="rounded-full shrink-0 mr-4"
                    src="../images/news-author-02.jpg"
                    width="40"
                    height="40"
                    alt="Author 02"
                  />
                </a>
                <div class="font-medium">
                  <a
                    class="text-gray-200 hover:text-gray-100 transition duration-150 ease-in-out"
                    href="#0"
                    >Markus Barker</a
                  >
                  <span class="text-gray-700"> - </span>
                  <span class="text-gray-300">Jan 12, 2020</span>
                </div>
              </footer> -->
            </article>
          </div>
        </div>

        <!-- Pagination -->
        <!-- <nav
          class="flex justify-center pt-16"
          role="navigation"
          aria-label="Pagination Navigation"
        >
          <ul class="inline-flex flex-wrap font-medium text-sm -m-1">
            <li class="m-1">
              <span
                class="inline-flex h-10 min-w-10 justify-center items-center bg-gray-800 px-4 rounded-full text-gray-300"
                >Prev</span
              >
            </li>
            <li class="m-1">
              <a
                href="#0"
                class="inline-flex h-10 min-w-10 justify-center items-center bg-gray-800 px-2 rounded-full text-gray-300 hover:bg-green-600 transition-colors duration-150 ease-in-out"
                >1</a
              >
            </li>
            <li class="m-1">
              <a
                href="#0"
                class="inline-flex h-10 min-w-10 justify-center items-center bg-gray-800 px-2 rounded-full text-gray-300 hover:bg-green-600 transition-colors duration-150 ease-in-out"
                >2</a
              >
            </li>
            <li class="m-1">
              <a
                href="#0"
                class="inline-flex h-10 min-w-10 justify-center items-center bg-gray-800 px-2 rounded-full text-gray-300 hover:bg-green-600 transition-colors duration-150 ease-in-out"
                >3</a
              >
            </li>
            <li class="m-1">
              <span
                class="inline-flex h-10 min-w-10 justify-center items-center bg-gray-800 px-2 rounded-full text-gray-300"
                >...</span
              >
            </li>
            <li class="m-1">
              <a
                href="#0"
                class="inline-flex h-10 min-w-10 justify-center items-center bg-gray-800 px-2 rounded-full text-gray-300 hover:bg-green-600 transition-colors duration-150 ease-in-out"
                >12</a
              >
            </li>
            <li class="m-1">
              <a
                href="#0"
                class="inline-flex h-10 min-w-10 justify-center items-center bg-gray-800 px-4 rounded-full text-gray-300 hover:bg-green-600 transition-colors duration-150 ease-in-out"
                >Next</a
              >
            </li>
          </ul>
        </nav> -->
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "BlogList",
};
</script>
