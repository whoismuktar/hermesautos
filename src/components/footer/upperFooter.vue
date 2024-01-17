<template>
  <div
    class="upper-footer"
    :style="{
      'background-image': `url(${details.bgImage})`,
    }"
  >
    <v-container class="_wrapper">
      <h2 class="relative">{{ details.header }}</h2>
      <p class="relative">
        {{ details.content }}
      </p>

      <v-btn depressed color="primary" :to="details.ctaAction">{{
        details.ctaText
      }}</v-btn>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      details: {},
      customFooter: "",
      footerOptions: [
        {
          isDefault: true,
          name: "ev",
          header: "Electric Vehicles",
          content:
            "Our hundreds of team members are helping Hermes Autos revolutionize the way people buy, sell, and trade in EVs. Count on us to make your next Electric Vehicle buying experience the best you’ve ever had.",
          ctaText: "Coming Soon",
          ctaAction: "#",
          bgImage: require("../../assets/img/ev.jpeg"),
        },
        {
          name: "ev",
          header: "Our Customer Reviews",
          content:
            "To the norht and beyond. our customsers have been please with our auto sales and deliveries as well as our tailored consultations to meet respective client needs.",
          ctaText: "View Reviews",
          ctaAction: "/customer-reviews",
          bgImage: require("../../assets/img/ev.jpeg"),
        },
        {
          name: "about",
          header: "About Hermes Autos",
          content:
            "In 2020, Hermes Autos decided to add a digital dimension to its venture and launched an online cross-border automobile buying and selling platform where you can buy a car from America or Europe and have it delivered to your doorstep from anywhere in Africa, in line with the company's vision to expand its business beyond Nigeria...",
          ctaText: "Learn More About Hermes Autos",
          ctaAction: "/about",
          bgImage: require("../../assets/img/hermes-carbg-2.jpeg"),
        },
      ],
    };
  },
  computed: {
    getCustomFooter() {
      const { customUpperFooter } = this.$route.meta || "";

      return customUpperFooter;
    },
  },
  watch: {
    $route() {
      this.randomizeFooterContent();
    },
  },
  methods: {
    randomizeFooterContent() {
      console.log(this.customUpperFooter)

      const randomContent = this.customUpperFooter
        ? this.footerOptions.find((f) => f.name === this.customUpperFooter)
        : this.footerOptions[
            Math.floor(Math.random() * this.footerOptions.length)
          ];

      console.log(randomContent);
      this.details = randomContent;
    },
  },
};
</script>

<style></style>
