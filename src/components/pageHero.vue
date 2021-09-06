<template>
  <div>
    <div class="hero heroHeight">
      <v-container>
        <v-row no-gutters class="relative" style="z-index: 2">
          <v-col cols="6">
            <div class="heroHeight d-flex align-center">
              <div>
                <h4 class="text-uppercase mb-4">{{ intro }}</h4>
                <h2 class="font-x2b">{{ title }}</h2>
                <div class="font-x5">{{ subtitle }}</div>

                <vin-card v-if="vinCard" />
                <v-btn v-if="cta" depressed color="primary" class="mt-4">{{ cta }}</v-btn>
              </div>
            </div>
          </v-col>

          <v-col cols="6" class="d-flex flex-column justify-end align-end">
            <div v-if="showRating" class="align-self-start mt-12">
              <div class="pa-1 black white--text font-tiny">
                  AVERAGE REVIEW RATING
              </div>
              <div class="borderLight text-center">
                <h1 class="font-x2b">{{ avgRating }}</h1>
                <v-icon v-for="(icon, icI) in parseInt(avgRating)" :key="icI" class="review-star" size="40" color="primary">star</v-icon>
                <v-icon v-if=" avgRating % 1 != 0" size="40" color="primary">star_half</v-icon>
              </div>
            </div>
            <div class="mt-n12">
              <v-img contain :src="carImg" class="mt-10" width="400" position="right"></v-img>
            </div>
          </v-col>
        </v-row>
      </v-container>
      <div class="gradient left"></div>
    </div>
  </div>
</template>

<script>
import vinCard from '../components/vinCard.vue'
import { mapGetters } from 'vuex'
export default {
    components: {
        vinCard
    },
    props: {
        carImg: {
            type: String,
        },
        intro: {
            type: String,
        },
        title: {
            type: String,
        },
        subtitle: {
            type: String,
        },
        cta: {
            type: String,
        },
        ctaAction: {
            type: String,
        },
        vinCard: {
            type: Boolean,
        },
        showRating: {
            type: Boolean,
            default: false
        },
    },
    computed: {
      ...mapGetters(["avgRating"])
    }

}
</script>

<style scoped>

.heroHeight {
  height: 400px;
}
.hero {
  position: relative;
}
.gradient.left {
  z-index: 0;
  height: inherit;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  padding: 50px;
  background: linear-gradient(to bottom right, transparent 0.1%, var(--v-primary-base) 0.1%) no-repeat, linear-gradient(to bottom right, transparent 50%, var(--v-primary-base) 50%) no-repeat;
  background-size: 22% 100%, 8% 150%;
  background-position: 100% 0%, 77% 85%;
}
</style>