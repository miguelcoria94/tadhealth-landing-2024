<template>
  <section class="bg-green-500">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 mt-20">
      <div class="py-12 md:py-20">
        <!-- Section header -->
        <div class="max-w-3xl mx-auto text-center pb-12 md:pb-20">
          <h2 class="h2 font-cabinet-grotesk text-gray-900">
            Trending Case Studies
          </h2>
        </div>
        <div class="carousel swiper-container max-w-sm mx-auto sm:max-w-none">
          <div class="swiper-wrapper">
            <!-- Carousel items -->
            <div class="swiper-slide h-auto flex flex-col">
              <!-- Image -->
              <img
                class="w-full aspect-[7/4] object-cover"
                src="../images/bhhs-case-study.png"
                width="259"
                height="148"
                alt="Carousel 01"
              />
              <!-- White box -->
              <div class="grow bg-white px-4 pb-6">
                <!-- Title -->
                <a
                  class="inline-block font-cabinet-grotesk font-bold text-xl decoration-blue-500 decoration-2 underline-offset-2 hover:underline"
                  href="#0"
                  >Beverly Hills Unified School District</a
                >
                <div class="text-sm text-gray-300 italic">Case Study</div>
              </div>
            </div>
            <div class="swiper-slide h-auto flex flex-col">
              <!-- Image -->
              <img
                class="w-full aspect-[7/4] object-cover"
                src="../images/laguna.png"
                width="259"
                height="148"
                alt="Carousel 02"
              />
              <!-- White box -->
              <div class="grow bg-white px-4 pb-6">
                <!-- Title -->
                <a
                  class="inline-block font-cabinet-grotesk font-bold text-xl decoration-blue-500 decoration-2 underline-offset-2 hover:underline"
                  href="#0"
                  >Laguna Beach Counseling</a
                >
                <div class="text-sm text-gray-300 italic">Coming Soon</div>
              </div>
            </div>
            <div class="swiper-slide h-auto flex flex-col">
              <!-- Image -->
              <img
                class="w-full aspect-[7/4] object-cover"
                src="../images/greenwood.png"
                width="259"
                height="148"
                alt="Carousel 03"
              />
              <!-- White box -->
              <div class="grow bg-white px-4 pb-6">
                <!-- Title -->
                <a
                  class="inline-block font-cabinet-grotesk font-bold text-xl decoration-blue-500 decoration-2 underline-offset-2 hover:underline"
                  href="#0"
                  >Greenwood College
                </a>
                <div class="text-sm text-gray-300 italic">Coming Soon</div>
              </div>
            </div>

            <div class="swiper-slide h-auto flex flex-col">
              <!-- Image -->
              <img
                class="w-full aspect-[7/4] object-cover"
                src="../images/helmet.png"
                width="259"
                height="148"
                alt="Carousel 08"
              />
              <!-- White box -->
              <div class="grow bg-white px-4 pb-6">
                <!-- Title -->
                <a
                  class="inline-block font-cabinet-grotesk font-bold text-xl decoration-blue-500 decoration-2 underline-offset-2 hover:underline"
                  href="#0"
                  >Hemet Unified School District
                </a>
                <div class="text-sm text-gray-300 italic">Coming Soon</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
// Import Swiper
import Swiper, { Navigation } from "swiper";
import "swiper/css";
Swiper.use([Navigation]);

export default {
  name: "Carousel",
  mounted() {
    // eslint-disable-next-line no-unused-vars
    const carousel = new Swiper(".carousel", {
      breakpoints: {
        320: {
          slidesPerView: 1,
        },
        640: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 4,
        },
      },
      grabCursor: true,
      loop: false,
      centeredSlides: false,
      initialSlide: 0,
      spaceBetween: 24,
      watchSlidesProgress: true,
      navigation: {
        nextEl: ".carousel-next",
        prevEl: ".carousel-prev",
      },
    });
  },
};
</script>
