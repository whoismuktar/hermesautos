<template>
  <div class="reviews">
    <page-hero :carImg="hero.carImg" :intro="hero.intro" :title="hero.title" :subtitle="hero.subtitle" :cta="hero.cta" :ctaAction="hero.ctaAction" :showRating="true" />

    <section class="lightBG">
        <v-container>
            <div v-for="(review, index) in reviews" :key="index" class="shadowLight py-5 px-10 mt-10" >
                <div>
                    <v-icon v-for="(icon, icI) in parseInt(review.star)" :key="icI" class="review-star" size="10" color="primary">star</v-icon>
                    <v-icon v-if=" review.star % 1 != 0" size="10" color="primary">star_half</v-icon>
                </div>

                <h3>
                    <em>
                        {{ review.review }}
                    </em>
                </h3>

                <div class="text-uppercase">{{ review.name }}</div>
            </div>
        </v-container>
    </section>

    <section>
      <v-container>
        <how-it-works :howItWorks="howItWorks" />
      </v-container>
    </section>

    <section class="lightBG">
      <v-container>
          <footer-question />
      </v-container>
    </section>

  </div>
</template>

<script>
import pageHero from '../components/pageHero'
import howItWorks from '../components/howItWorks-v2'
import { mapGetters, mapState } from 'vuex'
import FooterQuestion from '../components/footerQuestion'
export default {
    components: {
        pageHero,
        howItWorks,
        FooterQuestion
    },
    data() {
        return {
            hero: {
                carImg: require('../assets/img/gle-benz.png'),
                intro: "Hermes Autos Reviews",
                title: "SEE WHAT OUR CUSTOMERS ARE SAYING",
                subtitle: "Don't just take our word for it.",
                cta: "Apply Now",
                ctaAction: "",
            },
            howItWorks: [
                {
                    title: "Browse Online",
                    content: "Explore thousands of vehicles with new inventory added every week.",
                    icon: "pageview"
                },
                {
                    title: "Make It Yours",
                    content: "Find the one, choose your financing, appraise your trade and sign.",
                    icon: "content_paste"
                },
                {
                    title: "Get It Delivered",
                    content: "Take delivery right at home, make sure the car is right for you and enjoy.",
                    icon: "local_shipping"
                }
            ]
        }
    },
    computed: {
        ...mapState(["reviews", "reviewAmount"]),
        ...mapGetters(["getReviews"]),
    }
}
</script>

<style>

</style>