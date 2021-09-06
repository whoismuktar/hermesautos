<template>
  <div class="how-it-works-v2">
      <div class="text-center font-x2b">
          How It Works
      </div>

      <hr class="mb-4" />

      <v-row justify="center">
          <v-col v-for="(item, index) in howItWorks" :key="index" cols="3">
              <div class="d-flex">
                  <v-icon size="40" class="mr-3" color="primary">{{ item.icon }}</v-icon>
                <div>
                    <h4>{{ item.title }}</h4>
                    <div>{{item.content }}</div>
                </div>
              </div>
          </v-col>
      </v-row>

      <div class="text-center mt-6">
          <v-btn depressed color="primary">{{ cta }}</v-btn>
      </div>
  </div>
</template>

<script>
export default {
    props: {
        howItWorks: {
            type: Array,
            default: () => []
        },
        cta: {
            type: String,
            default: "Learn More"
        },
        ctaAction: {
            String: String,
        }
    },
  data(){
      return {
      }
    }
    
}
</script>

<style>

</style>