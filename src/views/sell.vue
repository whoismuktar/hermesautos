<template>
  <div class="sell">
    <page-hero :carImg="hero.carImg" :intro="hero.intro" :title="hero.title" :subtitle="hero.subtitle" :cta="hero.cta" :ctaAction="hero.ctaAction" />
  </div>
</template>

<script>
import pageHero from '../components/pageHero.vue'
export default {
    components: {
        pageHero
    },
    data: () => ({
      hero: {
        carImg: require('../assets/img/gle-benz.png'),
        intro: "FINANCE WITH Hermes Autos",
        title: "Your Low Rate Awaits",
        subtitle: "Apply in Minutes. Get Approved Fast. Highly Competitive Rates.",
        cta: "Apply Now",
        ctaAction: "",
      },
    })
}
</script>

<style>

</style>