<template>
  <section class="relative">
    <!-- Dark background -->
    <div
      class="absolute bg-slate-200 inset-0 pointer-events-none -z-10"
      aria-hidden="true"
    ></div>

    <div class="relative max-w-6xl mx-auto px-4 sm:px-6">
      <div class="pt-32 pb-12 md:pt-40 md:pb-20">
        <!-- Section header -->
        <div class="max-w-3xl mx-auto text-center">
          <h1 class="h1 font-playfair-display mb-4">
            Stay ahead of mental health trends
          </h1>
          <p class="text-xl text-gray-300 mb-8">
            Learn more below about the latest trends, insights, and education
            about mental health from experts in the space.
          </p>
          <!-- Subscribe form -->
          <form @submit.prevent="submit">
            <div
              class="flex flex-col sm:flex-row justify-center max-w-xs mx-auto sm:max-w-md"
            >
              <input
                v-model="email"
                type="email"
                class="form-input w-full bg-slate-100 border border-slate-200 focus:border-slate-300 placeholder-slate-500 mb-2 sm:mb-0 sm:mr-2"
                placeholder="Your email"
                aria-label="Your email…"
              />
              <button class="btn text-white bg-green-500 hover:bg-green-400">
                Subscribe
              </button>
            </div>
            <p v-if="success" class="text-xs text-slate-500 mt-3 italic">
              Thanks for subscribing!
            </p>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { userSubscribe } from "../api/users";
export default {
  name: "BlogHero",
  data() {
    return {
      email: null,
      success: false,
    };
  },
  methods: {
    async submit() {
      try {
        if (!this.email) {
          this.$toast.error(`Please enter your email to subscribe!`, {
            position: "top-left",
          });
          return;
        } else {
          await userSubscribe({
            type: "email",
            email: this.email,
          });
          this.email = "";
          this.success = true;
          this.$toast.success(`You have subscribed to our updates!`, {
            position: "top-right",
          });
          return;
        }
      } catch (e) {
        this.$toast.error(`There was an error submitting your request!`, {
          position: "top-left",
        });
      }
    },
  },
};
</script>
