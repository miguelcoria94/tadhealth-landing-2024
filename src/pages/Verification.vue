<template>
  <main class="flex">
    <!-- Content -->
    <div class="w-full">
      <div class="min-h-screen h-full flex flex-col justify-center">
        <div class="px-5 sm:px-6">
          <div class="w-full max-w-md mx-auto bg-white p-8 shadow-lg round-md">
            <!-- Site branding -->
            <div class="mb-6 flex justify-center">
              <!-- Logo -->
              <router-link
                class="inline-flex text-blue-600 transition duration-150 ease-in-out"
                to="/"
                aria-label="Cruip"
              >
                <img src="../images/tad-logo.png" alt="" class="h-7" />
              </router-link>
            </div>

            <p
              class="font-playfair-display text-slate-700 mb-4 text-center text-xl font-bold"
            >
              Enter Email Verification Code
            </p>
            <p class="text-xs text-gray-300 text-center mb-4">
              We want to make sure it’s really you. In order to further verify
              your identity, enter the verification code that was sent to your
              email.
            </p>

            <!-- Form -->
            <form @submit.prevent="submit()">
              <div class="space-y-4">
                <div>
                  <label class="block text-sm font-medium mb-1" for="code"
                    >Enter Code <span class="text-rose-500">*</span></label
                  >
                  <input
                    id="code"
                    class="form-input py-2 w-full"
                    type="text"
                    v-model="verificationcode"
                  />
                </div>
              </div>
              <div class="mt-6">
                <button
                  class="btn-sm w-full text-sm text-white bg-green-500 hover:bg-green-400 group"
                >
                  Enter Code
                  <span
                    class="tracking-normal text-white group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1"
                    >-&gt;</span
                  >
                </button>
              </div>
              <div class="mt-6 mb-6">
                <button
                  class="btn-sm w-full text-sm border-green-500 hover:border-green-300 hover:text-green-300 group text-green-500"
                >
                  Request New Code
                  <span
                    class="tracking-normal text-white group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1"
                    >-&gt;</span
                  >
                </button>
              </div>
              <a
                href="/creator-application"
                class="btn-sm border-green-500 mr-1"
                >Creator</a
              >
              <a
                href="/professional-application"
                class="btn-sm border-green-500 mr-1"
                >Professional</a
              >
              <a href="/private-application" class="btn-sm border-green-500"
                >Private Practice</a
              >
              <!-- <div class="mt-8">
                <label class="flex items-start">
                  <input type="checkbox" class="form-checkbox mt-0.5" checked />
                  <span class="text-sm text-gray-300 ml-3"
                    >Didn't request an email?</span
                  >
                </label>
              </div> -->
            </form>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: "Verification",
  components: {},
  data() {
    return {
      verificationcode: null,
    };
  },
  methods: {
    async submit() {
      try {
        if (!this.verificationcode) {
          this.$toast.error(
            `Please check your email for a verification code.`,
            {
              position: "top-right",
            }
          );
          return;
        }
        //  function to send to backend goes here
        await verificationCode({});
      } catch (e) {
        this.$toast.error(`There was an error submitting your request!`, {
          position: "top-right",
        });
      }
    },
  },
};
</script>
