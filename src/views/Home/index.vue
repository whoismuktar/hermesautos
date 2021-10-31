<template>
  <div class="home">
      <div class="hero">
        <div class="gradient right">
          <v-container>
            <v-row no-gutters justify-sm="center" justify-md="start" justify-lg="start">
              <v-col cols="12" sm="8">
                  <div class="hero-content-wrapper">
                    <div class="__content white--text mb-4">
                      <h1 class="text-capitalize">delivering, now and always.</h1>
                      <b>Buy a car entirely online, and have it safely delivered, contact-free. <br> <router-link to="/about">Learn More</router-link></b>
                    </div>

                    <vin-card />
                  </div>
                  <v-img v-if="!$vuetify.breakpoint.smAndDown" contain :src="require('@/assets/img/car-4.png')" class="car-holder" width="50%" position="left"></v-img>

              </v-col>
            </v-row>
          </v-container>
        </div>
      </div>

      <section class="mt-12">
        <v-container>
          <!-- <iframe :src="iframeLink" frameborder="0" height="350" width="100%"></iframe> -->
          <v-row>
            <v-col cols="12" sm="4" class="text-center py-12 d-flex flex-column">
                <v-img contain :src="require('@/assets/img/car-3.png')" width="500" position="left"></v-img>

                <!-- <div class="mt-10 app-bold">
                  <router-link to="/">Shop Trucks</router-link>
                </div> -->
            </v-col>
            <v-col cols="12" sm="4" class="text-center py-12 d-flex flex-column">
                <v-img contain :src="require('@/assets/img/car-6.png')" width="500" position="left" class="flipX"></v-img>

                <!-- <div class="mt-10 app-bold">
                  <router-link to="/">Shop SUVs</router-link>
                </div> -->
            </v-col>
            <v-col cols="12" sm="4" class="text-center py-12 d-flex flex-column">
                <v-img contain :src="require('@/assets/img/car-7.png')" width="500" position="right"></v-img>

                <!-- <div class="mt-10 app-bold">
                  <router-link to="/">Shop Sports</router-link>
                </div> -->
            </v-col>
          </v-row>
        </v-container>
      </section>

      <section class="values lightBG">
        <v-container>
          <div class="__section_intro">
            <h1 class="__section_title">Hermes Autos Values</h1>
            <div class="__section_subtitle mb-7">We believe buying a car should be fun, easy, and affordable. Here’s how Vroom is leading the revolution</div>
          </div>

          <v-row>
            <v-col cols="12" sm="6" v-for="(value, index) in values" :key="index">
              <v-card flat class="pa-10 borderLight value">
                <h5 class="text-uppercase grey--text mb-2">{{ value.attr }}</h5>
                <h4>{{ value.attr }}</h4>

                <div>{{ value.content }}</div>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </section>

      <section class="lightBG testimonial mt-0 py-12">
        <v-container>
          <v-row align="center">
            <v-col cols="12" sm="6" class="inheritHeight">
              <v-card tile flat height="inherit" class="d-flex allChildrenCenter pa-9">
                <v-card-text>
                  “Vroom is a fast, easy and hassle free way of buying a vehicle. I can honestly say that I had an unbelievable buying experience.”
                </v-card-text>
              </v-card>
            </v-col>

            <v-col cols="6" class="inheritHeight">
              <div class="inheritHeight testimonialBG">
                <v-img cover :src="require('@/assets/img/pic.png')" width="500" position="center"></v-img>
              </div>
            </v-col>
          </v-row>
        </v-container>
      </section>

      <section>
        <v-container>
          <div class="text-center">
            <div class="__section_intro">
              <h1 class="__section_title">How It Works</h1>
              <div class="__section_subtitle mb-3">Hermes Autos is changing the way people buy, sell, and trade in cars. Here’s a step-by-step guide on what to expect</div>
            </div>

            <router-link to="/about" class="text-capitalize">
              <b>LEARN MORE ABOUT Hermes Autos</b>
            </router-link>
          </div>

          <div class="my-5">
            <v-img :src="require('@/assets/img/video.jpeg')" height="600"></v-img>
          </div>
        </v-container>
      </section>

      <!-- Featured Reviews -->
      <section class="lightBG">
        <v-container>
          <featured-reviews />
        </v-container>
      </section>

      <!-- Popular Brands -->
      <section>
        <v-container>
          <car-logos />
        </v-container>
      </section>
  </div>
</template>

<script>
import featuredReviews from '@/components/featuredReviews.vue'
import carLogos from '@/components/carLogos.vue'
import vinCard from '../../components/vinCard.vue'

export default {
  name: 'Home',
  components: {
    featuredReviews,
    carLogos,
    vinCard
  },
  data() {
    return {
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
    }
  },
  computed: {
    iframeLink() {
      return "https://hermesautos.com/section-snippet/"
    },
  }
}
</script>

<style lang="scss" src="./home.scss" scoped></style>