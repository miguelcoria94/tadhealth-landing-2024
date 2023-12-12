<template>
  <Head>
    <title>TadHealth | Contact</title>
  </Head>
  <div class="flex flex-col min-h-screen overflow-hidden">
    <!-- Site header -->
    <Header />

    <!-- Page content -->
    <main class="grow">
      <!-- Page illustration -->
      <div
        class="relative max-w-6xl mx-auto h-0 pointer-events-none"
        aria-hidden="true"
      >
        <PageIllustration />
      </div>

      <section class="relative">
        <div class="max-w-6xl mx-auto px-4 sm:px-6 relative">
          <div class="pt-32 pb-12 md:pt-40 md:pb-20">
            <!-- Page header -->
            <div class="max-w-3xl mx-auto text-center pb-12 md:pb-16">
              <h1 class="h1 mb-4" data-aos="fade-up">How can we help you?</h1>
              <p
                class="text-xl text-gray-300"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                We have custom access to power your organization.
              </p>
            </div>

            <!-- Contact form -->
            <form class="max-w-xl mx-auto" @submit.prevent="submit()">
              <div class="flex flex-wrap -mx-3 mb-4">
                <div class="w-full md:w-1/2 px-3 mb-4 md:mb-0">
                  <label
                    class="block text-gray-300 text-sm font-medium mb-1"
                    for="first-name"
                    >First Name <span class="text-red-600">*</span></label
                  >
                  <input
                    id="first-name"
                    type="text"
                    class="form-input w-full text-gray-300"
                    placeholder="Enter your first name"
                    v-model="firstName"
                    required
                  />
                  <!-- <p class="text-red-500 text-sm mt-2">
                    This field is required
                  </p> -->
                </div>
                <div class="w-full md:w-1/2 px-3">
                  <label
                    class="block text-gray-300 text-sm font-medium mb-1"
                    for="last-name"
                    >Last Name <span class="text-red-600">*</span></label
                  >
                  <input
                    id="last-name"
                    type="text"
                    class="form-input w-full text-gray-300"
                    placeholder="Enter your last name"
                    required
                    v-model="lastName"
                  />
                </div>
              </div>
              <div class="flex flex-wrap -mx-3 mb-4">
                <div class="w-full px-3">
                  <label
                    class="block text-gray-300 text-sm font-medium mb-1"
                    for="email"
                    >Email <span class="text-red-600">*</span></label
                  >
                  <input
                    id="email"
                    type="email"
                    class="form-input w-full text-gray-300"
                    placeholder="Enter your email address"
                    required
                    v-model="email"
                  />
                </div>
              </div>
              <div class="flex flex-wrap -mx-3 mb-4">
                <div class="w-full px-3">
                  <label
                    class="block text-gray-300 text-sm font-medium mb-1"
                    for="subject"
                    >Subject <span class="text-red-600">*</span></label
                  >
                  <input
                    id="subject"
                    type="text"
                    class="form-input w-full text-gray-300"
                    placeholder="How can we help you?"
                    required
                    v-model="subject"
                  />
                </div>
              </div>
              <div class="flex flex-wrap -mx-3 mb-4">
                <div class="w-full px-3">
                  <label
                    class="block text-gray-300 text-sm font-medium mb-1"
                    for="message"
                    >Message</label
                  >
                  <textarea
                    id="message"
                    rows="4"
                    class="form-textarea w-full text-gray-300"
                    placeholder="Write your message"
                    v-model="message"
                  ></textarea>
                </div>
              </div>
              <div class="flex flex-wrap -mx-3 mb-4">
                <div class="w-full px-3">
                  <VueRecaptcha
                    :sitekey="siteKey"
                    :load-recaptcha-script="true"
                    @verify="handleSuccess"
                    @error="handleError"
                  ></VueRecaptcha>
                </div>
              </div>
              <div class="flex flex-wrap -mx-3 mt-6">
                <div class="w-full px-3">
                  <button
                    class="btn text-white bg-green-500 hover:bg-green-400 w-full"
                  >
                    Send
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>

      <!-- Bottom CTA -->
      <CtaContact />
    </main>

    <!-- Site footer -->
    <Footer />
  </div>
</template>

<script>
import { Head } from "@vueuse/head";
import Header from "./../partials/Header.vue";
import PageIllustration from "../partials/PageIllustration.vue";
import CtaContact from "./../partials/CtaContact.vue";
import Footer from "./../partials/Footer.vue";
import { contactUs } from "../api/users";
import { VueRecaptcha } from "vue-recaptcha";

export default {
  name: "Contact",
  components: {
    Header,
    PageIllustration,
    CtaContact,
    Footer,
    VueRecaptcha,
    Head,
  },
  data() {
    return {
      firstName: null,
      lastName: null,
      email: null,
      subject: null,
      message: null,
      siteKey: import.meta.env.VITE_RECAPTCHA_SITE_KEY,
      verified: false,
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
        if (
          !this.firstName ||
          !this.lastName ||
          !this.email ||
          !this.subject ||
          !this.message
        ) {
          this.$toast.warning(`Please fill out the entire form`, {
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
        await contactUs({
          first_name: this.firstName,
          last_name: this.lastName,
          email: this.email,
          subject: this.subject,
          message: this.message,
        });
        this.$toast.success(`We have received your message!`, {
          position: "top-right",
        });
        this.$router.push("/");
      } catch (e) {
        this.$toast.error(`There was an error submitting your message!`, {
          position: "top-right",
        });
      }
    },
  },
};
</script>
