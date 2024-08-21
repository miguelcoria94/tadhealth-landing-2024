<template>
  <main class="bg-white">
    <div class="relative flex">
      <!-- Content -->
      <div class="w-full md:w-1/2">
        <div class="min-h-screen h-full flex flex-col after:flex-1">
          <div class="flex-1">
            <div
              class="flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8"
            >
              <!-- Logo -->
              <router-link class="block" to="/">
                <img src="../images/tad-heart.png" alt="" class="h-10" />
              </router-link>
            </div>
          </div>

          <div class="max-w-sm mx-auto px-4 py-8">
            <h1 class="text-3xl text-slate-800 font-bold mb-6">
              Admin Login 🔐
            </h1>
            <!-- Form -->
            <form @submit.prevent="submit">
              <div class="space-y-4">
                <div>
                  <label class="block text-sm font-medium mb-1" for="email"
                    >Email Address</label
                  >
                  <input
                    v-model="email"
                    id="email"
                    class="form-input w-full"
                    type="email"
                  />
                </div>
                <div>
                  <label class="block text-sm font-medium mb-1" for="password"
                    >Password</label
                  >
                  <input
                    v-model="password"
                    id="password"
                    class="form-input w-full"
                    type="password"
                    autoComplete="on"
                  />
                </div>
              </div>
              <div class="flex items-center justify-between mt-6">
                <!-- <div class="mr-1">
                  <router-link class="text-sm underline hover:no-underline" to="/reset-password">Forgot Password?</router-link>
                </div> -->
                <button
                  class="btn-sm w-full text-sm text-white bg-green-500 hover:bg-green-400 group"
                >
                  Submit
                  <span
                    class="tracking-normal text-white group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1"
                    >-&gt;</span
                  >
                </button>
              </div>
            </form>
            <!-- Footer -->
            <div class="pt-5 mt-6 border-t border-slate-200">
              <!-- <div class="text-sm">
                Don’t you have an account? <router-link class="font-medium text-indigo-500 hover:text-indigo-600" to="/signup">Sign Up</router-link>
              </div> -->
              <!-- Warning -->
              <!-- <div class="mt-5">
                <div class="bg-amber-100 text-amber-600 px-3 py-2 rounded">
                  <svg class="inline w-3 h-3 shrink-0 fill-current mr-2" viewBox="0 0 12 12">
                    <path d="M10.28 1.28L3.989 7.575 1.695 5.28A1 1 0 00.28 6.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 1.28z" />
                  </svg>
                  <span class="text-sm">
                    To support you during the pandemic super pro features are free until March 31st.
                  </span>
                </div>
              </div> -->
            </div>
          </div>
        </div>
      </div>

      <!-- Image -->
      <div
        class="hidden md:block absolute top-0 bottom-0 right-0 md:w-1/2"
        aria-hidden="true"
      >
        <img
          class="object-cover object-center w-full h-full"
          src="../images/beach.jpg"
          width="760"
          height="1024"
          alt="Authentication"
        />
      </div>
    </div>
  </main>
</template>

<script>
import { adminLogin } from "../api/admin";
import store from "../main.js"

export default {
  name: "AdminLogin",
  data() {
    return {
      email: null,
      password: null,
    };
  },
  methods: {
    async submit() {
      try {
        if (!this.email || !this.password) {
          this.$toast.error(`Please fill out the entire form`, {
            position: "top-left",
          });
          return;
        } else {
          const { data } =  await adminLogin({
          username: this.email,
          password: this.password,
        });
        store.commit('setUser', data)
        localStorage.setItem("auth._token.local", `Bearer ${data.access_token}`);
        console.log(data)
          this.$router.push({ path: '/admin/home', replace: true })
          this.$toast.success(`You have been logged in!`, {
            position: "top-right",
          });
          return 
        }
        
      } catch (e) {
        this.$toast.error(`There was an error submitting your request! ${e}`, {
          position: "top-left",
        });
      }
    },
  },
};
</script>
