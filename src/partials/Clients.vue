<template>
  <section>
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <div class="py-12 md:py-20 border-t border-gray-800">
        <!-- Section header -->
        <div class="max-w-3xl mx-auto text-center pb-12 md:pb-16">
          <h1 class="h2 mb-4">Who we work with</h1>
          <p class="text-xl text-gray-300">
            TadHealth works with organizations who are reaching new audiences,
            establishing available resources, and need to provide access to care
            for students, employees, and members.
          </p>
        </div>

        <!-- Items -->
        <div class="grid gap-2 grid-cols-2 md:grid-cols-4" data-aos-id-clients>
          <!-- Item -->
          <div
            class="flex items-center justify-center h-24 border border-gray-700 p-2"
            data-aos="fade-up"
            data-aos-anchor="[data-aos-id-clients]"
          >
            <img
              class="max-w-full fill-current text-gray-300"
              width="124"
              height="24"
              src="../images/save.png"
            />
          </div>

          <!-- Item -->
          <div
            class="flex items-center justify-center h-24 border border-gray-700 p-2"
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-anchor="[data-aos-id-clients]"
          >
            <img
              class="max-w-full fill-current text-gray-300"
              width="154"
              height="24"
              src="../images/ttp.png"
            />
          </div>

          <!-- Item -->
          <div
            class="flex items-center justify-center h-24 border border-gray-700 p-2"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-anchor="[data-aos-id-clients]"
          >
            <img
              class="max-w-full fill-current text-gray-300"
              width="144"
              height="24"
              src="../images/bhhs.png"
            />
          </div>

          <!-- Item -->
          <div
            class="flex items-center justify-center h-24 border border-gray-700 p-2"
            data-aos="fade-up"
            data-aos-delay="300"
            data-aos-anchor="[data-aos-id-clients]"
          >
            <img
              class="max-w-full fill-current text-gray-300"
              width="164"
              height="54"
              src="../images/mmgray.png"
            />
          </div>

          <!-- Item -->
          <div
            class="flex items-center justify-center h-24 border border-gray-700 p-2"
            data-aos="fade-up"
            data-aos-delay="400"
            data-aos-anchor="[data-aos-id-clients]"
          >
            <img
              class="max-w-full fill-current text-gray-300"
              width="154"
              height="54"
              src="../images/bhu.png"
            />
          </div>

          <!-- Item -->
          <div
            class="flex items-center justify-center h-24 border border-gray-700 p-2"
            data-aos="fade-up"
            data-aos-delay="500"
            data-aos-anchor="[data-aos-id-clients]"
          >
            <img
              class="max-w-full fill-current text-gray-300"
              width="194"
              height="54"
              src="../images/ca.png"
            />
          </div>

          <!-- Item -->
          <div
            class="flex items-center justify-center h-24 border border-gray-700 p-2"
            data-aos="fade-up"
            data-aos-delay="600"
            data-aos-anchor="[data-aos-id-clients]"
          >
            <img
              class="max-w-full fill-current text-gray-300"
              width="164"
              height="54"
              src="../images/pp.png"
            />
          </div>

          <!-- Item -->
          <div
            class="flex items-center justify-center h-24 border border-gray-700 p-2"
            data-aos="fade-up"
            data-aos-delay="700"
            data-aos-anchor="[data-aos-id-clients]"
          >
            <img
              class="max-w-full fill-current text-gray-300"
              width="164"
              height="54"
              src="../images/co.png"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Clients",
};
</script>
