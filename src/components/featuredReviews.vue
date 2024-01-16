<template>
  <div :class="`featuredReviews ${classes}`">
    <v-row>
      <v-col cols="12" sm="6" v-for="(review, index) in reviews" :key="index">
        <v-card flat class="pa-10 borderLight review">
          <h5 class="text-uppercase grey--text mb-2">{{ review.attr }}</h5>
          <div>{{ review.review }}</div>
          <h3>{{ review.coy }}</h3>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  props: {
    classes: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      reviews: [
        {
          review:
            "We’ve eliminated the middleman and made the entire car buying process more efficient, which allows us to pass the savings on to our customers.",
          coy: "Business Insider",
        },
        {
          review:
            "Our cars are inspected for safety, mechanical and cosmetic issues. We only sell cars that have accident-free CARFAX vehicle history reports at the time of purchase and sale.",
          coy: "Aljazeera",
        },
        {
          review:
            "Hermes Autos has strategic relationships with partners to secure the best financing for you.",
          coy: "TVC",
        },
        {
          review:
            "Delivering cars is at the heart of what we do. Save a trip to the dealership and let us bring your next car to you.",
          coy: "CNN",
        },
        {
          attr: "7-DAY Returns",
          title: "7 Days to Decide",
          review:
            "Spend a week (or 250 miles) getting to know your vehicle. Take a trip, park it in your garage, drive it to work. If it’s not right, we’ll take it back.",
        },
        {
          review:
            "A limited warranty is included with most Hermes Autos vehicles, good for 90 days or 6,000 miles. The majority of our cars are still under their manufacturer’s warranty.",
          coy: "BBC",
        },
      ],
    };
  },
};
</script>

<style>
</style>