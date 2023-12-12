<template>
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
        <div class="max-w-6xl mx-auto px-4 sm:px-6">
          <div class="pt-32 pb-12 md:pt-40 md:pb-20">
            <!-- Page header -->
            <div class="max-w-4xl mx-auto text-center pb-12 md:pb-20">
              <h1 class="h1">
                COMPREHENSIVE MENTAL HEALTH SUPPORT FOR SCHOOLS, STAFF, AND STUDENTS.
              </h1>
            </div>

            <!-- Form -->
            <div class="max-w-sm mx-auto">
              <!-- <form>
                <div class="flex flex-wrap -mx-3">
                  <div class="w-full px-3">
                    <button
                      class="btn px-0 text-white bg-red-600 hover:bg-red-700 w-full relative flex items-center"
                    >
                      <svg
                        class="w-4 h-4 fill-current text-white opacity-75 shrink-0 mx-4"
                        viewBox="0 0 16 16"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7.9 7v2.4H12c-.2 1-1.2 3-4 3-2.4 0-4.3-2-4.3-4.4 0-2.4 2-4.4 4.3-4.4 1.4 0 2.3.6 2.8 1.1l1.9-1.8C11.5 1.7 9.9 1 8 1 4.1 1 1 4.1 1 8s3.1 7 7 7c4 0 6.7-2.8 6.7-6.8 0-.5 0-.8-.1-1.2H7.9z"
                        />
                      </svg>
                      <span
                        class="h-6 flex items-center border-r border-white border-opacity-25 mr-4"
                        aria-hidden="true"
                      ></span>
                      <span class="flex-auto pl-16 pr-8 -ml-16"
                        >Sign up with Google</span
                      >
                    </button>
                  </div>
                </div>
              </form> -->
              <div class="flex items-center my-6">
                
                <div class="text-mint-500 max-w-4xl mx-auto text-center">TadHealth is on a mission to make mental health care accessible to everyone. Join today for full access to our education program in the fall of 22'. Fill out the form below to get started.

</div>
               
              </div>
              <form @submit.prevent="submit()">
                <div class="flex flex-wrap -mx-3 mb-4">
                  <div class="w-full px-3">
                    <label
                      class="block text-sm font-medium mb-1"
                      for="contact_person"
                      >Contact <span class="text-rose-500">*</span></label
                    >
                    <select
                      id="contact_person"
                      class="form-select py-2 w-full"
                      v-model="contact_person"
                    >
                      <option value="Counsel">Counselor</option>
                      <option value="Teacher">Teacher</option>
                      <option value="Administrator">Administrator</option>
                      <option value="Board Member">Board Member</option>
                      <option value="Head of School">Head of School</option>
                    </select>
                  </div>
                </div>
                <div class="flex flex-wrap -mx-3 mb-4">
                  <div class="w-full px-3">
                    <label
                      class="block text-sm font-medium mb-1"
                      for="institution_type"
                      >Institution Type <span class="text-rose-500">*</span></label
                    >
                    <select
                      id="institution_type"
                      class="form-select py-2 w-full"
                      v-model="institution_type"
                    >
                      <option value="Private High School">Private High School</option>
                      <option value="Public High School">Public High School</option>
                      <option value="Private College">Private College</option>
                      <option value="Public College">public College</option>
                      
                    </select>
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
                        v-model="email"
                      id="email"
                      type="email"
                      class="form-input w-full text-gray-300"
                      placeholder="you@yourcompany.com"
                      required
                    />
                  </div>
                </div>
                <div class="flex flex-wrap -mx-3 mb-4">
                  <div class="w-full px-3">
                    <label
                      class="block text-gray-300 text-sm font-medium mb-1"
                      for="phone_number"
                      >Phone Number <span class="text-red-600">*</span></label
                    >
                    <input
                        v-model="phone_number"
                      id="phone_number"
                      type="phone_number"
                      class="form-input w-full text-gray-300"
                      placeholder="555-555-5555"
                      required
                    />
                  </div>
                </div>
                
                
                <div class="flex flex-wrap -mx-3 mt-6">
                  <div class="w-full px-3">
                    <button
                      class="btn text-white bg-green-600 hover:bg-green-700 w-full"
                    >
                      Get TadHealth
                    </button>
                  </div>
                </div>
              </form>
             
            </div>
          </div>
        </div>
      </section>
    </main>

    <!-- Site footer -->
    <Footer />
  </div>
</template>

<script>
import { VueRecaptcha } from 'vue-recaptcha';
import Header from "./../partials/Header.vue";
import PageIllustration from "../partials/PageIllustration.vue";
import Footer from "./../partials/Footer.vue";
import { getTad } from "../api/users";

export default {
  name: "SignUp",
  components: {
    Header,
    PageIllustration,
    Footer,
    VueRecaptcha
  },
  data() {
    return {
      contact_person: null,
      institution_type: null,
      email: null,
      phone_number: null
    };
  },
  methods: {
    
    async submit() {
      try {
        if (
            !this.contact_person ||
            !this.institution_type ||
            !this.email ||
            !this.phone_number
        ) {
          this.$toast.warning(`Please fill out the entire form`, {
            position: "top-right",
          });
          return;
        }

        
        await getTad({
          contact_person: this.contact_person,
          institution_type: this.institution_type,
          email: this.email,
          phone_number: this.phone_number
        });
        this.$router.push('/')
        this.$toast.success(`We have received your information!`, {
          position: "top-right",
        });
      } catch (e) {
        this.$toast.error(`There was an error submitting your request!`, {
          position: "top-right",
        });
      }
    },
  }
};
</script>
