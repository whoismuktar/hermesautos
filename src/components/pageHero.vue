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

          <v-col cols="6" class="d-flex">
            <div>
              <v-img contain :src="carImg" class="mt-10" width="500" position="center"></v-img>
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