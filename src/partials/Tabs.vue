<script setup>
import { ref } from "vue";

const tab = ref("1");
</script>

<template>
  <section class="relative">
    <div class="py-12 md:py-20">
      <div class="max-w-6xl mx-auto px-4 sm:px-6">
        <div class="relative max-w-3xl mx-auto text-center pb-12">
          <!-- <img class="absolute right-full top-0 -translate-x-full -mt-3 pointer-events-none mix-blend-exclusion" src="../images/features-illustration.png" width="116" height="116" alt="Features illustration" aria-hidden="true"> -->
          <h2 class="text-3xl md:text-4xl font-bold font-cabinet-grotesk mb-4">
            Tools that work for you.
          </h2>
          <p class="text-xl text-gray-300 mb-4">
            TadHealth’s ecosystem of HIPAA and FERPA-compliant tools have been
            created from the evidence-based MTSS framework. Remove
            administrative burden while improving safety, professional
            availability, access, and support.
          </p>
        </div>
        <div>
          <!-- Tabs buttons -->
          <div class="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            <button
              :class="
                tab !== '1'
                  ? 'bg-zinc-200  opacity-50 hover:opacity-100 transition'
                  : 'bg-mint-200 border border-gray-900 border-opacity-0 hover:border-mint-300 hover:border-opacity-100 bg-opacity-30 rounded-lg rotate-1'
              "
              class="text-left px-4 py-5 border border-transparent rounded"
              @click.prevent
              @click="tab = '1'"
            >
              <div class="flex items-center justify-between mb-1">
                <div class="font-inter-tight font-semibold text-gray-300">
                  Safety and Crisis Support
                </div>
                <svg
                  :class="tab !== '1' ? 'hidden' : ''"
                  class="fill-mint-400 shrink-0 ml-2"
                  xmlns="http://www.w3.org/2000/svg"
                  width="10"
                  height="10"
                >
                  <path
                    d="M8.667.186H2.675a.999.999 0 0 0 0 1.998h3.581L.971 7.469a.999.999 0 1 0 1.412 1.412l5.285-5.285v3.58a.999.999 0 1 0 1.998 0V1.186a.999.999 0 0 0-.999-.999Z"
                  />
                </svg>
              </div>
              <div class="text-sm text-gray-300">
                Our patent-pending tech provides life-saving resources in
                seconds during a crisis situation.
              </div>
            </button>
            <button
              :class="
                tab !== '2'
                  ? 'bg-zinc-200  opacity-50 hover:opacity-100 transition'
                  : 'bg-mint-200 border border-gray-900 border-opacity-0 hover:border-mint-300 hover:border-opacity-100 bg-opacity-30 rounded-lg rotate-1'
              "
              class="text-left px-4 py-5 border border-transparent rounded"
              @click.prevent
              @click="tab = '2'"
            >
              <div class="flex items-center justify-between mb-1">
                <div class="font-inter-tight font-semibold text-gray-300">
                  Professional Network Management
                </div>
                <svg
                  :class="tab !== '2' ? 'hidden' : ''"
                  class="fill-mint-400 shrink-0 ml-2"
                  xmlns="http://www.w3.org/2000/svg"
                  width="10"
                  height="10"
                >
                  <path
                    d="M8.667.186H2.675a.999.999 0 0 0 0 1.998h3.581L.971 7.469a.999.999 0 1 0 1.412 1.412l5.285-5.285v3.58a.999.999 0 1 0 1.998 0V1.186a.999.999 0 0 0-.999-.999Z"
                  />
                </svg>
              </div>
              <div class="text-sm text-gray-300">
                Our network management ensures professionals meet your
                organizations real-time demands.
              </div>
            </button>
            <button
              :class="
                tab !== '3'
                  ? 'bg-zinc-200 opacity-50 hover:opacity-100 transition'
                  : 'bg-mint-200 border border-gray-900 border-opacity-0 hover:border-mint-300 hover:border-opacity-100 bg-opacity-30 rounded-lg rotate-1'
              "
              class="text-left px-4 py-5 border border-transparent rounded"
              @click.prevent
              @click="tab = '3'"
            >
              <div class="flex items-center justify-between mb-1">
                <div class="font-inter-tight font-semibold text-gray-300">
                  Proactive Resources
                </div>
                <svg
                  :class="tab !== '3' ? 'hidden' : ''"
                  class="fill-mint-400 shrink-0 ml-2"
                  xmlns="http://www.w3.org/2000/svg"
                  width="10"
                  height="10"
                >
                  <path
                    d="M8.667.186H2.675a.999.999 0 0 0 0 1.998h3.581L.971 7.469a.999.999 0 1 0 1.412 1.412l5.285-5.285v3.58a.999.999 0 1 0 1.998 0V1.186a.999.999 0 0 0-.999-.999Z"
                  />
                </svg>
              </div>
              <div class="text-sm text-gray-300">
                Counter harmful events with our Response AI technology by
                delivering context appropriate resources to your entire
                organization instantly.
              </div>
            </button>
            <button
              :class="
                tab !== '4'
                  ? 'bg-zinc-200 opacity-50 hover:opacity-100 transition'
                  : 'bg-mint-200 border border-gray-900 border-opacity-0 hover:border-mint-300 hover:border-opacity-100 bg-opacity-30 rounded-lg rotate-1'
              "
              class="text-left px-4 py-5 border border-transparent rounded"
              @click.prevent
              @click="tab = '4'"
            >
              <div class="flex items-center justify-between mb-1">
                <div class="font-inter-tight font-semibold text-gray-300">
                  Data Insights and Protection
                </div>
                <svg
                  :class="tab !== '4' ? 'hidden' : ''"
                  class="fill-mint-400 shrink-0 ml-2"
                  xmlns="http://www.w3.org/2000/svg"
                  width="10"
                  height="10"
                >
                  <path
                    d="M8.667.186H2.675a.999.999 0 0 0 0 1.998h3.581L.971 7.469a.999.999 0 1 0 1.412 1.412l5.285-5.285v3.58a.999.999 0 1 0 1.998 0V1.186a.999.999 0 0 0-.999-.999Z"
                  />
                </svg>
              </div>
              <div class="text-sm text-gray-300">
                Secure your mental health data while maximizing benefits to save
                hundreds of hours of your time.
              </div>
            </button>
          </div>
          <!-- Tabs items -->
          <div
            class="relative lg:max-w-none [mask-image:linear-gradient(white_0%,white_calc(100%-40px),_transparent_calc(100%-1px))] -mx-6"
          >
            <div class="relative flex flex-col pt-12 md:pt-20 mx-6">
              <!-- Item 1 -->
              <transition
                enter-active-class="transition ease-in-out duration-700 transform order-first"
                enter-from-class="opacity-0 -translate-y-4"
                enter-to-class="opacity-100 translate-y-0"
                leave-active-class="transition ease-in-out duration-300 transform absolute"
                leave-from-class="opacity-100 translate-y-0"
                leave-to-class="opacity-0 translate-y-4"
              >
                <div class="w-full text-center" v-show="tab === '1'">
                  <div class="inline-flex relative align-top">
                    <img
                      class="rounded-t-lg border border-transparent box-content shadow-xl"
                      src="../images/feat-1.png"
                      width="700"
                      height="360"
                      alt="Feature 01"
                    />
                    <!-- <img class="absolute top-0 left-full -translate-x-[70%] -mr-20 max-md:w-[45%]" src="../images/feature-illustration.png" width="273" height="288" alt="Illustration" aria-hidden="true"> -->
                  </div>
                </div>
              </transition>
              <!-- Item 2 -->
              <transition
                enter-active-class="transition ease-in-out duration-700 transform order-first"
                enter-from-class="opacity-0 -translate-y-4"
                enter-to-class="opacity-100 translate-y-0"
                leave-active-class="transition ease-in-out duration-300 transform absolute"
                leave-from-class="opacity-100 translate-y-0"
                leave-to-class="opacity-0 translate-y-4"
              >
                <div class="w-full text-center" v-show="tab === '2'">
                  <div class="inline-flex relative align-top">
                    <img
                      class="rounded-t-lg border border-transparent box-content shadow-xl"
                      src="../images/feat-2.png"
                      width="700"
                      height="360"
                      alt="Feature 02"
                    />
                  </div>
                </div>
              </transition>
              <!-- Item 3 -->
              <transition
                enter-active-class="transition ease-in-out duration-700 transform order-first"
                enter-from-class="opacity-0 -translate-y-4"
                enter-to-class="opacity-100 translate-y-0"
                leave-active-class="transition ease-in-out duration-300 transform absolute"
                leave-from-class="opacity-100 translate-y-0"
                leave-to-class="opacity-0 translate-y-4"
              >
                <div class="w-full text-center" v-show="tab === '3'">
                  <div class="inline-flex relative align-top">
                    <img
                      class="rounded-t-lg border border-transparent box-content shadow-xl"
                      src="../images/feat-3.png"
                      width="700"
                      height="360"
                      alt="Feature 03"
                    />
                  </div>
                </div>
              </transition>
              <!-- Item 4 -->
              <transition
                enter-active-class="transition ease-in-out duration-700 transform order-first"
                enter-from-class="opacity-0 -translate-y-4"
                enter-to-class="opacity-100 translate-y-0"
                leave-active-class="transition ease-in-out duration-300 transform absolute"
                leave-from-class="opacity-100 translate-y-0"
                leave-to-class="opacity-0 translate-y-4"
              >
                <div class="w-full text-center" v-show="tab === '4'">
                  <div class="inline-flex relative align-top">
                    <img
                      class="rounded-t-lg border border-transparent box-content shadow-xl"
                      src="../images/feat-4.png"
                      width="700"
                      height="360"
                      alt="Feature 04"
                    />
                  </div>
                </div>
              </transition>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
