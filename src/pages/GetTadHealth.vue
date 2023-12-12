<template>
  <div className="flex flex-col min-h-screen overflow-hidden">

    <!-- Site header -->
    <GthHeader />

    <!-- Page content -->
    <main class="grow">

      <GthHero />
      <GthCarousel />
      <Creatives />
      <GthPricing />
      <GthTestimonials />
      <Faqs />
      <Blog />
      <!-- <Inspiration />
      
      <Creatives />
      
      <Testimonials />
    
       -->
      <GthFaq />
      <News />
      <GthCta />

    </main>
    
    <!-- Site footer -->
<GthFooter />
  </div>
</template>

<script>
import GthHeader from '../partials/GthHeader.vue'
import GthHero from '../partials/GthHero.vue'
import GthCarousel from '../partials/GthCarousel.vue'
// import Inspiration from '../partials/Inspiration.vue'
import Creatives from '../partials/Creatives.vue'
import GthPricing from '../partials/GthPricing.vue'
import GthTestimonials from '../partials/GthTestimonials.vue'
import GthFaq from '../partials/GthFaq.vue'
import News from '../partials/News.vue'
import GthCta from '../partials/GthCta.vue'
import GthFooter from '../partials/GthFooter.vue'

export default {
  name: 'Home',
  components: {
    GthHeader,
    GthHero,
    GthCarousel,
    Creatives,
    GthPricing,
    GthTestimonials,
    GthFaq,
    News,
    GthFooter,
    GthCta
  },
}
</script>