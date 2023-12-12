<template>
  <section class="">
    <div class="py-12 md:py-20">
      <!-- Section header -->
      <div class="max-w-4xl mx-auto text-center pb-12 md:pb-16">
        <h2 class="h4 font-cabinet-grotesk">
          Mental health leaders choose TadHealth
        </h2>
      </div>

      <div
        class="clients-carousel swiper-container relative before:absolute before:inset-0 before:w-32 before:z-10 before:pointer-events-none before:bg-gradient-to-r before:from-gray-900 after:absolute after:inset-0 after:left-auto after:w-32 after:z-10 after:pointer-events-none after:bg-gradient-to-l after:from-gray-900"
      >
        <div class="swiper-wrapper !ease-linear select-none">
          <!-- Carousel items -->
          <div
            class="swiper-slide !h-28 !w-28 rounded-2xl flex items-center justify-center group"
          >
            <img
              class="opacity-40 group-hover:opacity-100 transform duration-500 ease-in-out"
              src="../images/save.png"
              alt="Client 01"
            />
          </div>
          <div
            class="swiper-slide !h-28 !w-28 rounded-2xl flex items-center justify-center group"
          >
            <img
              class="opacity-40 group-hover:opacity-100 transform duration-500 ease-in-out"
              src="../images/ttp.png"
              alt="Client 02"
            />
          </div>
          <div
            class="swiper-slide !h-28 !w-28 rounded-2xl flex items-center justify-center group"
          >
            <img
              class="opacity-40 group-hover:opacity-100 transform duration-500 ease-in-out"
              src="../images/bhhs.png"
              alt="Client 03"
            />
          </div>
          <div
            class="swiper-slide !h-28 !w-28 rounded-2xl flex items-center justify-center group"
          >
            <img
              class="opacity-40 group-hover:opacity-100 transform duration-500 ease-in-out"
              src="../images/mmgray.png"
              alt="Client 04"
            />
          </div>
          <div
            class="swiper-slide !h-28 !w-28 rounded-2xl flex items-center justify-center group"
          >
            <img
              class="opacity-40 group-hover:opacity-100 transform duration-500 ease-in-out"
              src="../images/bhu.png"
              alt="Client 05"
            />
          </div>
          <div
            class="swiper-slide !h-28 !w-28 rounded-2xl flex items-center justify-center group"
          >
            <img
              class="opacity-40 group-hover:opacity-100 transform duration-500 ease-in-out"
              src="../images/ca.png"
              alt="Client 06"
            />
          </div>
          <div
            class="swiper-slide !h-28 !w-28 rounded-2xl flex items-center justify-center group"
          >
            <img
              class="opacity-40 group-hover:opacity-100 transform duration-500 ease-in-out"
              src="../images/pp.png"
              alt="Client 07"
            />
          </div>
          <div
            class="swiper-slide !h-28 !w-28 rounded-2xl flex items-center justify-center group"
          >
            <img
              class="opacity-40 group-hover:opacity-100 transform duration-500 ease-in-out"
              src="../images/co.png"
              alt="Client 08"
            />
          </div>
          <div
            class="swiper-slide !h-28 !w-28 rounded-2xl flex items-center justify-center group"
          >
            <img
              class="opacity-40 group-hover:opacity-100 transform duration-500 ease-in-out"
              src="../images/lbc.png"
              alt="Client 09"
            />
          </div>
          <div
            class="swiper-slide !h-28 !w-28 rounded-2xl flex items-center justify-center group"
          >
            <img
              class="opacity-40 group-hover:opacity-100 transform duration-500 ease-in-out"
              src="../images/smusd.png"
              alt="Client 09"
            />
          </div>
          <!-- <div class="swiper-slide !h-28 !w-28 rounded-2xl flex items-center justify-center group">
            <img class="opacity-40 group-hover:opacity-100 transform duration-500 ease-in-out" src="../images/gwww.png" alt="Client 10" />
          </div> -->

          <div
            class="swiper-slide !h-28 !w-28 rounded-2xl flex items-center justify-center group"
          >
            <img
              class="opacity-40 group-hover:opacity-100 transform duration-500 ease-in-out"
              src="../images/rs.png"
              alt="Client 10"
            />
          </div>
          <div
            class="swiper-slide !h-28 !w-28 rounded-2xl flex items-center justify-center group"
          >
            <img
              class="opacity-40 group-hover:opacity-100 transform duration-500 ease-in-out"
              src="../images/nais.png"
              alt="Client 11"
            />
          </div>
        </div>
      </div>
      <div class="flex justify-center align-center items-center mt-14 flex-col max-w-4xl mx-auto text-center pb-12 md:pb-16 border border-mint-200 bg-mint-200 bg-opacity-25 p-8 shadow-sm">
        <img
          class="rounded-full mb-8"
          src="../images/headshot.png"
          width="60"
          height="60"
          alt="Features avatar"
        />
        <div>
          <blockquote class="text-gray-300 italic mb-3">
            "TadHealth has given us a way to substantially improve access points
            and based on my past experience with such a fragmented system
            pulling in extra help through a platform like this to mental health
            care professionals and programs is more important than ever.".
          </blockquote>
          <div class="text-gray-700 font-medium">
            <cite class="text-gray-300 not-italic">
              <b>— Alison-Norman Franks</b></cite
            >

            <a
              class="text-gray-300 transition duration-150 ease-in-out"
              href="#0"
              ><em> - "Lead Wellness Counselor BHUSD"</em></a
            >
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { onMounted } from "vue";

// Import Swiper
import Swiper, { Autoplay } from "swiper";
import "swiper/css";

Swiper.use([Autoplay]);

export default {
  name: "Clients",
  setup() {
    onMounted(() => {
      const carousel = new Swiper(".clients-carousel", {
        slidesPerView: "auto",
        spaceBetween: 26,
        centeredSlides: true,
        loop: true,
        speed: 6000,
        noSwiping: true,
        noSwipingClass: "swiper-slide",
        autoplay: {
          delay: 0,
          disableOnInteraction: true,
        },
      });
    });
  },
};
</script>
