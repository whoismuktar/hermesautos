<template>
  <div class="review-carousel">
      <v-carousel height="150" hide-delimiter-background hide-delimiters cycle>
        <template v-slot:prev="{ on, attrs }">
            <v-btn
            :ripple="false"
            plain
            color="primary"
            v-bind="attrs"
            v-on="on"
            >
            <v-icon size="40">arrow_back_ios</v-icon>
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
            <v-icon size="40">arrow_forward_ios</v-icon>
            </v-btn>
        </template>
        <v-carousel-item
            v-for="(review, index) in reviews"
            :key="index"
        >

            <v-sheet
            color="transparent"
            height="100%"
            tile
            class="d-flex flex-column justify-center align-center"
            >
                <div class="px-12 text-center" style="width: 75%">
                    {{ review.content }}
                </div>
                <div>
                <em class="d-flex">
                    <h4>{{ review.author }}</h4>
                    <span v-if="review.date" class="ml-2">{{ new Date(review.date).toDateString() }}</span>
                </em>
                </div>
            </v-sheet>
        </v-carousel-item>
    </v-carousel>
  </div>
</template>

<script>
export default {
    props: {
        reviews: {
            type: Array,
            required: true,
        }
    }

}
</script>

<style scoped>
>>>.v-window__prev,
>>>.v-window__next {
    background: transparent;
}
</style>