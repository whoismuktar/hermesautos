<template>
  <div class="home">
      <div class="hero">
        <v-row no-gutters>
          <v-col cols="8">
            <div class="gradient right">
              <div class="pa-12">
                <div class="white--text mb-4">
                  <h1 class="text-capitalize">delivering, now and always.</h1>
                  <b>Buy a car entirely online, and have it safely delivered, contact-free. <router-link to="/about">Learn More</router-link></b>
                </div>

                <v-card flat tile max-width="70%" class="pa-8">
                  <v-card-title class="px-0">Check Your VIN</v-card-title>
                  <v-card-text class="px-0">
                    <div>Enter your VIN Number</div>
                    <v-text-field outlined dense hide-details="auto"></v-text-field>
                  </v-card-text>

                  <v-card-action>
                    <v-btn dark width="100%" height="50">Search</v-btn>
                  </v-card-action>
                </v-card>
              </div>
              <v-img contain :src="require('../assets/img/gle-benz.png')" class="car-holder" width="500" position="left"></v-img>
            </div>

          </v-col>

          <!-- <v-col align-self="end" cols="4" class="car-holder ">
            <v-img contain :src="require('../assets/img/gle-benz.png')" width="500" position="left"></v-img>
          </v-col> -->
        </v-row>
      </div>

      <section>
        <iframe :src="iframeLink" frameborder="0" height="300" width="100%"></iframe>
      </section>

      <section class="values lightBG">
        <h1>Hermes Autos Values</h1>
        <div class="mb-7">We believe buying a car should be fun, easy, and affordable. Here’s how Vroom is leading the revolution</div>

        <v-row>
          <v-col cols="6" v-for="(value, index) in values" :key="index">
            <v-card flat class="pa-10 borderLight value">
              <h5 class="text-uppercase grey--text mb-2">{{ value.attr }}</h5>
              <h4>{{ value.attr }}</h4>

              <div>{{ value.content }}</div>
            </v-card>
          </v-col>
        </v-row>
      </section>

      <section class="lightBG testimonial mt-0 py-12">
        <v-row align="center">
          <v-col cols="6" class="inheritHeight">
            <v-card tile flat height="inherit" class="d-flex allChildrenCenter pa-9">
              <v-card-text>
                “Vroom is a fast, easy and hassle free way of buying a vehicle. I can honestly say that I had an unbelievable buying experience.”
              </v-card-text>
            </v-card>
          </v-col>

          <v-col cols="6" class="inheritHeight">
            <div class="inheritHeight testimonialBG"></div>
          </v-col>
        </v-row>
      </section>

      <section>
        <div class="text-center">
          <h1>How It Works</h1>
          <div>Hermes Autos is changing the way people buy, sell, and trade in cars. Here’s a step-by-step guide on what to expect</div>

          <router-link to="/about" class="text-capitalize">
            <b>LEARN MORE ABOUT Hermes Autos</b>
          </router-link>
        </div>

        <div class="my-5">
          <v-img :src="require('../assets/img/video.jpeg')" height="600"></v-img>
        </div>
      </section>

      <!-- Featured Reviews -->
      <section class="lightBG">
        <featured-reviews />
      </section>

      <!-- Popular Brands -->
      <section>
        <car-logos />
      </section>
  </div>
</template>

<script>
import featuredReviews from '@/components/featuredReviews.vue'
import carLogos from '@/components/carLogos.vue'

export default {
  name: 'Home',
  components: {
    featuredReviews,
    carLogos
  },
  data(){return {
    iframeLink: "https://hermesautos.com/?page_id=8235?car_year=2015&cars_pp=16&cars_orderby=date&cars_order=desc&lay_style=view-grid-full&cars_grid=yes&current_value=2015&current_attr=car_year",
    values: [
      {
        attr: "Price",
        title: "No haggling. No pressure.",
        content: "We’ve eliminated the middleman and made the entire car buying process more efficient, which allows us to pass the savings on to our customers.",
      },
      {
        attr: "Reconditioning",
        title: "Multiple Inspections",
        content: "Our cars are inspected for safety, mechanical and cosmetic issues. We only sell cars that have accident-free CARFAX vehicle history reports at the time of purchase and sale.",
      },
      {
        attr: "Finance",
        title: "Get a Competitive Rate",
        content: "Vroom has strategic relationships with partners like Chase, Santander, and Ally to secure the best financing for you.",
      },
      {
        attr: "Deliver to you",
        title: "Delivery Straight to You",
        content: "Delivering cars is at the heart of what we do. Save a trip to the dealership and let us bring your next car to you.",
      },
      {
        attr: "7-DAY Returns",
        title: "7 Days to Decide",
        content: "Spend a week (or 250 miles) getting to know your vehicle. Take a trip, park it in your garage, drive it to work. If it’s not right, we’ll take it back.",
      },
      {
        attr: "Coverage",
        title: "Free Limited Warranty",
        content: "A limited warranty is included with most Vroom vehicles, good for 90 days or 6,000 miles. The majority of our cars are still under their manufacturer’s warranty.",
      }
    ]
  }}
}
</script>

<style scoped>
.home section {
  padding: 20px 98px;
}
.gradient.right {
  /* height: 500px; */
  padding: 50px;
  background: linear-gradient(to top left, transparent 50%, var(--v-primary-base) 50%) no-repeat, linear-gradient(to top left, transparent 0.1%, var(--v-primary-base) 0.1%) no-repeat;
  background-size: 15% 100%, 85% 100%;
  background-position: 100% 0%, 0% 0%;
  position: relative;
}

h1 {
  font-size: 3em;
  line-height: 1
}
.hero .car-holder {
  position: absolute;
  right: -170px;
  bottom: 10px;
}
section.testimonial .row {
  height: 300px;
}
section.testimonial .testimonialBG {
  background-image: url("../assets/img/pic.png");
  background-size: cover;
  background-position: center;
}

</style>