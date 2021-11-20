<template>
  <div class="sell">
    <page-hero
      :carImg="hero.carImg"
      :intro="hero.intro"
      :title="hero.title"
      :subtitle="hero.subtitle"
      :vinCard="hero.vinCard"
    />
    <section class="lightBG">
      <review-carousel :reviews="salesReview" />
    </section>

    <section class="py-12">
      <tab-view :tabs="sellingPoint" />
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

    <section class="pb-12">
      <v-container>
        <div class="font-x2b">Trade In and Save</div>
        <v-row>
          <v-col cols="6">
            <b>How Trading In Works</b>

            <ol>
              <li class="st-Li">Get an instant price for your trade-in</li>
              <li class="st-Li">Find your next ride on Hermes Autos</li>
              <li class="st-Li">
                Apply the value of your trade-in to your purchase or down
                payment
              </li>
              <li class="st-Li">
                Potentially save thousands in sales tax (see example)
              </li>
            </ol>
          </v-col>

          <v-col cols="6">
            <b>How You Can Save</b>

            <div>
              You may be eligible to pay much less in sales tax by trading in.
              How much you save depends on your state’s sales tax rate and the
              value of your trade-in.
            </div>

            <div class="d-flex align-center">
              <div>
                <div>
                  <v-icon color="primary">drive_eta</v-icon>
                  <span class="font-x4b">$10,000</span>
                </div>
                <div class="font-tiny text-uppercase">
                  <b>Our pricing for your car</b>
                </div>
              </div>
              <div class="mx-2">
                <v-icon color="primary">clear</v-icon>
              </div>
              <div>
                <div class="d-flex align-center">
                  <v-icon color="primary">public</v-icon>
                  <span class="font-x4b">10%</span>
                </div>
                <div class="font-tiny text-uppercase">
                  <b>State price rate</b>
                </div>
              </div>
              <div>
                <font-awesome-icon
                  icon="equals"
                  :color="'var(--v-primary-base)'"
                  class="mx-2"
                />
              </div>
              <div>
                <div class="d-flex align-center">
                  <font-awesome-icon
                    icon="piggy-bank"
                    :color="'var(--v-primary-base)'"
                    class="mr-1"
                  />
                  <span class="font-x4b">1000</span>
                </div>
                <div class="font-tiny text-uppercase">
                  <b>Saved in Taxes</b>
                </div>
              </div>
            </div>
          </v-col>
        </v-row>
      </v-container>

      <div class="text-center my-12">
        <v-btn depressed color="primary">Start Your Trade In</v-btn>
      </div>
    </section>

    <hr class="mb-12" />

    <section>
      <store-location />
    </section>
  </div>
</template>

<script>
import pageHero from "../components/pageHero";
import reviewCarousel from "../components/reviewCarousel";
import tabView from "../components/tabView";
import howItWorks from "../components/howItWorks";
import storeLocation from "../components/storeLocation";

export default {
  components: {
    tabView,
    pageHero,
    reviewCarousel,
    howItWorks,
    storeLocation,
  },
  data: () => ({
    hero: {
      carImg: require("../assets/img/gle-benz.png"),
      intro: "SELL OR TRADE IN",
      title: "Get Cash for Your Car",
      subtitle: "Free Pickup. Quick and Easy Process.",
      vinCard: true,
    },
    salesReview: [
      {
        author: "Olumide Adewale",
        content: "It was an incredibly simple and easy procedure! I wish I had another vehicle to offer for sale.",
      },
      {
        author: "Abdullah Yusuf",
        content: "From start to finish, your customer service, communication updates, and overall procedure are all 5 stars. Thank you very much!",
      },
      {
        author: "Cynthia Nwoke",
        content: "The procedure was easy to follow, and the delivery was quick. It was easy and straightforward to get rid of my old car.",
      },
      {
        author: "Tunde Peters",
        content: "My experience with Hermes Autos was as easy as it could be. They provided me with a quote fast, and once I accepted it, the process proceeded along quickly and smoothly. If you're wanting to sell your car, I highly recommend using the service!",
      },
    ],
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
    howItWorks: {
      title: "How It Works",
      lists: [
        {
          title: "Find Your Ride",
          content:
            "Browse thousands of high-quality, low-mileage vehicles, and find the one that's right for you. Shop Now",
          innerLists: [
            "License Plate or VIN",
            "Trim (LE, SE, SLT, etc)",
            "Exact mileage",
            "Vehicle condition",
            "Vehicle history",
          ],
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
  }),
};
</script>

<style>
</style>