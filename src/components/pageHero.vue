<template>
  <div>
    <div class="hero comp-hero height100">
      <v-container>
        <v-row no-gutters class="relative" style="z-index: 2">
          <v-col
            cols="12"
            sm="6"
            :class="[$vuetify.breakpoint.smAndDown ? 'py-10' : '']"
          >
            <div
              class="d-flex align-center"
              :class="[
                $vuetify.breakpoint.smAndDown ? 'height100' : 'heroHeight',
              ]"
            >
              <div>
                <h4 class="text-uppercase mb-4 _intro">{{ intro }}</h4>
                <h2 class="font-x2b _title" v-html="title"></h2>
                <div class="font-x5 _subtitle">{{ subtitle }}</div>

                <vin-card v-if="vinCard" />
                <v-btn
                  v-if="cta"
                  depressed
                  color="primary"
                  class="hero-cta mt-4"
                  :href="ctaAction"
                  >{{ cta }}</v-btn
                >
              </div>
            </div>
          </v-col>

          <v-col cols="12" sm="6" class="d-flex flex-column hero-right-meta">
            <div
              v-if="showRating"
              class="align-self-start mt-12"
              :class="{ centerItem: $vuetify.breakpoint.smAndDown }"
            >
              <div class="pa-1 black white--text font-tiny">
                AVERAGE REVIEW RATING
              </div>
              <div class="borderLight text-center">
                <h1 class="font-x2b">{{ avgRating.toFixed(1) }}</h1>
                <v-icon
                  v-for="(icon, icI) in parseInt(avgRating)"
                  :key="icI"
                  class="review-star"
                  size="40"
                  color="primary"
                  >star</v-icon
                >
                <v-icon v-if="avgRating % 1 != 0" size="40" color="primary"
                  >star_half</v-icon
                >
              </div>
            </div>
            <v-img
              contain
              :src="carImg"
              class="car-holder"
              max-width="70%"
              position="left"
            ></v-img>
          </v-col>
        </v-row>
      </v-container>
      <div class="gradient left"></div>
    </div>
  </div>
</template>

<script>
import vinCard from "../components/vinCard.vue";
import { mapGetters } from "vuex";
export default {
  components: {
    vinCard,
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
      default: false,
    },
  },
  computed: {
    ...mapGetters(["avgRating"]),
  },
};
</script>

<style lang="scss" scoped>
.heroHeight {
  height: 400px;

  @media (max-960px) {
    height: 100%;
  }

  ._title {
    line-height: 1;
    margin-bottom: 10px;
  }
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
  background: linear-gradient(
        to bottom right,
        transparent 0.1%,
        var(--v-primary-base) 0.1%
      )
      no-repeat,
    linear-gradient(to bottom right, transparent 50%, var(--v-primary-base) 50%)
      no-repeat;
  background-size: 22% 100%, 8% 150%;
  background-position: 100% 0%, 77% 85%;
}

@media (max-width: 960px) {
  .comp-hero {
    .gradient {
      background-color: var(--v-primary-base) !important;
    }
    .hero-right-meta {
      // display: none !important;

      ::v-deep i {
        color: #ffffff !important;
      }
    }

    ._title {
      line-height: 1;
      margin-bottom: 20px;
    }
    .hero-cta {
      background-color: #333333 !important;
    }
  }
}
</style>
