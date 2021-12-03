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
          <h2 class="mb-4 font-x3b">Our Lending Partners</h2>
          <div>
            We work with over a dozen partners to find you a great deal on your ideal automobile at an affordable rate. 
          </div>
        </div>

        <v-row justify="center" align="center" class="mt-0 px-3">
          <v-col
            v-for="(img, index) in financePartners"
            :key="index"
            cols="12"
            sm="2"
          >
            <!-- <span> -->
              <v-img
                contain
                width="200"
                max-width="100%"
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
      title: "Buy Your Dream Car With Ease",
      subtitle:
        "Financing with Hermes Autos; makes buying the car of your dreams a lot easier. You can explore our exclusive vehicle inventory just for you after pre-qualifying for Hermes Autos Vehicle Finance.",
      cta: "Apply Now",
      ctaAction: "",
    },
    howItWorks: {
      title: "How It Works",
      lists: [
        {
          title: "Look for a Ride",
          content:
            "Find the vehicle that's right for you among thousands of high-quality, low-mileage vehicles.",
        },
        {
          title: "Get Your Financing Offers",
          content:
            "Apply in minutes, click here. To receive precise financing offers, you must first choose a vehicle.",
        },
        {
          title: "Accept Offer, Pay and Drive",
          content:
            "Finalize your purchase as soon as you accept our Financing Offer. Pay the 30% initial contribution and start driving your dream Car.",
        },
      ],
      media: require("../assets/img/pic.png"),
    },
    model: 0,
    sellingPoint: [
      {
        title: "Apply in Minutes",
        content:
          "Apply online in as little as 5 minutes. We'll get back to you right away with your financing options.",
      },
      {
        title: "Incredibly Low Rates",
        content:
          "We work with a network of partners around the country to ensure you get the best rates possible.",
      },
      {
        title: "Easy Registration",
        content:
          "We will handle the vehicle registration and insurance process on your behalf when you finance with Hermes Autos.",
      },
    ],
    financeReview: [
      {
        author: "John Nwagwu",
        content: "Hermes Autos Finance provided better financing than most commercial banks. The delivery was simple and painless, and the entire process was completed in a flash.",
        date: "2020-10-07",
      },
      {
        author: "Hamed Yusuf",
        content: "Customer service is outstanding. The financing process was quick and simple, and the vehicle I purchased was reasonably priced.",
        date: "2010-11-11",
      },
      {
        author: "Erica Johnson",
        content: "The vehicle is exactly as stated; the purchasing procedure was straightforward, and the financing options were fantastic.",
        date: "2008-04-21",
      },
      {
        author: "Yemi Adebola",
        content: "I needed to upgrade our vehicles as a business owner; therefore I looked for a firm that could do it in a straightforward and quick manner. After only a few incredibly simple questions, Hermes Autos Finance took care of everything for me.",
        date: "2021-08-14",
      },
    ],
    financePartners: [
      require("../assets/img/zenith_bank.png"),
      require("../assets/img/copart.png"),
      require("../assets/img/IAAI.jpeg"),
      require("../assets/img/MANHEIM.png"),
      require("../assets/img/Grimaldi_lines.png"),
      require("../assets/img/Msc.jpeg"),
    ],
  }),
};
</script>

<style scoped>
</style>