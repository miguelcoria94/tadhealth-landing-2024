<template>
  <header
    :class="{ 'bg-white shadow-sm': isScrolled, 'bg-transparent': !isScrolled }"
    class="w-full fixed top-0 left-0 z-50"
  >
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <div class="flex items-center justify-between h-20">
        <!-- Site branding -->
        <div class="shrink-0 mr-4">
          <!-- Logo -->
          <router-link to="/" class="block" aria-label="Cruip">
            <img
              class="h-7"
              src="/src/images/tad-logo.png"
              alt="tadhealth-nav-logo"
            />
          </router-link>
        </div>

        <!-- Desktop navigation -->
        <nav class="hidden md:flex md:grow">
          <!-- Desktop menu links -->
          <ul class="flex grow justify-end flex-wrap items-center">
            <DropdownOne title="Platform">
              <li
                class="bg-mint-200 border border-gray-900 border-opacity-0 hover:border-mint-300 hover:border-opacity-100 bg-opacity-30 rounded-lg p-1 w-80 h-30 m-1"
              >
                <router-link
                  to="/tadhealth-platform"
                  class="text-sm text-gray-300 hover:text-green-600 font-bold flex py-2 px-4 leading-tight"
                  ><i class="las la-laptop header-icon text-green-500"></i>
                  TadHealth Platform
                </router-link>
                <p
                  class="no-underline cursor-pointer font-medium text-sm text-gray-300 flex py-2 px-4 leading-6"
                >
                  Learn more about TadHealth and our Mental Health Management
                  System.
                </p>
              </li>
              <!-- <li
                class="border border-gray-900 border-opacity-0 hover:border-mint-300 hover:bg-mint-100 hover:border-opacity-100 hover:bg-opacity-10 rounded-lg p-1 w-80 m-1"
              >
                <img
                  src="../images/tier3.png"
                  alt="new"
                  class="h-5 inline-block"
                />
                <router-link
                  to="/tadhealth-safety"
                  class="text-sm text-gray-300 hover:text-green-600 font-bold flex py-2 px-4 leading-tight"
                  ><i class="las la-life-ring header-icon text-green-500"></i
                  >TadHealth Safety
                </router-link>
                <p
                  class="no-underline cursor-pointer font-medium text-sm text-gray-300 flex py-2 px-4 leading-tight"
                >
                  Accessible Crisis Resources
                </p>
              </li> -->
              <!-- <li
                class="border border-gray-900 border-opacity-0 hover:border-mint-300 hover:bg-mint-100 hover:border-opacity-100 hover:bg-opacity-10 rounded-lg p-1 w-80 m-1"
              >
                <img
                  src="../images/tier1.png"
                  alt="new"
                  class="h-5 inline-block"
                />
                <router-link
                  to="/tadhealth-resources"
                  class="text-sm text-gray-300 hover:text-green-600 font-bold flex py-2 px-4 leading-tight"
                  ><i class="las la-photo-video header-icon text-green-500"></i
                  >TadHealth Resources
                </router-link>
                <p
                  class="no-underline cursor-pointer font-medium text-sm text-gray-300 flex py-2 px-4 leading-tight"
                >
                  AI-powered Resource Distribution
                </p>
              </li> -->
              <!-- <li
                class="border border-gray-900 border-opacity-0 hover:border-mint-300 hover:bg-mint-100 hover:border-opacity-100 hover:bg-opacity-10 rounded-lg p-1 w-80 m-1"
              >
                <img
                  src="../images/tier2.png"
                  alt="new"
                  class="h-5 inline-block"
                />
                <router-link
                  to="/tadhealth-coordination"
                  class="text-sm text-gray-300 hover:text-green-600 font-bold flex py-2 px-4 leading-tight"
                  ><i class="las la-gavel header-icon text-green-500"></i
                  >TadHealth Coordination
                </router-link>
                <p
                  class="no-underline cursor-pointer font-medium text-sm text-gray-300 flex py-2 px-4 leading-tight"
                >
                  HIPAA and FERPA Scheduling
                </p>
              </li> -->
              <li
                class="border border-gray-900 border-opacity-0 hover:border-mint-300 hover:bg-mint-100 hover:border-opacity-100 hover:bg-opacity-10 rounded-lg p-1 w-80 m-1"
              >
                <router-link
                  to="/tadhealth-billing"
                  class="text-sm text-gray-300 hover:text-green-600 font-bold flex py-2 px-4 leading-tight"
                  ><i class="las la-money-check header-icon text-green-500"></i
                  >TadHealth Billing (Coming Soon)
                </router-link>
                <p
                  class="no-underline cursor-pointer font-medium text-sm text-gray-300 flex py-2 px-4 leading-tight"
                >
                  In-network reimbursement.
                </p>
              </li>
              <li
                class="border border-gray-900 border-opacity-0 hover:border-mint-300 hover:bg-mint-100 hover:border-opacity-100 hover:bg-opacity-10 rounded-lg p-1 w-80 m-1"
              >
                <router-link
                  to="/tadhealth-referrals-scheduling"
                  class="text-sm text-gray-300 hover:text-green-600 font-bold flex py-2 px-4 leading-tight"
                  ><i class="las la-money-check header-icon text-green-500"></i
                  >TadHealth Referrals & Scheduling
                </router-link>
                <p
                  class="no-underline cursor-pointer font-medium text-sm text-gray-300 flex py-2 px-4 leading-tight"
                >
                  Lorem ipsum odor amet, consectetuer adipiscing elit.
                </p>
              </li>
              <li
                class="border border-gray-900 border-opacity-0 hover:border-mint-300 hover:bg-mint-100 hover:border-opacity-100 hover:bg-opacity-10 rounded-lg p-1 w-80 m-1"
              >
                <router-link
                  to="/tadhealth-documentation"
                  class="text-sm text-gray-300 hover:text-green-600 font-bold flex py-2 px-4 leading-tight"
                  ><i class="las la-money-check header-icon text-green-500"></i
                  >TadHealth Documentation
                </router-link>
                <p
                  class="no-underline cursor-pointer font-medium text-sm text-gray-300 flex py-2 px-4 leading-tight"
                >
                  Lorem ipsum odor amet, consectetuer adipiscing elit.
                </p>
              </li>
              <li
                class="border border-gray-900 border-opacity-0 hover:border-mint-300 hover:bg-mint-100 hover:border-opacity-100 hover:bg-opacity-10 rounded-lg p-1 w-80 m-1"
              >
                <router-link
                  to="/tadhealth-analytics"
                  class="text-sm text-gray-300 hover:text-green-600 font-bold flex py-2 px-4 leading-tight"
                  ><i class="las la-chart-bar header-icon text-green-500"></i
                  >TadHealth Analytics
                </router-link>
                <p
                  class="no-underline cursor-pointer font-medium text-sm text-gray-300 flex py-2 px-4 leading-tight"
                >
                  Data Visibility and Protection.
                </p>
              </li>
              <li
                class="border border-gray-900 border-opacity-0 hover:border-mint-300 hover:bg-mint-100 hover:border-opacity-100 hover:bg-opacity-10 rounded-lg p-1 w-80 m-1"
              >
                <router-link
                  to="/tadhealth-crisis-management"
                  class="text-sm text-gray-300 hover:text-green-600 font-bold flex py-2 px-4 leading-tight"
                  ><i class="las la-money-check header-icon text-green-500"></i
                  >TadHealth Crisis Management
                </router-link>
                <p
                  class="no-underline cursor-pointer font-medium text-sm text-gray-300 flex py-2 px-4 leading-tight"
                >
                  Lorem ipsum odor amet, consectetuer adipiscing elit.
                </p>
              </li>
            </DropdownOne>
            <DropdownOne title="Solutions">
              <li
                class="bg-mint-200 border border-gray-900 border-opacity-0 hover:border-mint-300 hover:border-opacity-100 bg-opacity-30 rounded-lg p-1 w-80 h-30 m-1"
              >
                <router-link
                  to="/education"
                  class="text-sm text-gray-300 hover:text-green-600 font-bold flex py-2 px-4 leading-tight"
                  ><i class="las la-school header-icon text-green-500"></i>For
                  Education
                </router-link>
                <p
                  class="no-underline cursor-pointer font-medium text-sm text-gray-300 flex py-2 px-4 leading-tight"
                >
                  Protecting Students Through Streamlined Support.
                </p>
              </li>
              <li
                class="border border-gray-900 border-opacity-0 hover:border-mint-300 hover:bg-mint-100 hover:border-opacity-100 hover:bg-opacity-10 rounded-lg p-1 w-80 m-1"
              >
                <router-link
                  to="/organizations"
                  class="text-sm text-gray-300 hover:text-green-600 font-bold flex py-2 px-4 leading-tight"
                  ><i class="las la-building header-icon text-green-500"></i>
                  For Community Organizations
                </router-link>
                <p
                  class="no-underline cursor-pointer font-medium text-sm text-gray-300 flex py-2 px-4 leading-6"
                >
                  Grow your impact one resource at a time.
                </p>
              </li>
            </DropdownOne>

            <!-- <li>
              <router-link
                to="/get-involved"
                class="text-gray-300 hover:text-gray-200 px-4 py-2 flex items-center transition duration-150 ease-in-out"
                >Get Involved</router-link
              >
            </li> -->
            <!-- <li>
              <router-link
                to="/blog"
                class="text-gray-300 hover:text-gray-200 px-4 py-2 flex items-center transition duration-150 ease-in-out"
                >Request A Demo</router-link
              >
            </li> -->

            <!-- 1st level: hover -->
            <DropdownOne title="Resources">
              <li
                class="bg-mint-200 border border-gray-900 border-opacity-0 hover:border-mint-300 hover:border-opacity-100 bg-opacity-30 rounded-lg p-1 w-80 h-30 m-1"
              >
                <router-link
                  to="/blog"
                  class="text-sm text-gray-300 hover:text-green-600 font-bold flex py-2 px-4 leading-tight"
                  ><i class="las la-feather header-icon text-green-500"></i>
                  Blog
                </router-link>
                <p
                  class="no-underline cursor-pointer font-medium text-sm text-gray-300 flex py-2 px-4 leading-6"
                >
                  Stay ahead of mental health trends.
                </p>
              </li>
              <!-- <li
                class="border border-gray-900 border-opacity-0 hover:border-mint-300 hover:bg-mint-100 hover:border-opacity-100 hover:bg-opacity-10 rounded-lg p-1 w-80 m-1"
              >
                <router-link
                  to="/podcasts"
                  class="text-sm text-gray-300 hover:text-green-600 font-bold flex py-2 px-4 leading-tight"
                  ><i class="las la-microphone header-icon text-green-500"></i>
                  Podcasts
                </router-link>
                <p
                  class="no-underline cursor-pointer font-medium text-sm text-gray-300 flex py-2 px-4 leading-tight"
                >
                  Listen to the latest voices in mental health.
                </p>
              </li> -->
              <li
                class="border border-gray-900 border-opacity-0 hover:border-mint-300 hover:bg-mint-100 hover:border-opacity-100 hover:bg-opacity-10 rounded-lg p-1 w-80 m-1"
              >
                <router-link
                  to="/casestudies"
                  class="text-sm text-gray-300 hover:text-green-600 font-bold flex py-2 px-4 leading-tight"
                  ><i class="las la-microscope header-icon text-green-500"></i>
                  Case Studies
                </router-link>
                <p
                  class="no-underline cursor-pointer font-medium text-sm text-gray-300 flex py-2 px-4 leading-tight"
                >
                  Learn how others use TadHealth.
                </p>
              </li>

              <!-- <li>
                <router-link
                  to="/enterprise"
                  class="font-medium text-sm text-gray-300 hover:text-green-600 flex py-2 px-4 leading-tight"
                  ><i class="las la-building header-icon"></i> Enterprise </router-link
                >
              </li> -->
            </DropdownOne>

            <!-- <li>
              <router-link
                to="/pricing"
                class="text-gray-300 hover:text-gray-200 px-4 py-2 flex items-center transition duration-150 ease-in-out"
                >Pricing</router-link
              >
            </li> -->

            <DropdownOne title="About">
              <li
                class="bg-mint-200 border border-gray-900 border-opacity-0 hover:border-mint-300 hover:border-opacity-100 bg-opacity-30 rounded-lg p-1 w-80 h-30 m-1"
              >
                <router-link
                  to="/about"
                  class="text-sm text-gray-300 hover:text-green-600 font-bold flex py-2 px-4 leading-tight"
                  ><i
                    class="las la-hands-helping header-icon text-green-500"
                  ></i>
                  About Us
                </router-link>
                <p
                  class="no-underline cursor-pointer font-medium text-sm text-gray-300 flex py-2 px-4 leading-6"
                >
                  <!-- Need text for this section -->
                  Join us on our mission.
                </p>
              </li>

              <li
                class="border border-gray-900 border-opacity-0 hover:border-mint-300 hover:bg-mint-100 hover:border-opacity-100 hover:bg-opacity-10 rounded-lg p-1 w-80 m-1"
              >
                <router-link
                  to="/get-involved"
                  class="text-sm text-gray-300 hover:text-green-600 font-bold flex py-2 px-4 leading-tight"
                  ><i
                    class="las la-address-card header-icon text-green-500"
                  ></i>
                  Get Involved
                </router-link>
                <p
                  class="no-underline cursor-pointer font-medium text-sm text-gray-300 flex py-2 px-4 leading-tight"
                >
                  <!-- Need text for this section -->
                  Join us on our mission.
                </p>
              </li>
              <!-- <li
                class="border border-gray-900 border-opacity-0 hover:border-mint-300 hover:bg-mint-100 hover:border-opacity-100 hover:bg-opacity-10 rounded-lg p-1 w-80 m-1"
              >
                <router-link
                  to="/about"
                  class="text-sm text-gray-300 hover:text-green-600 font-bold flex py-2 px-4 leading-tight"
                  ><i class="las la-fingerprint header-icon text-green-500"></i
                  >About Us
                </router-link>
                <p
                  class="no-underline cursor-pointer font-medium text-sm text-gray-300 flex py-2 px-4 leading-tight"
                >
                  Join us on our mission. 
                  
                </p>
              </li> -->
            </DropdownOne>
          </ul>

          <!-- Desktop sign in links -->
          <ul class="flex grow justify-end flex-wrap items-center">
            <!-- <li>
              <router-link
                to="/signin"
                class="font-medium text-mint-500 hover:text-mint-600 px-4 py-3 flex items-center transition duration-150 ease-in-out"
                >Sign in</router-link
              >
            </li> -->
            <li>
              <router-link
                to="/request-demo"
                class="btn-sm text-white bg-mint-500 hover:bg-mint-600 ml-3"
                >Get in Touch</router-link
              >
            </li>
          </ul>
        </nav>

        <!-- Mobile menu -->
        <div class="md:hidden">
          <!-- Hamburger button -->
          <button
            class="hamburger"
            ref="hamburger"
            :class="{ active: mobileNavOpen }"
            aria-controls="mobile-nav"
            :aria-expanded="mobileNavOpen"
            @click="mobileNavOpen = !mobileNavOpen"
          >
            <span class="sr-only">Menu</span>
            <svg
              class="w-6 h-6 fill-current text-gray-300 hover:text-gray-200 transition duration-150 ease-in-out"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect y="4" width="24" height="2" rx="1" />
              <rect y="11" width="24" height="2" rx="1" />
              <rect y="18" width="24" height="2" rx="1" />
            </svg>
          </button>

          <!-- Mobile navigation -->
          <nav
            id="mobile-nav"
            ref="mobileNav"
            class="absolute top-full z-20 left-0 w-full px-4 sm:px-6 overflow-hidden transition-all duration-300 ease-in-out"
            :style="[
              mobileNavOpen
                ? { maxHeight: $refs.mobileNav.scrollHeight + 'px', opacity: 1 }
                : { maxHeight: 0, opacity: 0.8 },
            ]"
          >
            <ul class="bg-white shadow-lg px-4 py-2">
              <li>
                <router-link
                  to="/"
                  class="flex text-gray-300 hover:text-gray-200 py-2"
                  >Home</router-link
                >
              </li>
              <!-- 
              <li>
                <router-link
                  to="/about"
                  class="flex text-gray-300 hover:text-gray-200 py-2"
                  >About</router-link
                >
              </li> -->
              <!-- New Product sections for mobile navigation -->
              <li class="py-2 my-2 border-t border-gray-700">
                <span class="flex text-gray-300 py-2">Platform</span>
                <ul class="pl-4">
                  <li class="py-2">
                    <router-link
                      to="/education"
                      class="text-gray-300 hover:text-green-600 flex py-2 px-4 leading-tight"
                    >
                      <i class="las la-laptop header-icon text-green-500"></i>
                      TadHealth Platform
                    </router-link>
                  </li>
                  <!-- <li class="py-2">
                    <router-link
                      to="/tadhealth-safety"
                      class="text-gray-300 hover:text-green-600 flex py-2 px-4 leading-tight"
                    >
                      <i
                        class="las la-life-ring header-icon text-green-500"
                      ></i>
                      TadHealth Safety
                    </router-link>
                  </li> -->
                  <!-- <li class="py-2">
                    <router-link
                      to="/tadhealth-resources"
                      class="text-gray-300 hover:text-green-600 flex py-2 px-4 leading-tight"
                    >
                      <i
                        class="las la-photo-video header-icon text-green-500"
                      ></i>
                      TadHealth Resources
                    </router-link>
                  </li> -->
                  <!-- <li class="py-2">
                    <router-link
                      to="/tadhealth-coordination"
                      class="text-gray-300 hover:text-green-600 flex py-2 px-4 leading-tight"
                    >
                      <i class="las la-gavel header-icon text-green-500"></i>
                      TadHealth Coordination
                    </router-link>
                  </li> -->
                  <li class="py-2">
                    <router-link
                      to="/tadhealth-billing"
                      class="text-gray-300 hover:text-green-600 flex py-2 px-4 leading-tight"
                    >
                      <i
                        class="las la-money-check header-icon text-green-500"
                      ></i>
                      TadHealth Billing (Coming Soon)
                    </router-link>
                  </li>
                  <li class="py-2">
                    <router-link
                      to="/tadhealth-referrals-scheduling"
                      class="text-gray-300 hover:text-green-600 flex py-2 px-4 leading-tight"
                    >
                      <i
                        class="las la-money-check header-icon text-green-500"
                      ></i>
                      TadHealth Referrals & Scheduling
                    </router-link>
                  </li>
                  <li class="py-2">
                    <router-link
                      to="/tadhealth-documentation"
                      class="text-gray-300 hover:text-green-600 flex py-2 px-4 leading-tight"
                    >
                      <i
                        class="las la-chart-bar header-icon text-green-500"
                      ></i>
                      TadHealth Documentation
                    </router-link>
                  </li>
                  <li class="py-2">
                    <router-link
                      to="/tadhealth-analytics"
                      class="text-gray-300 hover:text-green-600 flex py-2 px-4 leading-tight"
                    >
                      <i
                        class="las la-chart-bar header-icon text-green-500"
                      ></i>
                      TadHealth Analytics
                    </router-link>
                  </li>
                  <li class="py-2">
                    <router-link
                      to="/tadhealth-crisis-management"
                      class="text-gray-300 hover:text-green-600 flex py-2 px-4 leading-tight"
                    >
                      <i
                        class="las la-chart-bar header-icon text-green-500"
                      ></i>
                      TadHealth Crisis Management
                    </router-link>
                  </li>
                </ul>
              </li>

              <li class="py-2 my-2 border-t border-gray-700">
                <span class="flex text-gray-300 py-2">Solutions</span>
                <ul class="pl-4">
                  <li class="py-2">
                    <router-link
                      to="/tadhealth-analytics"
                      class="text-gray-300 hover:text-green-600 flex py-2 px-4 leading-tight"
                    >
                      <i class="las la-building header-icon text-green-500"></i>
                      For Organizations
                    </router-link>
                  </li>
                  <li class="py-2">
                    <router-link
                      to="/tadhealth-billing"
                      class="text-gray-300 hover:text-green-600 flex py-2 px-4 leading-tight"
                    >
                      <i class="las la-school header-icon text-green-500"></i>
                      For Education
                    </router-link>
                  </li>
                </ul>
              </li>

              <!-- <li class="py-2 my-2 border-t border-gray-700">
                <span class="flex text-gray-300 py-2">About</span>
                <ul class="pl-4">
                  <li class="py-2">
                    <router-link
                      to="/whytadhealth"
                      class="text-gray-300 hover:text-green-600 flex py-2 px-4 leading-tight"
                    >
                      <i
                        class="las la-hands-helping header-icon text-green-500"
                      ></i>
                      Why TadHealth
                    </router-link>
                  </li>
                  <li class="py-2">
                    <router-link
                      to="/about"
                      class="text-gray-300 hover:text-green-600 flex py-2 px-4 leading-tight"
                    >
                      <i
                        class="las la-fingerprint header-icon text-green-500"
                      ></i>
                      About Us
                    </router-link>
                  </li>
                </ul>
              </li> -->

              <li class="py-2 my-2 border-t border-b border-gray-700">
                <span class="flex text-gray-300 py-2">Resources</span>
                <ul class="pl-4">
                  <li class="py-2">
                    <router-link
                      to="/blog"
                      class="text-gray-300 hover:text-green-600 flex py-2 px-4 leading-tight"
                    >
                      <i class="las la-feather header-icon text-green-500"></i>
                      Blog
                    </router-link>
                  </li>

                  <!-- <li class="py-2">
                    <router-link
                      to="/podcasts"
                      class="text-gray-300 hover:text-green-600 flex py-2 px-4 leading-tight"
                    >
                      <i
                        class="las la-microphone header-icon text-green-500"
                      ></i>
                      Podcasts
                    </router-link>
                  </li> -->

                  <li class="py-2">
                    <router-link
                      to="/casestudies"
                      class="text-gray-300 hover:text-green-600 flex py-2 px-4 leading-tight"
                    >
                      <i
                        class="las la-microscope header-icon text-green-500"
                      ></i>
                      Case Studies
                    </router-link>
                  </li>
                </ul>
              </li>
              <li>
                <router-link
                  to="/signin"
                  class="flex font-medium w-full text-mint-500 hover:text-mint-600 py-2 justify-center"
                  >Sign in</router-link
                >
              </li>
              <li>
                <router-link
                  to="/request-demo"
                  class="font-medium w-full inline-flex items-center justify-center border border-transparent px-4 py-2 my-2 rounded-sm text-white bg-mint-500 hover:bg-mint-600 transition duration-150 ease-in-out"
                  >Get in Touch</router-link
                >
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import Dropdown from "./../utils/Dropdown.vue";
import DropdownOne from "./../utils/DropdownOne.vue";

