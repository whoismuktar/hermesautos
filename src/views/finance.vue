<template>
  <div class="finance">
    <page-hero :carImg="hero.carImg" :intro="hero.intro" :title="hero.title" :subtitle="hero.subtitle" :cta="hero.cta" :ctaAction="hero.ctaAction" />
    <section class="lightBG">
      <div>
        <template>
          <v-carousel v-model="model" height="150" hide-delimiter-background hide-delimiters>
            <template v-slot:prev="{ on, attrs }">
              <v-btn
                :ripple="false"
                plain
                color="primary"
                v-bind="attrs"
                v-on="on"
              >
                <v-icon size="50">arrow_back_ios</v-icon>
              </v-btn>
            </template>
            <template v-slot:next="{ on, attrs }">
              <v-btn
                :ripple="false"
                plain
                color="primary"
                v-bind="attrs"
                v-on="on"
              >
                <v-icon size="50">arrow_forward_ios</v-icon>
              </v-btn>
            </template>
            <v-carousel-item
              v-for="(review, index) in financeReview"
              :key="index"
            >

              <v-sheet
                color="transparent"
                height="100%"
                tile
                class="d-flex flex-column justify-center align-center"
              >
                  <div>
                    {{ review.content }}
                  </div>
                  <div>
                    <em class="d-flex">
                      <h4>{{ review.author }}</h4>
                      <span class="ml-2">{{ new Date(review.date).toDateString() }}</span>
                    </em>
                  </div>
              </v-sheet>
            </v-carousel-item>
          </v-carousel>
        </template>
      </div>
    </section>

    <section class="py-12">
      <tab-view :tabs="sellingPoint" />
    </section>

    <hr class="my-12">

    <section>
      <v-container>
        <div class="text-center">
        <h2 class="mb-4">Our Lending Partners</h2>
        <div>We work with more than a dozen banks and lending partners to get you a competitive rate. Here are just a few:</div>
      </div>
      
      <v-row justify="center" align="center" class="mt-0">
        <v-col v-for="(img, index) in financePartners" :key="index" cols="4" class=" allChildrenCenter">
          <span><v-img contain width="200" position="center" :src="img" alt="Hermes Autos popular brands"></v-img></span>
        </v-col>
      </v-row>
      </v-container>
    </section>

    <section>
      <v-container>
        <v-row no-gutters class="mt-0" align="center">
          <v-col cols="10">
            <div class="gradient lightBG-v d-flex align-center">
              <div style="width:50%">
                <div class="font-x2b">How It Works</div>

                <div>
                  <div>
                    <ol>
                      <li>
                        <h4>Find Your Ride</h4>
                        <div>Browse thousands of high-quality, low-mileage vehicles, and find the one that's right for you. Shop Now</div>
                      </li>
                      <li>
                        <h4>Get Your Financing Terms</h4>
                        <div>Click here to apply in minutes. You will need to select a vehicle first to receive exact financing terms.</div>
                      </li>
                      <li>
                        <h4>Sign, Pay and Drive</h4>
                        <div>Finalize your purchase, then schedule your delivery or in-store pickup. If you finance with us, Vroom will register your vehicle on your behalf and mail your registration and plates to you, once your state DMV has prepared them.</div>
                      </li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
          </v-col>
          <v-col cols="2" class="d-flex align-center howItWorksBG-wrapper">
            <div class="howItWorksBG">
              <v-img contain width="450" position="center" :src="require('../assets/img/pic.png')" alt="Hermes Autos popular brands"></v-img>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <hr class="my-12" />

    <footer-question />

  </div>
</template>

<script>
import tabView from '../components/tabView'
import footerQuestion from '../components/footerQuestion'
import pageHero from '../components/pageHero.vue'
  export default {
  components: { 
    tabView,
    footerQuestion,
    pageHero,
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
      model: 0,
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
      financeReview: [
        {
          content: "1 Really good customer service. It was fast and easy to get financed and the vehicle I got was at a good price. Two thumbs up!",
          author: "Author 1",
          date: "2020-10-07"
        },
        {
          content: "2 Really good customer service. It was fast and easy to get financed and the vehicle I got was at a good price. Two thumbs up!",
          author: "Author 2",
          date: "2010-11-11"
        },
        {
          content: "3 Really good customer service. It was fast and easy to get financed and the vehicle I got was at a good price. Two thumbs up!",
          author: "Author 3",
          date: "2008-04-21"
        },
        {
          content: "4 Really good customer service. It was fast and easy to get financed and the vehicle I got was at a good price. Two thumbs up!",
          author: "Author 4",
          date: "2021-05-14"
        },
      ],
      financePartners: [
        require('../assets/img/pic.png'),
        require('../assets/img/pic.png'),
        require('../assets/img/pic.png'),
        require('../assets/img/pic.png'),
        require('../assets/img/pic.png'),
        require('../assets/img/pic.png'),
      ]
    }),
  }
</script>

<style scoped>

.gradient.lightBG-v {
  height: 500px;
  padding: 50px;
  background: linear-gradient(to top left, transparent 50%, var(--v-lightBG-base) 50%) no-repeat, linear-gradient(to top left, transparent 0.1%, var(--v-lightBG-base) 0.1%) no-repeat;
  background-size: 15% 100%, 85% 100%;
  background-position: 100% 0%, 0% 0%;
  position: relative;
}
>>>.v-window__prev,
>>>.v-window__next {
 background: transparent; 
}
ol {
  counter-reset: my-awesome-counter;
}
ol li {
  counter-increment: my-awesome-counter;
  list-style: none;
  position: relative;
  margin-top: 40px;
}
li::before {
  content: counter(my-awesome-counter);
  position: absolute;
  left: -27px;
  top: 3px;
  border: 2px solid var(--v-primary-base);
  width: 1.2rem;
  height: 1.2rem;
  border-radius: 50%;
  line-height: 1rem;
  color: var(--v-primary-base);
  text-align: center;
  font-size: 12px;
}
.howItWorksBG-wrapper {
  position: relative;
}
.howItWorksBG {
  position: absolute;
  left: -190px;
}
</style>