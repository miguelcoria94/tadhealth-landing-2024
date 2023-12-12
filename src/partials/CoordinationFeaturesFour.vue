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
            Everything you need to know about the product and billing.
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
  name: "CoordinationFeaturesFour",
  components: {
    LighAccordion,
  },
  data() {
    return {
      faqs: [
        {
          title: "Can I use the product for free?",
          text: "Absolutely! Grey allows you to create as many commercial graphics/images as you like, for yourself or your clients.",
          active: false,
        },
        {
          title: "What payment methods can I use?",
          text: "Absolutely! Grey allows you to create as many commercial graphics/images as you like, for yourself or your clients.",
          active: false,
        },
        {
          title: "Can I change from monthly to yearly billing?",
          text: "Absolutely! Grey allows you to create as many commercial graphics/images as you like, for yourself or your clients.",
          active: false,
        },
        {
          title:
            "Can I use the tool for personal, client, and commercial projects?",
          text: "Absolutely! Grey allows you to create as many commercial graphics/images as you like, for yourself or your clients.",
          active: true,
        },
        {
          title: "How can I ask other questions about pricing?",
          text: "Absolutely! Grey allows you to create as many commercial graphics/images as you like, for yourself or your clients.",
          active: false,
        },
        {
          title: "Do you offer discount for students and no-profit companies?",
          text: "Absolutely! Grey allows you to create as many commercial graphics/images as you like, for yourself or your clients.",
          active: false,
        },
      ],
    };
  },
};
</script>
