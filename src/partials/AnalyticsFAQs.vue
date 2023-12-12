<template>
  <section class="relative relative">
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
  name: "SafetyFeaturesThree",
  components: {
    LighAccordion,
  },
  data() {
    return {
      faqs: [
        {
          title: "How does TadHealth make sure my data is secure?",
          text: "Absolutely! TadHealth has been built to deliver infrastructure as a service meaning only you keep track of your data. We use multiple levels of encryption and in case of an audit we will work with authorities and the respective organization in that situation. ",
          active: false,
        },
        {
          title: "What do analytics give me?",
          text: "Insights and trends from using the platform grow your impact and analytics which get surfaced through different levels of access depending on the role of the user. For example a clinical professional has very different data access then a general administrator. ",
          active: false,
        },
        {
          title: "Can I use these analytics to access funding directly?",
          text: "We work with your team to produce the right metrics aligned with your organization goals, various legislation, and other grants to make sure you know all the funding possibilities at any given time. ",
          active: false,
        },
        {
          title: "How do you make sure you track the right analytics?",
          text: "Based on the tools you choose for your organization the platform functions automatically track the right data you need. ",
          active: true,
        },
        {
          title: "Can I see more trends and data than just my organization?",
          text: "Yes! The platform can anonymize different trends that only you send to us which allows you to see how other organizations are approaching mental health in their organization. ",
          active: false,
        },
        {
          title: "Do you offer analytics for free?",
          text: "Currently we do not. We are working on a feed to show you the general trends and insights from various organizations. If you are interested in this information please reach out to our team! ",
          active: false,
        },
      ],
    };
  },
};
</script>
