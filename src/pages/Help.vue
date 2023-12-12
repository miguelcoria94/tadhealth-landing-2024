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

      <div class="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div class="pt-32 pb-12 md:pt-40 md:pb-20">
          <div x-data="{ page: '1' }" class="flex flex-col md:flex-row">
            <!-- Main content -->
            <main class="md:flex-auto md:pl-10 order-1" data-aos="fade-up">
              <!-- FAQ’s – Frequently Asked Questions -->
              <div v-show="page === '1'">
                <div class="mb-8">
                  <h2 class="h2 mb-4">FAQ’s – Frequently Asked Questions</h2>
                  <p class="text-gray-300">
                    Last updated -
                    <span class="text-green-600">June 30, 2020</span>
                  </p>
                </div>
                <ul class="-my-4">
                  <li class="py-4">
                    <h4 class="text-xl font-medium mb-2">
                      How can I use TadHealth without registration?
                    </h4>
                    <p class="text-lg text-gray-300">
                      TadHealth is only available to organizations with a
                      licensed subscription. If you are interested in providing
                      better access to mental health resources send us a note
                      from the contact us page.
                    </p>
                  </li>
                  <li class="py-4">
                    <h4 class="text-xl font-medium mb-2">
                      Can I embed TadHealth into my organization?
                    </h4>
                    <p class="text-lg text-gray-300">
                      Our mental health applications and system can be
                      integrated into any system for easy onboarding and use
                      cases related to helping organize mental health resources
                      in your ecosystem.
                    </p>
                  </li>
                  <li class="py-4">
                    <h4 class="text-xl font-medium mb-2">
                      How can I purchase TadHealth?
                    </h4>
                    <p class="text-lg text-gray-300">
                      TadHealth is licensed through verified vendors and via any
                      organization interested in increasing access to mental
                      health resources and information.
                    </p>
                  </li>
                  <li class="py-4">
                    <h4 class="text-xl font-medium mb-2">
                      Is TadHealth HIPAA Compliant?
                    </h4>
                    <p class="text-lg text-gray-300">
                      TadHealth is a fully encrypted platform and HIPPA
                      compliant protecting users at all times. Data is stored
                      securely and in accordance with HIPPA and FERPA
                      regulations.
                    </p>
                  </li>
                  <li class="py-4">
                    <h4 class="text-xl font-medium mb-2">
                      Can I cancel my subscription at any time?
                    </h4>
                    <p class="text-lg text-gray-300">
                      TadHealth is licensed on a per contract basis with
                      specific terms. If you are interested in a subscription to
                      our services please head over to our contact us page.
                    </p>
                  </li>
                  <li class="py-4">
                    <h4 class="text-xl font-medium mb-2">
                      Is there an additional discount when paid annually?
                    </h4>
                    <p class="text-lg text-gray-300">
                      Our discounts are based on the level of access to mental
                      health resources integrated into your system.
                    </p>
                  </li>
                  <li class="py-4">
                    <h4 class="text-xl font-medium mb-2">
                      What happens if I don’t renew my license after one year?
                    </h4>
                    <p class="text-lg text-gray-300">
                      All contracts are setup annually or monthly depending on
                      the level of service accessed. You can cancel accordingly.
                    </p>
                  </li>
                  <li class="py-4">
                    <h4 class="text-xl font-medium mb-2">
                      What kind of payment methods do you provide?
                    </h4>
                    <p class="text-lg text-gray-300">
                      TadHealth accepts payments via digital invoice or by
                      check. Standard payment via credit card or ACH transfers
                      are available.
                      <b
                        >We take checks payable to 2618 San Miguel Drive Suite
                        501, Newport Beach, CA 92660.</b
                      >
                    </p>
                  </li>
                </ul>
              </div>

              <!-- What is Open PRO -->
              <div v-show="page === '2'">
                <div class="mb-8">
                  <h2 class="h2 mb-4">What is TadHealth</h2>
                  <p class="text-gray-300">
                    Last updated -
                    <span class="text-green-600">June 30, 2020</span>
                  </p>
                </div>
                <ul class="-my-4">
                  <li class="py-4">
                    <h4 class="text-xl font-medium mb-2">
                      How do I login to TadHealth?
                    </h4>
                    <p class="text-lg text-gray-300">
                      TadHealth is available via your licensed organization and
                      credentials presented by your organization.
                    </p>
                  </li>
                  <li class="py-4">
                    <h4 class="text-xl font-medium mb-2">
                      Can I import my resources into TadHealth?
                    </h4>
                    <p class="text-lg text-gray-300">
                      Our software is built for you to create, access, and share
                      resources and the platform allows you to easily upload
                      mental health resources and content.
                    </p>
                  </li>
                  <li class="py-4">
                    <h4 class="text-xl font-medium mb-2">
                      How can I switch my subscription between essential, and
                      premium plans?
                    </h4>
                    <p class="text-lg text-gray-300">
                      You can upgrade your subscription at any time. Please
                      contact your onboarding representative.
                    </p>
                  </li>
                  <li class="py-4">
                    <h4 class="text-xl font-medium mb-2">
                      Is there an additional discount when paid annually?
                    </h4>
                    <p class="text-lg text-gray-300">
                      All platform packages are discounted upfront when paid
                      annually.
                    </p>
                  </li>
                  <li class="py-4">
                    <h4 class="text-xl font-medium mb-2">
                      What do active mental health resources mean?
                    </h4>
                    <p class="text-lg text-gray-300">
                      TadHealth smart resources are embedded into your
                      organization's website giving you insights on how to
                      optimize your population’s mental health.
                    </p>
                  </li>
                  <li class="py-4">
                    <h4 class="text-xl font-medium mb-2">
                      What kind of payment methods do you provide?
                    </h4>
                    <p class="text-lg text-gray-300">
                      TadHealth accepts payments via digital invoice or by
                      check. Standard payment via credit card or ACH transfers
                      are available. We take checks payable to 2618 San Miguel
                      Drive Suite 501, Newport Beach, CA 92660.
                    </p>
                  </li>
                  <li class="py-4">
                    <h4 class="text-xl font-medium mb-2">
                      What kind of content do you provide?
                    </h4>
                    <p class="text-lg text-gray-300">
                      Tadhealth premium content comes from our verified
                      professionals, creators, and companies like us that are
                      built to improve mental health care access.
                    </p>
                  </li>
                </ul>
              </div>

              <!-- Open PRO plan’s features -->
              <div v-show="page === '3'">
                <div class="mb-8">
                  <h2 class="h2 mb-4">Get started</h2>
                  <p class="text-gray-300">
                    Last updated -
                    <span class="text-green-600">June 30, 2020</span>
                  </p>
                </div>
                <ul class="-my-4">
                  <li class="py-4">
                    <h4 class="text-xl font-medium mb-2">
                      How do I get started?
                    </h4>
                    <p class="text-lg text-gray-300">
                      Simply fill out a demo request form, select a package, and
                      activate the mental health resource platform. <a></a>
                    </p>
                  </li>
                  <li class="py-4">
                    <h4 class="text-xl font-medium mb-2">
                      How quickly can I get access for my organization?
                    </h4>
                    <p class="text-lg text-gray-300">
                      Our team can get your mental health resource system up and
                      running within a few weeks.
                    </p>
                  </li>
                  <li class="py-4">
                    <h4 class="text-xl font-medium mb-2">
                      Can you license individual services?
                    </h4>
                    <p class="text-lg text-gray-300">
                      TadHealth offers individual API access. Please contact our
                      team for more information on embedding our resources in
                      your website.
                    </p>
                  </li>
                  <li class="py-4">
                    <h4 class="text-xl font-medium mb-2">
                      Can I add additional services later?
                    </h4>
                    <p class="text-lg text-gray-300">
                      You can upgrade your system at any point in time to
                      include new features, resources, and content on your
                      mental health management platform.
                    </p>
                  </li>
                </ul>
              </div>

              <!-- Get started -->
              <div v-show="page === '4'">
                <div class="mb-8">
                  <h2 class="h2 mb-4">Get started</h2>
                  <p class="text-gray-300">
                    Last updated -
                    <span class="text-green-600">June 30, 2020</span>
                  </p>
                </div>
                <ul class="-my-4">
                  <li class="py-4">
                    <h4 class="text-xl font-medium mb-2">
                      How can I use Open PRO without registration?
                    </h4>
                    <p class="text-lg text-gray-300">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Quis enim lobortis scelerisque fermentum.
                    </p>
                  </li>
                  <li class="py-4">
                    <h4 class="text-xl font-medium mb-2">
                      Can I import my sitemap to Open PRO?
                    </h4>
                    <p class="text-lg text-gray-300">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Quis enim lobortis scelerisque fermentum.
                    </p>
                  </li>
                  <li class="py-4">
                    <h4 class="text-xl font-medium mb-2">
                      How can I switch my subscription between essential, and
                      premium plans?
                    </h4>
                    <p class="text-lg text-gray-300">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Quis enim lobortis scelerisque fermentum.
                    </p>
                  </li>
                  <li class="py-4">
                    <h4 class="text-xl font-medium mb-2">
                      Can I cancel my subscription at any time?
                    </h4>
                    <p class="text-lg text-gray-300">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Quis enim lobortis scelerisque fermentum.
                    </p>
                  </li>
                  <li class="py-4">
                    <h4 class="text-xl font-medium mb-2">
                      Is there an additional discount when paid annually?
                    </h4>
                    <p class="text-lg text-gray-300">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Quis enim lobortis scelerisque fermentum.
                    </p>
                  </li>
                  <li class="py-4">
                    <h4 class="text-xl font-medium mb-2">
                      What happens if I don’t renew my license after one year?
                    </h4>
                    <p class="text-lg text-gray-300">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Quis enim lobortis scelerisque fermentum.
                    </p>
                  </li>
                  <li class="py-4">
                    <h4 class="text-xl font-medium mb-2">
                      What kind of payment methods do you provide?
                    </h4>
                    <p class="text-lg text-gray-300">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Quis enim lobortis scelerisque fermentum.
                    </p>
                  </li>
                </ul>
              </div>

              <!-- Payments FAQ’s -->
              <div v-show="page === '5'">
                <div class="mb-8">
                  <h2 class="h2 mb-4">Payments FAQ’s</h2>
                  <p class="text-gray-300">
                    Last updated -
                    <span class="text-green-600">June 30, 2020</span>
                  </p>
                </div>
                <ul class="-my-4">
                  <li class="py-4">
                    <h4 class="text-xl font-medium mb-2">
                      How can I use Open PRO without registration?
                    </h4>
                    <p class="text-lg text-gray-300">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Quis enim lobortis scelerisque fermentum.
                    </p>
                  </li>
                  <li class="py-4">
                    <h4 class="text-xl font-medium mb-2">
                      Can I import my sitemap to Open PRO?
                    </h4>
                    <p class="text-lg text-gray-300">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Quis enim lobortis scelerisque fermentum.
                    </p>
                  </li>
                  <li class="py-4">
                    <h4 class="text-xl font-medium mb-2">
                      How can I switch my subscription between essential, and
                      premium plans?
                    </h4>
                    <p class="text-lg text-gray-300">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Quis enim lobortis scelerisque fermentum.
                    </p>
                  </li>
                  <li class="py-4">
                    <h4 class="text-xl font-medium mb-2">
                      Can I cancel my subscription at any time?
                    </h4>
                    <p class="text-lg text-gray-300">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Quis enim lobortis scelerisque fermentum.
                    </p>
                  </li>
                  <li class="py-4">
                    <h4 class="text-xl font-medium mb-2">
                      Is there an additional discount when paid annually?
                    </h4>
                    <p class="text-lg text-gray-300">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Quis enim lobortis scelerisque fermentum.
                    </p>
                  </li>
                  <li class="py-4">
                    <h4 class="text-xl font-medium mb-2">
                      What happens if I don’t renew my license after one year?
                    </h4>
                    <p class="text-lg text-gray-300">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Quis enim lobortis scelerisque fermentum.
                    </p>
                  </li>
                  <li class="py-4">
                    <h4 class="text-xl font-medium mb-2">
                      What kind of payment methods do you provide?
                    </h4>
                    <p class="text-lg text-gray-300">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Quis enim lobortis scelerisque fermentum.
                    </p>
                  </li>
                </ul>
              </div>
            </main>

            <!-- Nav sidebar -->
            <aside
              class="md:w-64 mb-16 md:mb-0 md:mr-10 md:shrink-0"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <h4
                class="text-lg font-medium px-3 pb-3 border-b border-gray-800"
              >
                Choose a category
              </h4>
              <nav>
                <ul>
                  <li class="py-2 border-b border-gray-800">
                    <a
                      :class="{ 'text-green-600': page === '1' }"
                      class="flex items-center px-3 group text-gray-300 hover:text-green-600 transition duration-150 ease-in-out"
                      href="#0"
                      @click.prevent="page = '1'"
                    >
                      <span>Frequently Asked Questions</span>
                      <svg
                        class="w-3 h-3 fill-current shrink-0 ml-2 opacity-0 group-hover:opacity-100 group-hover:text-green-600 group-hover:translate-x-1 transition duration-150 ease-in-out transform"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z"
                        />
                      </svg>
                    </a>
                  </li>
                  <li class="py-2 border-b border-gray-800">
                    <a
                      :class="{ 'text-green-600': page === '2' }"
                      class="flex items-center px-3 group text-gray-300 hover:text-green-600 transition duration-150 ease-in-out"
                      href="#0"
                      @click.prevent="page = '2'"
                    >
                      <span>What is TadHealth</span>
                      <svg
                        class="w-3 h-3 fill-current shrink-0 ml-2 opacity-0 group-hover:opacity-100 group-hover:text-green-600 group-hover:translate-x-1 transition duration-150 ease-in-out transform"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z"
                        />
                      </svg>
                    </a>
                  </li>
                  <li class="py-2 border-b border-gray-800">
                    <a
                      :class="{ 'text-green-600': page === '3' }"
                      class="flex items-center px-3 group text-gray-300 hover:text-green-600 transition duration-150 ease-in-out"
                      href="#0"
                      @click.prevent="page = '3'"
                    >
                      <span>Get started</span>
                      <svg
                        class="w-3 h-3 fill-current shrink-0 ml-2 opacity-0 group-hover:opacity-100 group-hover:text-green-600 group-hover:translate-x-1 transition duration-150 ease-in-out transform"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z"
                        />
                      </svg>
                    </a>
                  </li>
                  <!-- <li class="py-2 border-b border-gray-800">
                    <a
                      :class="{ 'text-green-600': page === '4' }"
                      class="flex items-center px-3 group text-gray-300 hover:text-green-600 transition duration-150 ease-in-out"
                      href="#0"
                      @click.prevent="page = '4'"
                    >
                      <span>Get started</span>
                      <svg
                        class="w-3 h-3 fill-current shrink-0 ml-2 opacity-0 group-hover:opacity-100 group-hover:text-green-600 group-hover:translate-x-1 transition duration-150 ease-in-out transform"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z"
                        />
                      </svg>
                    </a>
                  </li> -->
                  <!-- <li class="py-2 border-b border-gray-800">
                    <a
                      :class="{ 'text-green-600': page === '5' }"
                      class="flex items-center px-3 group text-gray-300 hover:text-green-600 transition duration-150 ease-in-out"
                      href="#0"
                      @click.prevent="page = '5'"
                    >
                      <span>Payments FAQ’s</span>
                      <svg
                        class="w-3 h-3 fill-current shrink-0 ml-2 opacity-0 group-hover:opacity-100 group-hover:text-green-600 group-hover:translate-x-1 transition duration-150 ease-in-out transform"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z"
                        />
                      </svg>
                    </a>
                  </li> -->
                </ul>
              </nav>
            </aside>
          </div>
        </div>
      </div>
    </main>

    <!-- Site footer -->
    <Footer />
  </div>
</template>

<script>
import Header from "./../partials/Header.vue";
import PageIllustration from "../partials/PageIllustration.vue";
import Footer from "./../partials/Footer.vue";

export default {
  name: "Help",
  components: {
    Header,
    PageIllustration,
    Footer,
  },
  data: function () {
    return {
      page: "1",
    };
  },
};
</script>
