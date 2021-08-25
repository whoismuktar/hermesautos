<template>
  <div class="sell">
    <page-hero :carImg="hero.carImg" :intro="hero.intro" :title="hero.title" :subtitle="hero.subtitle" :vinCard="hero.vinCard" />
    <section class="lightBG">
        <review-carousel :reviews="salesReview" />
    </section>

    <section class="py-12">
      <tab-view :tabs="sellingPoint" />
    </section>
  </div>
</template>

<script>
import pageHero from '../components/pageHero'
import reviewCarousel from '../components/reviewCarousel'
import tabView from '../components/tabView'

export default {
    components: {
        tabView,
        pageHero,
        reviewCarousel
    },
    data: () => ({
      hero: {
        carImg: require('../assets/img/gle-benz.png'),
        intro: "SELL OR TRADE IN",
        title: "Get Cash for Your Car",
        subtitle: "Free Pickup. Quick and Easy Process.",
        vinCard: true
      },
      salesReview: [
        {
          content: "1 Really good customer service. It was fast and easy to get financed and the vehicle I got was at a good price. Two thumbs up!",
          author: "Author 1",
        },
        {
          content: "2 Really good customer service. It was fast and easy to get financed and the vehicle I got was at a good price. Two thumbs up!",
          author: "Author 2",
        },
        {
          content: "3 Really good customer service. It was fast and easy to get financed and the vehicle I got was at a good price. Two thumbs up!",
          author: "Author 3",
        },
        {
          content: "4 Really good customer service. It was fast and easy to get financed and the vehicle I got was at a good price. Two thumbs up!",
          author: "Author 4",
        },
      ],
      sellingPoint: [
        {
            title: "Apply in Minutes",
            content: "Apply online in as few as 5 minutes. We'll respond quickly with your financing information.",
        },
        {
            title: "Highly Competitive Rates",
            content: "Our 12+ banks and lending partners will compete with each other to get you a low rate.",
        },
        {
            title: "Easy Registration",
            content: "When you finance with Vroom, we will register your vehicle on your behalf and mail your registration and plates to you.",
        }
      ],
    })
}
</script>

<style>

</style>