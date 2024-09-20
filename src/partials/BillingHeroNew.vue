<template>
  <section class="relative">
    <div class="relative pt-12 md:pt-12">
      <!-- Illustration behind hero content -->
      <div class="absolute bottom-0 left-0 w-full h-1/3 bg-[#8ADFD9]"></div>
      

      <!-- Hero content -->
      <div class="relative pt-32 pb-12 md:pt-40 md:pb-20">
        <!-- Content -->
        <div class="max-w-3xl mx-auto text-center pb-12 md:pb-16">
          <!-- small span text in green 500 -->
          <h1 class="h2 mb-4" data-aos="fade-up">
            TadHealth Billing
          </h1>
          <p
            class="text-xl text-gray-300 mb-8"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            TadHealth (TH) Billing is an automated engine crafted specifically for the California Youth Behavioral Health Initiative (CYBHI). Designed from the ground up, our platform delivers unmatched efficiency, ease of use, and seamless integration tailored for school districts.
          </p>

          <img
            class="mx-auto md:max-w-none pb-4 pt-4"
            src="../images/analytics2.png"
            height="705"
            width="705"
            alt="Features"
          />
        </div>
        <!-- Image -->
        <!-- <img class="mx-auto" src="../images/hero-image-02.png" width="768" height="432" alt="Hero" data-aos="fade-up" data-aos-delay="400" /> -->
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "BillingHeroNew",
  data: function () {
    return {
      category: "1",
    };
  },
};
</script>
