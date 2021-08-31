<template>
  <div class="how-it-works">
    <page-hero :carImg="hero.carImg" :intro="hero.intro" :title="hero.title" :subtitle="hero.subtitle" :cta="hero.cta" :ctaAction="hero.ctaAction" />

    <section>
        <v-container>
            <v-row>
                <v-col cols="3">
                    <span><v-img contain width="200" position="center" :src="require('../assets/img/pic.png')" alt="Hermes Autos popular brands"></v-img></span>
                </v-col>
                <v-col cols="9">
                    <v-timeline align-top dense>
                        <v-timeline-item large color="transparent" fill-dot flat>
                            <span slot="icon">
                                <v-icon size="50" color="primary">drive_eta</v-icon>
                            </span>
                            <div class="mb-4">
                                <b class="font-x3">Browse Online</b>
                            </div>
                            <div>
                                <div class="mb-2">
                                    <v-icon color="primary" class="mr-2">check_circle</v-icon>
                                    <b>Choose Your Car</b>
                                </div>
                                <div class="ml-8">
                                    <div>
                                        Explore thousands of high-quality, low-mileage vehicles on vroom.com, with new cars and trucks added every week. All vehicles pass a thorough inspection and come with a free CarFax vehicle history report so you can feel confident you’re getting a good ride.
                                    </div>

                                    <v-btn depressed text plain color="primary" class="pl-0 mt-4">
                                        <b>More about Hermes Auto's Vehicles</b>
                                    </v-btn>
                                </div>
                            </div>

                            <div>
                                <div class="mb-2">
                                    <v-icon color="primary" class="mr-2">check_circle</v-icon>
                                    <b>Choose Your Car</b>
                                </div>
                                <div class="ml-8">
                                    <div>
                                        Explore thousands of high-quality, low-mileage vehicles on vroom.com, with new cars and trucks added every week. All vehicles pass a thorough inspection and come with a free CarFax vehicle history report so you can feel confident you’re getting a good ride.
                                    </div>

                                    <v-btn depressed text plain color="primary" class="pl-0 mt-4">
                                        <b>More about Hermes Auto's Vehicles</b>
                                    </v-btn>
                                </div>
                            </div>

                        </v-timeline-item>
                        <v-timeline-item>timeline item</v-timeline-item>
                        <v-timeline-item>timeline item</v-timeline-item>
                    </v-timeline>
                </v-col>
            </v-row>
        </v-container>
    </section>
  </div>
</template>

<script>
import pageHero from '../components/pageHero'
export default {
    components: {
        pageHero
    },
    data() {
        return {
            hero: {
                carImg: require('../assets/img/gle-benz.png'),
                intro: "How It Works",
                title: "BUYING AND SELLING MADE EASY",
                subtitle: "You’ve found it: The better way to buy or sell a car. Find a great car and make it yours or sell us the one you have, all without a trip to the dealership. But how, exactly? Here’s how.",
                cta: "Shop Now",
                ctaAction: "",
            },
        }
    }

}
</script>

<style scoped>
>>>.v-timeline-item__dot {
    box-shadow: none;
}
</style>