export default {
  name: "Header",
  components: {
    Dropdown,
    DropdownOne,
  },
  data: function () {
    return {
      mobileNavOpen: false,
      isScrolled: false,
    };
  },
  methods: {
    clickOutside(e) {
      if (
        !this.mobileNavOpen ||
        this.$refs.mobileNav.contains(e.target) ||
        this.$refs.hamburger.contains(e.target)
      )
        return;
      this.mobileNavOpen = false;
    },
    keyPress() {
      if (!this.mobileNavOpen || event.keyCode !== 27) return;
      this.mobileNavOpen = false;
    },
    handleScroll() {
      this.isScrolled = window.scrollY > 0;
    },
  },
  mounted() {
    document.addEventListener("click", this.clickOutside);
    document.addEventListener("keydown", this.keyPress);
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeUnmount() {
    document.removeEventListener("click", this.clickOutside);
    document.removeEventListener("keydown", this.keyPress);
    window.removeEventListener("scroll", this.handleScroll);
  },
};
</script>

<style scoped>
.header-icon {
  font-size: 1rem;
  margin-right: 0.5rem;
}

.bg-white {
  background-color: white;
  transition: background-color 0.8s ease;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.bg-transparent {
  background-color: transparent;
  transition: background-color 0.8s ease;
}
</style>
