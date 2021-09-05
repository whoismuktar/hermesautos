<template>
  <div class="starred-reviews">
    <div class="text-center font-x2b">what our customers are saying</div>

    <v-row>
        <v-col v-for="(review, index) in randomReviews" :key="index" cols="3">
            <div class="review-stars">
                    <v-icon v-for="(icon, icI) in parseInt(review.star)" :key="icI" class="review-star">star</v-icon>
                    <v-icon v-if="review.star % 1 != 0">star_half</v-icon>
            </div>

            <div>
                <b>
                    <em>{{ review.highlight }}</em>
                </b>
            </div>

            <p>
                {{ review.review }}
            </p>

            <p>{{ review.name }}</p>
            <p class="font-tiny">{{ review.location }}</p>

        </v-col>
    </v-row>
  </div>

</template>

<script>
import { mapGetters, mapState } from 'vuex'
export default {
    data() {
        return {
        }
    },
    computed: {
        ...mapState(["reviews", "reviewAmount"]),
        ...mapGetters(["getReviews"]),
        randomReviews() {
            let reviews = this.reviews;
            var currentIndex = reviews.length,  randomIndex;

            // While there remain elements to shuffle...
            while (currentIndex != 0) {

                // Pick a remaining element...
                randomIndex = Math.floor(Math.random() * currentIndex);
                currentIndex--;

                // And swap it with the current element.
                [reviews[currentIndex], reviews[randomIndex]] = [
                reviews[randomIndex], reviews[currentIndex]];
            }
            return reviews.splice(0, this.reviewAmount);
        }
    }
}
</script>

<style>

</style>