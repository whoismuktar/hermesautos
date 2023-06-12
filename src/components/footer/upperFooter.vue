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
      customFooter: '',
      footerOptions: [
        {
          isDefault: true,
          name: "ev",
          header: "Electric Vehicles",
          content:
            "Our hundreds of team members are helping Hermes Autos revolutionize the way people buy, sell, and trade in EVs. Count on us to make your next Electric Vehicle buying experience the best you’ve ever had.",
          ctaText: "Learn More About EVs",
          ctaAction: "/electric-vehicles",
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
      const {customUpperFooter} = this.$route.meta || 'yy';

      return customUpperFooter
    },
  },
  watch: {
    getCustomFooter(val) {
      this.setFooter(val)

    }
  },
  methods: {
    setFooter(val) {
      console.log("val", val);
      if (val) {
        this.details = this.footerOptions.filter(
          (f) => f.name === val
        )[0];
      } else {
        this.details = this.footerOptions.filter((f) => f.isDefault)[0];
      }
    }
  },
  created() {
    this.setFooter()
    console.log(this.$route.meta);
  }
};
</script>

<style>
</style>