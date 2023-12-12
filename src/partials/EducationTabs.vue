<script setup>
import { ref } from "vue";

const tab = ref("1");
</script>

<template>
  <section class="relative bg-white pt-4 pb-12">
    <div class="py-12 md:py-20">
      <div class="max-w-6xl mx-auto px-4 sm:px-6">
        <div class="relative max-w-3xl mx-auto text-center pb-12">
          <!-- <img class="absolute right-full top-0 -translate-x-full -mt-3 pointer-events-none mix-blend-exclusion" src="../images/features-illustration.png" width="116" height="116" alt="Features illustration" aria-hidden="true"> -->
          <h2 class="text-3xl md:text-4xl font-bold mb-4">
            Customized experience for each member in your district
          </h2>
          <p class="text-xl text-gray-300 mb-4">
            Student Experience | Parent Experience | Staff Experience |
            Counselor Experience
          </p>
        </div>
        <div>
          <!-- Tabs buttons -->
          <div class="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            <button
              :class="'bg-mint-200 border border-gray-900 border-opacity-0 hover:border-mint-300 hover:border-opacity-100 bg-opacity-30 rounded-lg'"
              class="text-left px-4 py-5 border border-transparent rounded"
              @click.prevent
              @click="tab = '1'"
            >
              <div class="flex items-center content-center justify-center mb-1">
                <div class="font-inter-tight font-semibold text-gray-300 ">
                  Student Experience
                </div>
              </div>
              <div class="text-sm text-gray-300 text-center">
                Easily connect with available resources, counselors, and crisis
                support.
              </div>
            </button>
            <button
              :class="'bg-mint-200 border border-gray-900 border-opacity-0 hover:border-mint-300 hover:border-opacity-100 bg-opacity-30 rounded-lg'"
              class="text-left px-4 py-5 border border-transparent rounded"
              @click.prevent
              @click="tab = '2'"
            >
              <div class="flex items-center content-center justify-center  mb-1">
                <div class="font-inter-tight font-semibold text-gray-300">
                  Parent Experience
                </div>
              </div>
              <div class="text-sm text-gray-300 text-center">
                Specific resource library, services, referrals all at your
                fingertips.
              </div>
            </button>
            <button
              :class="'bg-mint-200 border border-gray-900 border-opacity-0 hover:border-mint-300 hover:border-opacity-100 bg-opacity-30 rounded-lg'"
              class="text-left px-4 py-5 border border-transparent rounded"
              @click.prevent
              @click="tab = '3'"
            >
              <div class="flex items-center content-center justify-center  mb-1">
                <div class="font-inter-tight font-semibold text-gray-300">
                  Staff Experience
                </div>
              </div>
              <div class="text-sm text-gray-300 text-center">
                Connected to counseling department, reporting, and crisis tool
                access.
              </div>
            </button>
            <button
              :class="'bg-mint-200 border border-gray-900 border-opacity-0 hover:border-mint-300 hover:border-opacity-100 bg-opacity-30 rounded-lg'"
              class="text-left px-4 py-5 border border-transparent rounded"
              @click.prevent
              @click="tab = '4'"
            >
              <div class="flex items-center content-center justify-center  mb-1">
                <div class="font-inter-tight font-semibold text-gray-300">
                  Counselor Experience
                </div>
              </div>
              <div class="text-sm text-gray-300 text-center">
                One space for all appointments, referrals, notes, forms, crisis
                support activity and other automated workflows.
              </div>
            </button>
          </div>
          <!-- Tabs items -->
        </div>
      </div>
    </div>
  </section>
</template>
