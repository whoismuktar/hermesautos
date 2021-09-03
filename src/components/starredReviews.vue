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
export default {
    data() {
        return {
            reviewAmount: 4,
            reviews: [
                {
                    name: "Agbaja Jacob",
                    location: "Ireland",
                    review: "The experience I had with Vroom was about as seamless as possible. They got back to me with a quote very quickly and upon accepting, the process moved forward quickly and with ease. I'd highly recommend using the service if you are looking to sell your car!",
                    highlight: "The experience I had with Vroom was about as seamless as possible.",
                    star: 5,
                },
                {
                    name: "John Doe",
                    location: "Nigeria",
                    review: "Hermes Autos is a fast, easy and hassle free way of buying a vehicle. They gave me all the tools needed to view, research and make my decision at the comfort of my home. I can honestly say that I had an unbelievable buying experience.",
                    highlight: "Fast, easy and hassle free way of buying a vehicle!",
                    star: 4,
                },
                {
                    name: "White Bread",
                    location: "California",
                    review: "Process was painless, delivery was fast. Getting rid of my old car simple and painless as well.",
                    highlight: "Super fast with the entire transaction and paperwork.",
                    star: 4.5,
                },
                {
                    name: "JK Rowling",
                    location: "Boston",
                    review: "Your customer service, communication updates and the whole process is 5 stars from beginning to end. Thank you!",
                    highlight: "The whole process is 5 stars from beginning to end!",
                    star: 5,
                },
                {
                    name: "George Clooney",
                    location: "The customer service was outstanding.",
                    review: "The customer service was outstanding, right from my expressing interest in the vehicle all the way through delivery. I knew exactly what was happening and what I needed to do every step of the way. The car itself looks brand new even though it's 4 years old. I highly recommend Vroom!",
                    highlight: "An amazingly quick and painless process!",
                    star: 4.5,
                },
            ]
        }
    },
    computed: {
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