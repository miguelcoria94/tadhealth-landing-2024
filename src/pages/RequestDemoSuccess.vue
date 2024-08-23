<template>
  <main class="flex">

    <!-- Content -->
    <div class="w-full md:w-1/2">

      <div class="min-h-screen h-full flex flex-col justify-center">

        <div class="px-5 sm:px-6">
          <div class="w-full max-w-md mx-auto">

            <!-- Site branding -->
            <div class="mb-6">
              <!-- Logo -->
              <router-link class="inline-flex text-blue-600 transition duration-150 ease-in-out" to="/" aria-label="Cruip">
                <img src="../images/mintheart.png" alt="" class="h-8">
              </router-link>
            </div>

            <h1 class="h2 font-playfair-display text-slate-800 mb-12">Request your demo</h1>

            <!-- Calendly -->
            <div class="space-y-4">
              <Vue3Calendly url="https://calendly.com/tadhealth/tadhealth-introduction?primary_color=4ecdc4" />
            </div>

          </div>
        </div>

      </div>

    </div>

    <!-- Right side -->
    <div class="relative hidden md:block md:w-1/2 bg-green-500" aria-hidden="true">

      <!-- Bg image -->
      <div class="absolute inset-0" data-aos="fade">
        <img class="opacity-10 w-full h-full object-cover" src="../images/request-demo-bg.jpg" width="760" height="900" alt="Background" />
      </div>

      <!-- Quote -->
      <div class="min-h-screen h-full flex flex-col justify-center">
        <div class="px-5 sm:px-6">
          <div class="w-full max-w-lg mx-auto">
            <h2 class="h3 md:text-4xl font-playfair-display text-slate-100 mb-4">TadHealth</h2>
            <div class="space-y-3">
              <svg class="fill-mint-500" width="20" height="16" viewBox="0 0 20 16">
                <path d="M2.76 16c2.577 0 5.154-3.219 5.154-5.996 0-1.357-.613-2.272-1.748-2.272s-2.27.726-3.283 1.64C3.16 6.439 5.613 3.346 9.571.885L9.233 0C3.466 2.903 0 7.732 0 12.213 0 14.517.828 16 2.76 16Zm10.43 0c2.577 0 5.154-3.219 5.154-5.996 0-1.357-.614-2.272-1.749-2.272-1.135 0-2.27.726-3.282 1.64.276-2.934 2.73-6.027 6.687-8.488L19.663 0c-5.767 2.903-9.234 7.732-9.234 12.213 0 2.304.829 3.787 2.761 3.787Z" />
              </svg>
              <blockquote class="text-slate-300 italic">TadHealth has given us a way to substantially improve access points and based on my past experience with such a fragmented system pulling in extra help through a platform like this to mental health care professionals and programs is more important than ever.</blockquote>
            </div>
            <div class="flex items-center mt-4">
              <router-link to="#0">
                <img class="rounded-full shrink-0 mr-3" src="../images/allison.png" width="42" height="42" alt="Customer Avatar 04" />
              </router-link>
              <div class="font-medium">
                <span class="text-slate-200">— Alison-Norman Franks - "Lead Wellness Counselor BHUSD"</span>
                <!-- <span class="text-slate-600"> · </span>
                <span class="text-slate-300">CEO, Black Inc.</span> -->
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>

  </main>
</template>

<script>
import { VueRecaptcha } from 'vue-recaptcha';
import { Vue3Calendly } from 'vue3-calendly';
import { requestDemo } from "../api/users";

export default {
  name: 'RequestDemoSuccess',
  components: {
    VueRecaptcha,
    Vue3Calendly
  },
  data() {},
  methods: {}
}
</script>