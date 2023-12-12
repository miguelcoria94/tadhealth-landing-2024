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

            <span class="text-sm text-gray-300" v-if="step === 2"
              >Success!</span
            >

            <h6
              class="font-playfair-display text-slate-700 mb-4 text-xl font-bold"
              v-if="step === 1"
            >
              Let’s Get To Know You Better!
            </h6>
            <p class="text-xs text-gray-300 mb-4" v-if="step === 1">
              Please complete the form below so we can contact you with more
              information about how TadHealth can help grow your reach as a
              creator.
            </p>

            <h6
              class="font-playfair-display text-slate-700 mb-4 text-xl font-bold"
              v-if="step === 2"
            >
              Thank you for registering to TadHealth’s Network
            </h6>
            <p class="text-xs text-gray-300 mb-4" v-if="step === 2">
              Our team will get back to you shorty to setup your profile.
            </p>

            <!-- Form -->
            <form @submit.prevent="submit()">
              <div v-if="step === 1">
                <div class="space-y-4">
                  <div>
                    <label
                      class="block text-sm font-medium mb-1"
                      for="socialhandle"
                      >Social Media Handle
                      <span class="text-rose-500">*</span></label
                    >
                    <input
                      id="socialhandle"
                      class="form-input py-2 w-full"
                      type="text"
                      v-model="socialhandle"
                    />
                  </div>

                  <div>
                    <label
                      class="block text-sm font-medium mb-1"
                      for="audiencesize"
                      >Audience Size <span class="text-rose-500">*</span></label
                    >
                    <select
                      id="audiencesize"
                      class="form-select py-2 w-full"
                      v-model="audiencesize"
                    >
                      <option value="5k">&lt; 5k</option>
                      <option value="10k">&gt; 10k</option>
                      <option value="100k">&gt; 100k</option>
                      <option value="1million">&gt; 1 million</option>
                      <option value="5million">&gt; 5 million</option>
                    </select>
                  </div>
                  <div>
                    <label
                      class="block text-sm font-medium mb-3"
                      for="platforms"
                      >Platforms (select all that apply)<span
                        class="text-rose-500"
                        >*</span
                      ></label
                    >
                    <input
                      type="checkbox"
                      value="instagram"
                      v-model="checkedplatforms"
                    />
                    Instagram <br />
                    <input
                      type="checkbox"
                      value="tiktok"
                      v-model="checkedplatforms"
                    />
                    Tik Tok <br />
                    <input
                      type="checkbox"
                      value="twitter"
                      v-model="checkedplatforms"
                    />
                    Twitter <br />
                    <input
                      type="checkbox"
                      value="facebook"
                      v-model="checkedplatforms"
                    />
                    Facebook <br />
                    <input
                      type="checkbox"
                      value="twitch"
                      v-model="checkedplatforms"
                    />
                    Twitch <br />
                  </div>
                  <div>
                    <label class="block text-sm font-medium mb-1" for="number"
                      >Business Phone Number
                      <span class="text-rose-500">*</span></label
                    >
                    <input
                      id="number"
                      class="form-input py-2 w-full"
                      type="text"
                      v-model="phonenumber"
                    />
                  </div>
                </div>
                <div class="mt-6">
                  <button
                    class="btn-sm w-full text-sm text-white bg-green-500 hover:bg-green-400 group"
                    type="submit"
                  >
                    Submit Application
                    <span
                      class="tracking-normal text-white group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1"
                      >-&gt;</span
                    >
                  </button>
                </div>
              </div>

              <!-- step 2 form -->

              <div v-if="step === 2">
                <div class="mt-6">
                  <a
                    class="btn-sm w-full text-sm text-white bg-green-500 hover:bg-green-400 group"
                    href="/"
                  >
                    Back to Homepage
                    <span
                      class="tracking-normal text-white group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1"
                    ></span>
                  </a>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
<script>
export default {
  name: "RequestDemo",
  data() {
    return {
      step: 1,
      registration: {
        number: null,
      },
      socialhandle: null,
      audiencesize: null,
      checkedplatforms: [],
      phonenumber: null,
    };
  },
  methods: {
    prev() {
      this.step--;
    },
    next() {
      this.step++;
    },
    async submit() {
      try {
        if (
          !this.socialhandle ||
          !this.audiencesize ||
          !this.checkedplatforms ||
          !this.phonenumber
        ) {
          this.$toast.warning(`Please fill out the entire form.`, {
            position: "top-right",
          });
          return;
          // function to the backend goes here
        }
      } catch (e) {
        this.$toast.error(`There was an error submitting your message!`, {
          position: "top-right",
        });
      }
    },
  },
};
</script>
