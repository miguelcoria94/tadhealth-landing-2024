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

            <!-- Form -->
            <form @submit.prevent="submit()"> 
              <div class="space-y-4">
                <div class="space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
                  <div class="sm:w-1/2">
                    <label class="block text-sm font-medium mb-1" for="first">First Name <span class="text-rose-500">*</span></label>
                    <input v-model="firstName" id="first" class="form-input py-2 w-full" type="text" required />
                  </div>
                  <div class="sm:w-1/2">
                    <label class="block text-sm font-medium mb-1" for="last">Last Name <span class="text-rose-500">*</span></label>
                    <input v-model="lastName" id="last" class="form-input py-2 w-full" type="text" required />
                  </div>
                </div>
                <div>
                  <label class="block text-sm font-medium mb-1" for="email">Email <span class="text-rose-500">*</span></label>
                  <input v-model="email" id="email" class="form-input py-2 w-full" type="email" required />
                </div>
                <div>
                  <label class="block text-sm font-medium mb-1" for="org">Organization Name <span class="text-rose-500">*</span></label>
                  <input v-model="organizationName" id="org" class="form-input py-2 w-full" type="text" required />
                </div>
                <!-- div>
                  <label class="block text-sm font-medium mb-1" for="orgurl">Organization URL <span class="text-rose-500">*</span></label>
                  <input v-model="organizationUrl" id="orgurl" class="form-input py-2 w-full" type="text" required />
                </div -->
                
                <div>
                  <label class="block text-sm font-medium mb-1" for="number">Phone Number <span class="text-rose-500">*</span></label>
                  <input v-model="phoneNumber" id="number" class="form-input py-2 w-full" type="text" required />
                </div>
                <div>
                  <label class="block text-sm font-medium mb-1" for="survey">How did you hear about us? <span class="text-rose-500">*</span></label>
                  <select v-model="ref" id="survey" class="form-select py-2 w-full" required>
                    <option value="Social Media">Social Media</option>
                    <option value="Google/Search Engine">Google/Search Engine</option>
                    <option value="Webinar">Webinar</option>
                    <option value="Recommended by a Peer">Recommended by a Peer</option>
                    <option value="Direct Mail">Direct Mail</option>
                    <option value="Podcast">Podcast</option>
                    <option value="Other">Other</option>
                  </select>
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
              <div class="mt-6">
                <button class="btn-sm w-full text-sm text-white bg-green-500 hover:bg-green-400 group">
                  Submit <span class="tracking-normal text-white group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">-&gt;</span>
                </button>
              </div>
              <!-- <div class="mt-5">
                <label class="flex items-start">
                  <input type="checkbox" class="form-checkbox mt-0.5" checked />
                  <span class="text-sm text-gray-300 ml-3">By filling out this form, I consent to the collection and use of my personal data.</span>
                </label>
              </div> -->
            </form>

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
import { requestDemo } from "../api/users";

export default {
  name: 'RequestDemo',
  components: {
    VueRecaptcha
  },
  data() {
    return {
      firstName: null,
      lastName: null,
      email: null,
      organizationName: null,
      organizationUrl: null,
      phoneNumber: null,
      ref: null,
      siteKey: import.meta.env.VITE_RECAPTCHA_SITE_KEY_DEV,
      verified: false
    };
  },
  methods: {
    handleSuccess() {
      this.verified = true
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
          !this.organizationName ||
          // !this.organizationUrl ||
          !this.phoneNumber ||
          !this.ref
        ) {
          this.$toast.warning(`Please fill out the entire form`, {
            position: "top-right",
          });
          return;
        }

        if ( this.verified === false){
          this.$toast.error(`Please verify you are human!`, {
            position: "top-right",
          });
          return
        }
        await requestDemo({
          first_name: this.firstName,
          last_name: this.lastName,
          email: this.email,
          organization_name: this.organizationName,
          // organization_url: this.organizationUrl,
          phone_number: this.phoneNumber,
          hear_about_us: this.ref,
        });
        this.$router.push({ name: "Home" });
        this.$toast.success(`Your message has been sent!`, {
          position: "top-right",
        });

      } catch (e) {
        this.$toast.error(`There was an error submitting your message!`, {
          position: "top-right",
        });
      }
    },
  }
}
</script>