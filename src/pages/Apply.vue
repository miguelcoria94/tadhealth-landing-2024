<template>
  <main class="flex">
    <!-- Left side -->
    <div
      class="relative hidden md:block md:w-1/2 bg-green-500"
      aria-hidden="true"
    >
      <!-- Bg image -->
      <div class="absolute inset-0" data-aos="fade">
        <img
          class="opacity-10 w-full h-full object-cover"
          src="../images/request-demo-bg.jpg"
          width="760"
          height="900"
          alt="Background"
        />
      </div>

      <!-- Quote -->
      <div class="min-h-screen h-full flex flex-col justify-center">
        <div class="px-5 sm:px-6">
          <div class="w-full max-w-lg mx-auto">
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
              <blockquote class="text-slate-300 italic">
                TadHealth’s product has everything to do with the provision of
                life saving services and multitudes of resources for the mental
                well being of others.
              </blockquote>
            </div>
            <div class="flex items-center mt-4">
              <router-link to="#0">
                <img
                  class="rounded-full shrink-0 mr-3"
                  src="../images/customer-avatar-01.png"
                  width="32"
                  height="32"
                  alt="Customer Avatar 04"
                />
              </router-link>
              <div class="font-medium">
                <span class="text-slate-200">Dr. Kathy Platoni</span>
                <!-- <span class="text-slate-600"> · </span>
                <span class="text-slate-300">CEO, Black Inc.</span> -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Content -->
    <div class="w-full md:w-1/2">
      <div class="min-h-screen h-full flex flex-col justify-center">
        <div class="px-5 sm:px-6">
          <div class="w-full max-w-md mx-auto">
            <!-- Site branding -->
            <div class="mb-6">
              <router-link
                class="inline-flex text-blue-600 transition duration-150 ease-in-out"
                to="/"
                aria-label="Cruip"
              >
                <img src="../images/tad-logo.png" alt="" class="h-8" />
              </router-link>
            </div>

            <h6
              class="font-playfair-display text-slate-700 mb-12 text-xl font-bold"
            >
              Apply To the TadHealth Network
            </h6>

            <!-- Form -->
            <form @submit.prevent="submit()">
              <div class="space-y-4">
                <div>
                  <label class="block text-sm font-medium mb-1" for="name"
                    >Full Name <span class="text-rose-500">*</span></label
                  >
                  <input
                    id="name"
                    class="form-input py-2 w-full"
                    type="text"
                    required
                    v-model="name"
                  />
                </div>

                <div>
                  <label class="block text-sm font-medium mb-1" for="email"
                    >Email <span class="text-rose-500">*</span></label
                  >
                  <input
                    id="email"
                    class="form-input py-2 w-full"
                    type="email"
                    required
                    v-model="email"
                  />
                </div>

                <div>
                  <label class="block text-sm font-medium mb-1" for="number"
                    >Password <span class="text-rose-500">*</span></label
                  >
                  <input
                    id="number"
                    class="form-input py-2 w-full"
                    type="password"
                    required
                    v-model="password"
                  />
                </div>
              </div>
              <div class="flex flex-wrap -mx-3 mb-4 mt-5">
                <div class="w-full px-3">
                  <VueRecaptcha
                    :sitekey="siteKey"
                    :load-recaptcha-script="true"
                    @verify="handleSuccess"
                    @error="handleError"
                  ></VueRecaptcha>
                </div>
              </div>
              <div class="mt-5">
                <label class="flex items-start">
                  <input
                    type="checkbox"
                    class="form-checkbox mt-0.5"
                    v-model="terms"
                  />
                  <span class="text-sm text-gray-300 ml-3"
                    >I agree to The TadHealth
                    <a href="/terms" target="_blank" class="text-green-400 hover:text-green-300">Terms and Conditions</a>, I
                    agree to The
                    <a href="/privacy" target="_blank" class="text-green-400 hover:text-green-300"
                      >TadHealth Privacy Policy</a
                    >
                  </span>
                </label>
              </div>
              <div class="mt-6">
                <button
                  class="btn-sm w-full text-sm text-white bg-green-500 hover:bg-green-400 group"
                >
                  Verify Email
                  <span
                    class="tracking-normal text-white group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1"
                    >-&gt;</span
                  >
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import { VueRecaptcha } from "vue-recaptcha";
import { useRoute } from "vue-router";

export default {
  name: "RequestDemo",
  components: {
    VueRecaptcha,
  },
  mounted() {
    const route = useRoute();
    this.user = route.query.user;
  },
  data() {
    return {
      user: null,
      siteKey: import.meta.env.VITE_RECAPTCHA_SITE_KEY,
      verified: false,
      name: null,
      email: null,
      password: null,
      terms: false,
    };
  },
  methods: {
    handleSuccess() {
      this.verified = true;
    },

    handleError() {
      this.$toast.error(`We couldn't prove you are human!`, {
        position: "top-right",
      });
    },
    async submit() {
      try {
        if (!this.name || !this.user || !this.email || !this.password) {
          this.$toast.warning(`Please fill out the entire form.`, {
            position: "top-right",
          });
          return;
        }

        if (!this.terms) {
          this.$toast.warning(`Please accept terms and conditions`, {
            position: "top-right",
          });
          return;
        }

        if (this.verified === false) {
          this.$toast.error(`Please verify you are human!`, {
            position: "top-right",
          });
          return;
        }

        // fuction to request verification goes here

        this.$toast.success(`Please check your email!`, {
          position: "top-right",
        });
        this.$router.push("/verification");
      } catch (e) {
        this.$toast.error(`There was an error submitting your message!`, {
          position: "top-right",
        });
      }
    },
  },
};
</script>
