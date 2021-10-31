<template>
  <div class="finance">
    <page-hero
      :carImg="hero.carImg"
      :intro="hero.intro"
      :title="hero.title"
      :subtitle="hero.subtitle"
      :cta="hero.cta"
      :ctaAction="hero.ctaAction"
    />
    <section class="lightBG">
      <review-carousel :reviews="financeReview" />
    </section>

    <section class="py-12">
      <tab-view :tabs="sellingPoint" />
    </section>

    <hr class="my-12" />

    <section>
      <v-container>
        <div class="text-center">
          <h2 class="mb-4">Our Lending Partners</h2>
          <div>
            We work with more than a dozen banks and lending partners to get you
            a competitive rate. Here are just a few:
          </div>
        </div>

        <v-row justify="center" align="center" class="mt-0 px-3">
          <v-col
            v-for="(img, index) in financePartners"
            :key="index"
            cols="4"
          >
            <!-- <span> -->
              <v-img
                contain
                width="100%"
                position="center"
                :src="img"
                alt="Hermes Autos popular brands"
              ></v-img>
            <!-- </span> -->
          </v-col>
        </v-row>
      </v-container>
    </section>

    <section>
      <v-container>
        <how-it-works
          :title="howItWorks.title"
          :lists="howItWorks.lists"
          :media="howItWorks.media"
        />
      </v-container>
    </section>

    <hr class="my-12" />

    <footer-question />
  </div>
</template>

<script>
import tabView from "../components/tabView";
import footerQuestion from "../components/footerQuestion";
import pageHero from "../components/pageHero";
import reviewCarousel from "../components/reviewCarousel";
import howItWorks from "../components/howItWorks";
export default {
  components: {
    tabView,
    footerQuestion,
    pageHero,
    reviewCarousel,
    howItWorks,
  },
  data: () => ({
    hero: {
      carImg: require("../assets/img/gle-benz.png"),
      intro: "FINANCE WITH Hermes Autos",
      title: "Your Low Rate Awaits",
      subtitle:
        "Apply in Minutes. Get Approved Fast. Highly Competitive Rates.",
      cta: "Apply Now",
      ctaAction: "",
    },
    howItWorks: {
      title: "How It Works",
      lists: [
        {
          title: "Find Your Ride",
          content:
            "Browse thousands of high-quality, low-mileage vehicles, and find the one that's right for you. Shop Now",
        },
        {
          title: "Get Your Financing Terms",
          content:
            "Click here to apply in minutes. You will need to select a vehicle first to receive exact financing terms.",
        },
        {
          title: "Sign, Pay and Drive",
          content:
            "Finalize your purchase, then schedule your delivery or in-store pickup. If you finance with us, Hermes Autos will register your vehicle on your behalf and mail your registration and plates to you, once your state DMV has prepared them.",
        },
      ],
      media: require("../assets/img/pic.png"),
    },
    model: 0,
    sellingPoint: [
      {
        title: "Apply in Minutes",
        content:
          "Apply online in as few as 5 minutes. We'll respond quickly with your financing information.",
      },
      {
        title: "Highly Competitive Rates",
        content:
          "Our 12+ banks and lending partners will compete with each other to get you a low rate.",
      },
      {
        title: "Easy Registration",
        content:
          "When you finance with Hermes Autos, we will register your vehicle on your behalf and mail your registration and plates to you.",
      },
    ],
    financeReview: [
      {
        content:
          "1 Really good customer service. It was fast and easy to get financed and the vehicle I got was at a good price. Two thumbs up!",
        author: "Author 1",
        date: "2020-10-07",
      },
      {
        content:
          "2 Really good customer service. It was fast and easy to get financed and the vehicle I got was at a good price. Two thumbs up!",
        author: "Author 2",
        date: "2010-11-11",
      },
      {
        content:
          "3 Really good customer service. It was fast and easy to get financed and the vehicle I got was at a good price. Two thumbs up!",
        author: "Author 3",
        date: "2008-04-21",
      },
      {
        content:
          "4 Really good customer service. It was fast and easy to get financed and the vehicle I got was at a good price. Two thumbs up!",
        author: "Author 4",
        date: "2021-05-14",
      },
    ],
    financePartners: [
      require("../assets/img/pic.png"),
      require("../assets/img/pic.png"),
      require("../assets/img/pic.png"),
      require("../assets/img/pic.png"),
      require("../assets/img/pic.png"),
      require("../assets/img/pic.png"),
    ],
  }),
};
</script>

<style scoped>
</style>