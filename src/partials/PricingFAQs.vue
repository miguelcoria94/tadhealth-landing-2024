<template>
  <section class="relative pt-10 pb-10 relative">
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <div class="py-12 md:py-20">
        <!-- Section header -->
        <div class="max-w-3xl mx-auto text-center pb-12 md:pb-20">
          <span
            class="text-xs font-semibold text-mint-500 uppercase mb-4 inline-block"
            >SUPPORT
          </span>
          <h2 class="h2 font-red-hat-display mb-4">
            Frequently asked questions
          </h2>
          <p class="text-xl text-gray-300 dark:text-gray-300">
            Everything you need to know about TadHealth pricing.
          </p>
        </div>

        <div class="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
          <div>
            <div v-for="(faq, index) in faqs.slice(0, 5)" :key="index">
              <LighAccordion
                :title="faq.title"
                :id="`faqs-${index}`"
                :active="faq.active"
              >
                {{ faq.text }}
              </LighAccordion>
            </div>
          </div>
          <div>
            <div v-for="(faq, index) in faqs.slice(5, 10)" :key="index + 5">
              <LighAccordion
                :title="faq.title"
                :id="`faqs-${index + 5}`"
                :active="faq.active"
              >
                {{ faq.text }}
              </LighAccordion>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { ref } from "vue";
import LighAccordion from "./LighAccordion.vue";
export default {
  name: "PricingFAQs",
  components: {
    LighAccordion,
  },
  data() {
    return {
      faqs: [
        {
          title: "What do I get for signing up?",
          text: "Access to a new network of information, resources, and partners.",
          active: false,
        },
        {
          title: "What does access mean?",
          text: "Whether you are a school, district, or organization joining the platform you grow your reach of resources with new engagement metrics and insights you never had before.",
          active: false,
        },
        {
          title: "What does premium mean?",
          text: "TadHealth has created an internal community that can be leveraged to your advantage to expand and develop your communities while having a lasting impact on the world.",
          active: false,
        },
        {
          title: "What does a wellness experience mean?",
          text: "TadHealth has created an internal digital platform and community of resources that can be leveraged to your advantage to expand and develop your connectedness so individuals can thrive.",
          active: true,
        },
        {
          title: "How does it work?",
          text: "Simply request a demo and from there we will work with you to find the right package, and access so you can grow your impact for mental health.",
          active: false,
        },
        {
          title: "Does TadHealth provide clinicians?",
          text: "We offer a localized network of clinical mental health experts and availability depending on your location so you can measure your needs and impact in real-time.",
          active: false,
        },
      ],
    };
  },
};
</script>
