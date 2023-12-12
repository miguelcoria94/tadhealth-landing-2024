<template>
  <section>
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <div class="py-12 md:py-20">
        <!-- Section header -->
        <div class="pb-12 md:pb-20">
          <h2 class="h2 font-cabinet-grotesk text-center md:text-left">
            From our blog
          </h2>
        </div>

        <!-- Posts -->
        <div
          class="max-w-sm mx-auto md:max-w-none grid gap-12 md:grid-cols-3 md:gap-x-6 md:gap-y-8 items-start"
        >
          <!-- 1st Post -->
          <article class="h-full flex flex-col space-y-5" data-aos="fade-down">
            <!-- Image -->
            <a class="block group overflow-hidden" href="#0">
              <img
                class="w-full aspect-[7/4] object-cover group-hover:scale-105 transition duration-700 ease-out"
                src="../images/blog-01.jpg"
                width="347"
                height="198"
                alt="Post 01"
              />
            </a>
            <!-- Content -->
            <div class="grow flex flex-col">
              <header>
                <h3 class="h4 font-cabinet-grotesk font-bold mb-2">
                  <a
                    class="inline-block decoration-blue-500 decoration-2 underline-offset-2 hover:underline"
                    href="#0"
                    >Concept Art & Illustrations by Stef Euphoria</a
                  >
                </h3>
              </header>
              <p class="text-gray-300 grow">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore.
              </p>
              <footer class="flex items-center text-sm mt-4">
                <a href="#0">
                  <img
                    class="rounded-full shrink-0 mr-3"
                    src="../images/blog-author-01.jpg"
                    width="32"
                    height="32"
                    alt="Author 01"
                  />
                </a>
                <div>
                  <span class="text-gray-300">By</span>
                  <a
                    class="font-medium decoration-blue-500 decoration-2 underline-offset-2 hover:underline"
                    href="#0"
                    >Knut Mayer</a
                  >
                </div>
              </footer>
            </div>
          </article>

          <!-- 2nd Post -->
          <article
            class="h-full flex flex-col space-y-5"
            data-aos="fade-down"
            data-aos-delay="100"
          >
            <!-- Image -->
            <a class="block group overflow-hidden" href="#0">
              <img
                class="w-full aspect-[7/4] object-cover group-hover:scale-105 transition duration-700 ease-out"
                src="../images/blog-02.jpg"
                width="347"
                height="198"
                alt="Post 02"
              />
            </a>
            <!-- Content -->
            <div class="grow flex flex-col">
              <header>
                <h3 class="h4 font-cabinet-grotesk font-bold mb-2">
                  <a
                    class="inline-block decoration-blue-500 decoration-2 underline-offset-2 hover:underline"
                    href="#0"
                    >Patrick Chen's Branding by Thought & Found Studio</a
                  >
                </h3>
              </header>
              <p class="text-gray-300 grow">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore.
              </p>
              <footer class="flex items-center text-sm mt-4">
                <a href="#0">
                  <img
                    class="rounded-full shrink-0 mr-3"
                    src="../images/blog-author-02.jpg"
                    width="32"
                    height="32"
                    alt="Author 02"
                  />
                </a>
                <div>
                  <span class="text-gray-300">By</span>
                  <a
                    class="font-medium decoration-blue-500 decoration-2 underline-offset-2 hover:underline"
                    href="#0"
                    >Samuel Regan</a
                  >
                </div>
              </footer>
            </div>
          </article>

          <!-- 3rd Post -->
          <article
            class="h-full flex flex-col space-y-5"
            data-aos="fade-down"
            data-aos-delay="200"
          >
            <!-- Image -->
            <a class="block group overflow-hidden" href="#0">
              <img
                class="w-full aspect-[7/4] object-cover group-hover:scale-105 transition duration-700 ease-out"
                src="../images/blog-03.jpg"
                width="347"
                height="198"
                alt="Post 03"
              />
            </a>
            <!-- Content -->
            <div class="grow flex flex-col">
              <header>
                <h3 class="h4 font-cabinet-grotesk font-bold mb-2">
                  <a
                    class="inline-block decoration-blue-500 decoration-2 underline-offset-2 hover:underline"
                    href="#0"
                    >Soma Brewing Branding & Packaging by Quim Martin</a
                  >
                </h3>
              </header>
              <p class="text-gray-300 grow">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore.
              </p>
              <footer class="flex items-center text-sm mt-4">
                <a href="#0">
                  <img
                    class="rounded-full shrink-0 mr-3"
                    src="../images/blog-author-03.jpg"
                    width="32"
                    height="32"
                    alt="Author 03"
                  />
                </a>
                <div>
                  <span class="text-gray-300">By</span>
                  <a
                    class="font-medium decoration-blue-500 decoration-2 underline-offset-2 hover:underline"
                    href="#0"
                    >Fabian Centero</a
                  >
                </div>
              </footer>
            </div>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Blog",
};
</script>
