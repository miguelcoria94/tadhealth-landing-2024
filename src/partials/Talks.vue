<template>
  <section>
    <h2 class="font-aspekta text-xl font-[650] mb-5">Featured Podcasts</h2>

    <!-- Cards -->
    <div class="grid sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-5">
      <a class="relative aspect-video rounded-lg overflow-hidden bg-gradient-to-tr from-slate-800 to-slate-700 odd:rotate-1 even:-rotate-1 hover:rotate-0 transition-transform duration-700 hover:duration-100 ease-in-out shadow-xl" href="https://open.spotify.com/episode/69Ro2b7oJzVT8iHEUPDikU?si=fa01e94e6c79452f&nd=1" target="_blank">
        <img class="absolute inset-0 w-full h-full object-cover opacity-40" src="../images/benmm.jpeg" width="336" height="230" alt="Popular post 01" />
        <div class="h-full relative flex flex-col items-start justify-between before:mt-auto before:flex-1 p-5">
          <div class="flex-1 flex items-center text-lg font-aspekta text-white font-[650]">Episode 51 - Ben Greiner</div>
          <div class="flex-1 w-full flex justify-end items-end">
            <svg xmlns="http://www.w3.org/2000/svg" width="41" height="41">
              <circle class="fill-white" cx="20" cy="20" r="20" fill-opacity=".88" />
              <path class="fill-sky-500" d="m24.765 19.5-6.263-4.375a.626.626 0 0 0-1.002.5v8.75c0 .5.564.812 1.002.5l6.263-4.375a.65.65 0 0 0 0-1Z" />
            </svg>
          </div>
        </div>
      </a>
      <a class="relative aspect-video rounded-lg overflow-hidden bg-gradient-to-tr from-slate-800 to-slate-700 odd:rotate-1 even:-rotate-1 hover:rotate-0 transition-transform duration-700 hover:duration-100 ease-in-out shadow-xl" href="https://open.spotify.com/episode/7E74PTEeO8T1EuuwFUhJPK?si=14b2966007fb492b&nd=1" target="_blank">
        <img class="absolute inset-0 w-full h-full object-cover opacity-40" src="../images/mhpben.jpeg" width="336" height="189" alt="Popular post 02" />
        <div class="h-full relative flex flex-col items-start justify-between before:mt-auto before:flex-1 p-5">
          <div class="flex-1 flex items-center text-lg font-aspekta text-white font-[650]">#82- TadHealth (with Ben Greiner)</div>
          <div class="flex-1 w-full flex justify-end items-end">
            <svg xmlns="http://www.w3.org/2000/svg" width="41" height="41">
              <circle class="fill-white" cx="20" cy="20" r="20" fill-opacity=".88" />
              <path class="fill-sky-500" d="m24.765 19.5-6.263-4.375a.626.626 0 0 0-1.002.5v8.75c0 .5.564.812 1.002.5l6.263-4.375a.65.65 0 0 0 0-1Z" />
            </svg>
          </div>
        </div>
      </a>
    </div>

  </section>
</template>

<script>
export default {
  name: 'Talks',
}
</script>