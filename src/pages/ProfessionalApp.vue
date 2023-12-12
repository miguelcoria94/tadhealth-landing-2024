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

            <span class="text-sm text-gray-300" v-if="step === 'page1'"
              >Page 1 of 4</span
            >
            <span class="text-sm text-gray-300" v-if="step === 'page2'"
              >Page 2 of 4</span
            >
            <span class="text-sm text-gray-300" v-if="step === 'page3a'"
              >Page 3 of 4</span
            >

            <span class="text-sm text-gray-300" v-if="step === 'page3b'"
              >Page 3 of 4</span
            >
            <span class="text-sm text-gray-300" v-if="step === 'page4'"
              >Page 4 of 4</span
            >

            <h6
              class="font-playfair-display text-slate-700 mb-4 text-xl font-bold"
              v-if="step === 'page1'"
            >
              Let's Get to know you better!
            </h6>
            <p class="text-xs text-gray-300 mb-4" v-if="step === 'page1'">
              Please complete the form below so we can contact you with more
              information about how TadHealth can help grow your practice.
            </p>

            <h6
              class="font-playfair-display text-slate-700 mb-4 text-xl font-bold"
              v-if="step === 'page2'"
            >
              Licensing Information
            </h6>
            <p class="text-xs text-gray-300 mb-4" v-if="step === 'page2'">
              Which best describes you?
            </p>

            <h6
              class="font-playfair-display text-slate-700 mb-4 text-xl font-bold"
              v-if="step === 'page3b'"
            >
              Pre-Licensed/Under Supervision
            </h6>

            <h6
              class="font-playfair-display text-slate-700 mb-4 text-xl font-bold"
              v-if="step === 'page3a'"
            >
              Licensing Information
            </h6>
            <!-- <p class="text-xs text-gray-300 mb-4" v-if="step === 3">
              Which best describes you?
            </p> -->

            <h6
              class="font-playfair-display text-slate-700 mb-4 text-xl font-bold"
              v-if="step === 'page4'"
            >
              Thank you for registering to TadHealth’s Network
            </h6>
            <p class="text-xs text-gray-300 mb-4" v-if="step === 'page4'">
              Our team will get back to you shorty to setup your profile.
            </p>

            <!-- Form -->
            <form @submit.prevent="submit()">
              <div v-if="step === 'page1'">
                <div class="space-y-4">
                  <div>
                    <label
                      class="block text-sm font-medium mb-1"
                      for="clientbasesize"
                      >Client Base Size
                      <span class="text-rose-500">*</span></label
                    >
                    <select
                      id="clientbasesize"
                      class="form-select py-2 w-full"
                      required
                      v-model="clientbasesize"
                    >
                      <option>1-10</option>
                      <option>10-50</option>
                      <option>100+</option>
                    </select>
                  </div>
                  <div class="space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
                    <div class="sm:w-2/3">
                      <label
                        class="block text-sm font-medium mb-1"
                        for="address"
                        >Address</label
                      >
                      <input
                        id="address"
                        class="form-input py-2 w-full"
                        type="text"
                        required
                        v-model="address"
                      />
                    </div>
                    <div class="sm:w-1/3">
                      <label class="block text-sm font-medium mb-1" for="zip"
                        >Zip Code</label
                      >
                      <input
                        id="zip"
                        class="form-input py-2 w-full"
                        type="text"
                        required
                        v-model="zip"
                      />
                    </div>
                  </div>
                  <div class="space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
                    <div class="sm:w-1/2">
                      <label class="block text-sm font-medium mb-1" for="city"
                        >City</label
                      >
                      <input
                        id="city"
                        class="form-input py-2 w-full"
                        type="text"
                        required
                        v-model="city"
                      />
                    </div>
                    <div class="sm:w-1/2">
                      <label class="block text-sm font-medium mb-1" for="state"
                        >State</label
                      >
                      <select
                        id="state"
                        class="form-select py-2 w-full"
                        required
                        v-model="state"
                      >
                        <option value="AL">Alabama</option>
                        <option value="AK">Alaska</option>
                        <option value="AZ">Arizona</option>
                        <option value="AR">Arkansas</option>
                        <option value="CA">California</option>
                        <option value="CO">Colorado</option>
                        <option value="CT">Connecticut</option>
                        <option value="DE">Delaware</option>
                        <option value="DC">District Of Columbia</option>
                        <option value="FL">Florida</option>
                        <option value="GA">Georgia</option>
                        <option value="HI">Hawaii</option>
                        <option value="ID">Idaho</option>
                        <option value="IL">Illinois</option>
                        <option value="IN">Indiana</option>
                        <option value="IA">Iowa</option>
                        <option value="KS">Kansas</option>
                        <option value="KY">Kentucky</option>
                        <option value="LA">Louisiana</option>
                        <option value="ME">Maine</option>
                        <option value="MD">Maryland</option>
                        <option value="MA">Massachusetts</option>
                        <option value="MI">Michigan</option>
                        <option value="MN">Minnesota</option>
                        <option value="MS">Mississippi</option>
                        <option value="MO">Missouri</option>
                        <option value="MT">Montana</option>
                        <option value="NE">Nebraska</option>
                        <option value="NV">Nevada</option>
                        <option value="NH">New Hampshire</option>
                        <option value="NJ">New Jersey</option>
                        <option value="NM">New Mexico</option>
                        <option value="NY">New York</option>
                        <option value="NC">North Carolina</option>
                        <option value="ND">North Dakota</option>
                        <option value="OH">Ohio</option>
                        <option value="OK">Oklahoma</option>
                        <option value="OR">Oregon</option>
                        <option value="PA">Pennsylvania</option>
                        <option value="RI">Rhode Island</option>
                        <option value="SC">South Carolina</option>
                        <option value="SD">South Dakota</option>
                        <option value="TN">Tennessee</option>
                        <option value="TX">Texas</option>
                        <option value="UT">Utah</option>
                        <option value="VT">Vermont</option>
                        <option value="VA">Virginia</option>
                        <option value="WA">Washington</option>
                        <option value="WV">West Virginia</option>
                        <option value="WI">Wisconsin</option>
                        <option value="WY">Wyoming</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label class="block text-sm font-medium mb-1" for="number"
                      >Phone Number <span class="text-rose-500">*</span></label
                    >
                    <input
                      id="number"
                      class="form-input py-2 w-full"
                      type="text"
                      required
                      v-model="number"
                    />
                  </div>
                </div>
                <div class="mt-6">
                  <button
                    class="btn-sm w-full text-sm text-white bg-green-500 hover:bg-green-400 group"
                    @click.prevent="pageTwo()"
                  >
                    Next Step
                    <span
                      class="tracking-normal text-white group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1"
                      >-&gt;</span
                    >
                  </button>
                </div>
              </div>

              <!-- step 2 form -->

              <div v-if="step === 'page2'">
                <div class="mt-6">
                  <button
                    class="btn-sm w-full text-sm text-green-500 border-green-500 hover:border-green-300 hover:text-green-300 group"
                    @click.prevent="pageThreeA()"
                  >
                    I am licensed
                    <span
                      class="tracking-normal text-white group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1"
                      >-&gt;</span
                    >
                  </button>
                </div>
                <div class="mt-6">
                  <button
                    class="btn-sm w-full text-sm text-green-500 border-green-500 hover:border-green-300 hover:text-green-300 group"
                    @click.prevent="pageThreeB()"
                  >
                    I am pre-licensed/under supervision
                    <span
                      class="tracking-normal text-white group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1"
                      >-&gt;</span
                    >
                  </button>
                </div>

                <div class="mt-6">
                  <button
                    class="btn-sm w-full text-sm text-white bg-green-500 hover:bg-green-400 group"
                    @click.prevent="pageOne()"
                  >
                    <!-- <span
                        class="tracking-normal text-white group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1"
                        >&lt;-</span
                      > -->
                    Go Back
                  </button>
                </div>
              </div>

              <!-- step 3a form -->
              <div v-if="step === 'page3a'">
                <div>
                  <label
                    class="block text-sm font-medium mb-1"
                    for="licensenumber"
                    >License Number <span class="text-rose-500">*</span></label
                  >
                  <input
                    id="licensenumber"
                    class="form-input py-2 w-full"
                    type="text"
                    required
                    v-model="licensenumber"
                  />
                </div>
                <div class="mt-5">
                  <label
                    class="block text-sm font-medium mb-1"
                    for="licensestate"
                    >State</label
                  >
                  <select
                    id="licensestate"
                    class="form-select py-2 w-full"
                    required
                    v-model="licensestate"
                  >
                    <option value="AL">Alabama</option>
                    <option value="AK">Alaska</option>
                    <option value="AZ">Arizona</option>
                    <option value="AR">Arkansas</option>
                    <option value="CA">California</option>
                    <option value="CO">Colorado</option>
                    <option value="CT">Connecticut</option>
                    <option value="DE">Delaware</option>
                    <option value="DC">District Of Columbia</option>
                    <option value="FL">Florida</option>
                    <option value="GA">Georgia</option>
                    <option value="HI">Hawaii</option>
                    <option value="ID">Idaho</option>
                    <option value="IL">Illinois</option>
                    <option value="IN">Indiana</option>
                    <option value="IA">Iowa</option>
                    <option value="KS">Kansas</option>
                    <option value="KY">Kentucky</option>
                    <option value="LA">Louisiana</option>
                    <option value="ME">Maine</option>
                    <option value="MD">Maryland</option>
                    <option value="MA">Massachusetts</option>
                    <option value="MI">Michigan</option>
                    <option value="MN">Minnesota</option>
                    <option value="MS">Mississippi</option>
                    <option value="MO">Missouri</option>
                    <option value="MT">Montana</option>
                    <option value="NE">Nebraska</option>
                    <option value="NV">Nevada</option>
                    <option value="NH">New Hampshire</option>
                    <option value="NJ">New Jersey</option>
                    <option value="NM">New Mexico</option>
                    <option value="NY">New York</option>
                    <option value="NC">North Carolina</option>
                    <option value="ND">North Dakota</option>
                    <option value="OH">Ohio</option>
                    <option value="OK">Oklahoma</option>
                    <option value="OR">Oregon</option>
                    <option value="PA">Pennsylvania</option>
                    <option value="RI">Rhode Island</option>
                    <option value="SC">South Carolina</option>
                    <option value="SD">South Dakota</option>
                    <option value="TN">Tennessee</option>
                    <option value="TX">Texas</option>
                    <option value="UT">Utah</option>
                    <option value="VT">Vermont</option>
                    <option value="VA">Virginia</option>
                    <option value="WA">Washington</option>
                    <option value="WV">West Virginia</option>
                    <option value="WI">Wisconsin</option>
                    <option value="WY">Wyoming</option>
                  </select>
                </div>

                <div class="space-y-4 sm:flex sm:space-y-0 sm:space-x-4 mt-5">
                  <div class="sm:w-1/2">
                    <label
                      class="block text-sm font-medium mb-1"
                      for="licenseexpmon"
                      >Month of Expiration</label
                    >
                    <select
                      id="licenseexpmon"
                      class="form-select py-2 w-full"
                      required
                      name="month"
                      v-model="licenseexpmon"
                    >
                      <option value="01">January</option>
                      <option value="02">February</option>
                      <option value="03">March</option>
                      <option value="04">April</option>
                      <option value="05">May</option>
                      <option value="06">June</option>
                      <option value="07">July</option>
                      <option value="08">August</option>
                      <option value="09">September</option>
                      <option value="10">October</option>
                      <option value="11">November</option>
                      <option value="12">December</option>
                    </select>
                  </div>
                  <div class="sm:w-1/2">
                    <label
                      class="block text-sm font-medium mb-1"
                      for="licenseexpyear"
                      >Year of Expiration</label
                    >
                    <input
                      id="licenseexpyear"
                      class="form-input py-2 w-full"
                      type="text"
                      required
                      v-model="licenseexpyear"
                    />
                  </div>
                </div>
                <div class="space-y-4 sm:flex sm:space-y-0 sm:space-x-4 mt-6">
                  <div class="sm:w-1/2">
                    <button
                      class="btn-sm w-full text-sm text-white bg-green-500 hover:bg-green-400 group"
                      @click.prevent="pageTwo()"
                    >
                      <!-- <span
                        class="tracking-normal text-white group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1"
                        >&lt;-</span
                      > -->
                      Go Back
                    </button>
                  </div>
                  <div class="sm:w-1/2">
                    <button
                      class="btn-sm w-full text-sm text-white bg-green-500 hover:bg-green-400 group"
                      type="submit"
                    >
                      Sign Up
                      <span
                        class="tracking-normal text-white group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1"
                        >-&gt;</span
                      >
                    </button>
                  </div>
                </div>
              </div>

              <!-- step 3b form -->
              <div v-if="step === 'page3b'">
                <div>
                  <label
                    class="block text-sm font-medium mb-1"
                    for="internnumber"
                    >Intern Number <span class="text-rose-500">*</span></label
                  >
                  <input
                    id="internnumber"
                    class="form-input py-2 w-full"
                    type="text"
                    required
                    v-model="internnumber"
                  />
                </div>
                <div>
                  <label
                    class="block text-sm font-medium mb-1 mt-5"
                    for="supname"
                    >Supervisor Name <span class="text-rose-500">*</span></label
                  >
                  <input
                    id="supname"
                    class="form-input py-2 w-full"
                    type="text"
                    required
                    v-model="supname"
                  />
                </div>
                <div>
                  <label
                    class="block text-sm font-medium mb-1 mt-5"
                    for="suptitle"
                    >Supervisor Title
                    <span class="text-rose-500">*</span></label
                  >
                  <input
                    id="suptitle"
                    class="form-input py-2 w-full"
                    type="text"
                    required
                    v-model="suptitle"
                  />
                </div>
                <div>
                  <label
                    class="block text-sm font-medium mb-1 mt-5"
                    for="suplicnum"
                    >Supervisor License Number
                    <span class="text-rose-500">*</span></label
                  >
                  <input
                    id="suplicnum"
                    class="form-input py-2 w-full"
                    type="text"
                    required
                    v-model="suplicnum"
                  />
                </div>
                <div>
                  <label
                    class="block text-sm font-medium mb-1 mt-5"
                    for="supemail"
                    >Supervisor Email
                    <span class="text-rose-500">*</span></label
                  >
                  <input
                    id="supemail"
                    class="form-input py-2 w-full"
                    type="text"
                    required
                    v-model="supemail"
                  />
                </div>
                <div>
                  <label
                    class="block text-sm font-medium mb-1 mt-5"
                    for="supnumber"
                    >Supervisor Number
                    <span class="text-rose-500">*</span></label
                  >
                  <input
                    id="supnumber"
                    class="form-input py-2 w-full"
                    type="text"
                    required
                    v-model="supnumber"
                  />
                </div>

                <div class="space-y-4 sm:flex sm:space-y-0 sm:space-x-4 mt-6">
                  <div class="sm:w-1/2">
                    <button
                      class="btn-sm w-full text-sm text-white bg-green-500 hover:bg-green-400 group"
                      @click.prevent="pageTwo()"
                    >
                      <!-- <span
                        class="tracking-normal text-white group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1"
                        >&lt;-</span
                      > -->
                      Go Back
                    </button>
                  </div>
                  <div class="sm:w-1/2">
                    <button
                      class="btn-sm w-full text-sm text-white bg-green-500 hover:bg-green-400 group"
                      type="submit"
                    >
                      Sign Up
                      <span
                        class="tracking-normal text-white group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1"
                        >-&gt;</span
                      >
                    </button>
                  </div>
                </div>
              </div>

              <!-- step 4 form -->
              <div v-if="step === 'page4'">
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
      step: "page1",
      registration: {
        number: null,
      },
      clientbasesize: null,
      address: null,
      zip: null,
      city: null,
      state: null,
      number: null,
      status: null,
      licensenumber: null,
      licensestate: null,
      licenseexpmon: null,
      licenseexpyear: null,
      internnumber: null,
      supname: null,
      suptitle: null,
      suplicnum: null,
      supemail: null,
      supnumber: null,
    };
  },
  methods: {
    async submit() {
      try {
        // backend function goes here
        alert("success");
      } catch (e) {
        this.$toast.error(`There was an error submitting your message!`, {
          position: "top-right",
        });
      }
    },
    pageOne() {
      this.step = "page1";
    },
    pageTwo() {
      this.step = "page2";
    },
    pageThreeA() {
      this.step = "page3a";
      this.status = "licensed";
    },
    pageThreeB() {
      this.step = "page3b";
      this.status = "undersupervision";
    },
    pageFour() {
      this.step = "page4";
    },
  },
};
</script>
