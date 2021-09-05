<template>
  <div class="how-it-works">
    <page-hero :carImg="hero.carImg" :intro="hero.intro" :title="hero.title" :subtitle="hero.subtitle" :cta="hero.cta" :ctaAction="hero.ctaAction" />

    <section>
        <v-container>
            <div>
                <div class="font-x2b">For Buyers</div>
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
                                <div class="timeline-content">
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

                                <div class="timeline-content">
                                    <div class="mb-2">
                                        <v-icon color="primary" class="mr-2">check_circle</v-icon>
                                        <b>Start Your Purchase</b>
                                    </div>
                                    <div class="ml-8">
                                        <div>
                                            Click “Start Purchase” and create an account on vroom.com to save future information and purchase details.
                                        </div>

                                        <v-btn depressed text plain color="primary" class="pl-0 mt-4">
                                            <b>More about buying with Hermes Autos</b>
                                        </v-btn>
                                    </div>
                                </div>

                                <div class="timeline-content">
                                    <div class="mb-2">
                                        <v-icon color="primary" class="mr-2">check_circle</v-icon>
                                        <b>Choose How to Pay</b>
                                    </div>
                                    <div class="ml-8">
                                        <div>
                                            Finance with Vroom and we make the hard part easy. We partner with a dozen major banks to get you the right rate. You can also pay with cash or finance with your own bank. Complete this step and a Vroom Car Specialist will be in touch shortly to discuss further details.
                                        </div>

                                        <v-btn depressed text plain color="primary" class="pl-0 mt-4">
                                            <b>More about Financing</b>
                                        </v-btn>
                                    </div>
                                </div>

                                <div class="timeline-content">
                                    <div class="mb-2">
                                        <v-icon color="primary" class="mr-2">check_circle</v-icon>
                                        <b>Tell Us About Your Trade</b>
                                    </div>
                                    <div class="ml-8">
                                        <div>
                                            If you have a trade, get a fast, easy appraisal by giving us some basic details about your vehicle. This will give our Car Specialist even more information to be able to structure the right deal for you.
                                        </div>

                                        <v-btn depressed text plain color="primary" class="pl-0 mt-4">
                                            <b>More about Trading In</b>
                                        </v-btn>
                                    </div>
                                </div>

                            </v-timeline-item>
                        </v-timeline>
                    </v-col>
                </v-row>
            </div>

            <div class="mt-12">
                <v-row>
                    <v-col cols="3">
                        <span><v-img contain width="200" position="center" :src="require('../assets/img/pic.png')" alt="Hermes Autos popular brands"></v-img></span>
                    </v-col>
                    <v-col cols="9">
                        <v-timeline align-top dense>
                            <v-timeline-item large color="transparent" fill-dot flat>
                                <span slot="icon">
                                    <v-icon size="50" color="primary">content_paste</v-icon>
                                </span>
                                <div class="mb-4">
                                    <b class="font-x3">Make It Yours</b>
                                </div>
                                <div class="timeline-content">
                                    <div class="mb-2">
                                        <v-icon color="primary" class="mr-2">check_circle</v-icon>
                                        <b>Upload Key Documents</b>
                                    </div>
                                    <div class="ml-8">
                                        <div>
                                            Take a photo of your driver’s license and proof of insurance to verify your identity. Our Car Specialist will request these when they give you a call and will provide an easy upload link. Depending on your financing, you may be asked to confirm other details.
                                        </div>
                                    </div>
                                </div>

                                <div class="timeline-content">
                                    <div class="mb-2">
                                        <v-icon color="primary" class="mr-2">check_circle</v-icon>
                                        <b>Place a Deposit</b>
                                    </div>
                                    <div class="ml-8">
                                        <div>
                                            With a $49 non-refundable deposit from you, we’ll hold your vehicle for 24 hours. This ensures no one else can buy the vehicle while you finalize the contract details.
                                        </div>
                                    </div>
                                </div>

                                <div class="timeline-content">
                                    <div class="mb-2">
                                        <v-icon color="primary" class="mr-2">check_circle</v-icon>
                                        <b>Sign Here</b>
                                    </div>
                                    <div class="ml-8">
                                        <div>
                                            We will either overnight your paperwork for signature or email to you for e-signature (dependent on the requirements of your purchase). Review carefully, sign where noted and return/complete your paperwork within 24 hours. Once we’ve got it, we’ll confirm it looks good and then the car will be yours.
                                        </div>

                                        <v-btn depressed text plain color="primary" class="pl-0 mt-4">
                                            <b>More about Buying A Car with Heres Autos</b>
                                        </v-btn>
                                    </div>
                                </div>

                                <div class="timeline-content">
                                    <div class="mb-2">
                                        <v-icon color="primary" class="mr-2">check_circle</v-icon>
                                        <b>Tell Us About Your Trade</b>
                                    </div>
                                    <div class="ml-8">
                                        <div>
                                            If you have a trade, get a fast, easy appraisal by giving us some basic details about your vehicle. This will give our Car Specialist even more information to be able to structure the right deal for you.
                                        </div>

                                        <v-btn depressed text plain color="primary" class="pl-0 mt-4">
                                            <b>More about Trading In</b>
                                        </v-btn>
                                    </div>
                                </div>

                            </v-timeline-item>
                        </v-timeline>
                    </v-col>
                </v-row>
            </div>

            <div class="mt-12">
                <v-row >
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
                                    <b class="font-x3">Get It Delivered</b>
                                </div>
                                <div class="timeline-content">
                                    <div class="mb-2">
                                        <v-icon color="primary" class="mr-2">check_circle</v-icon>
                                        <b>Plan for Delivery</b>
                                    </div>
                                    <div class="ml-8">
                                        <div>
                                            With your signed and approved paperwork and deposit, we give your car one last inspection and book it for delivery. Once it’s on the road to you, our Delivery Support Team will be in touch with regular updates.
                                        </div>
                                    </div>
                                </div>

                                <div class="timeline-content">
                                    <div class="mb-2">
                                        <v-icon color="primary" class="mr-2">check_circle</v-icon>
                                        <b>Meet Your New Car</b>
                                    </div>
                                    <div class="ml-8">
                                        <div>
                                            Your vehicle will typically arrive within 10-14 days of purchase, though sometimes it can take longer. We ship your car right to your home, or to a convenient nearby location.
                                        </div>

                                        <v-btn depressed text plain color="primary" class="pl-0 mt-4">
                                            <b>More about Delivery</b>
                                        </v-btn>
                                    </div>
                                </div>

                                <div class="timeline-content">
                                    <div class="mb-2">
                                        <v-icon color="primary" class="mr-2">check_circle</v-icon>
                                        <b>Check for Temp Tags</b>
                                    </div>
                                    <div class="ml-8">
                                        <div>
                                            Your car arrives with temporary tags allowing you to drive the vehicle immediately. You’ll receive an email with details about titling and registration upon delivery. If you financed your vehicle with Vroom, we file your DMV paperwork for you.
                                        </div>

                                        <v-btn depressed text plain color="primary" class="pl-0 mt-4">
                                            <b>More about Tiles and Registration</b>
                                        </v-btn>
                                    </div>
                                </div>

                                <div class="timeline-content">
                                    <div class="mb-2">
                                        <v-icon color="primary" class="mr-2">check_circle</v-icon>
                                        <b>Take It for a Spin...Or Two</b>
                                    </div>
                                    <div class="ml-8">
                                        <div>
                                            To get to know your car, it takes more than a trip around the block. You have a full week (7 days or 250 miles) to make sure it’s right for you. If it’s not, we’ll take it back and refund the purchase price.
                                        </div>

                                        <v-btn depressed text plain color="primary" class="pl-0 mt-4">
                                            <b>MORE ABOUT THE 7-DAY RETURN PERIOD</b>
                                        </v-btn>
                                    </div>
                                </div>

                                <div class="timeline-content">
                                    <div class="mb-2">
                                        <v-icon color="primary" class="mr-2">check_circle</v-icon>
                                        <b>Enjoy Your Ride</b>
                                    </div>
                                    <div class="ml-8">
                                        <div>
                                            Feel good that you got a great car at a great price, delivered right to you. Enjoy your ride, tell your friends and give our Customer Support team a shout (855) 219-5411 if you need anything else.
                                        </div>
                                    </div>
                                </div>
                            </v-timeline-item>
                        </v-timeline>
                    </v-col>
                </v-row>
            </div>

            <div class="mt-12">
                <div class="font-x2b">For Sellers</div>
                <v-row>
                    <v-col cols="3">
                        <span><v-img contain width="200" position="center" :src="require('../assets/img/pic.png')" alt="Hermes Autos popular brands"></v-img></span>
                    </v-col>
                    <v-col cols="9">
                        <v-timeline align-top dense>
                            <v-timeline-item large color="transparent" fill-dot flat>
                                <span slot="icon">
                                    <v-icon size="50" color="primary">calculate</v-icon>
                                </span>
                                <div class="mb-4">
                                    <b class="font-x3">Get Your Price</b>
                                </div>
                                <div class="timeline-content">
                                    <div class="mb-2">
                                        <v-icon color="primary" class="mr-2">check_circle</v-icon>
                                        <b>Tell Us About Your Vehicle</b>
                                    </div>
                                    <div class="ml-8">
                                        <div>
                                            Provide basic information about your vehicle including your license plate or VIN, mileage, and condition. Vroom’s proprietary buying system gives you an instant price for your vehicle based on your description and data from thousands of similar transactions.
                                        </div>
                                    </div>
                                </div>

                                <div class="timeline-content">
                                    <div class="mb-2">
                                        <v-icon color="primary" class="mr-2">check_circle</v-icon>
                                        <b>Get Your Instant Price</b>
                                    </div>
                                    <div class="ml-8">
                                        <div>
                                            We'll give you an instant price for your vehicle that is good for the earlier of 7 days or 250 additional miles. If we’re unable to calculate an instant price, one of our car-buying experts will email you a price typically within the same day.
                                        </div>

                                        <v-btn depressed text plain color="primary" class="pl-0 mt-4">
                                            <b>More about Selling to Hermes Autos</b>
                                        </v-btn>
                                    </div>
                                </div>
                            </v-timeline-item>
                        </v-timeline>
                    </v-col>
                </v-row>
            </div>

            <div class="mt-12">
                <v-row>
                    <v-col cols="3">
                        <span><v-img contain width="200" position="center" :src="require('../assets/img/pic.png')" alt="Hermes Autos popular brands"></v-img></span>
                    </v-col>
                    <v-col cols="9">
                        <v-timeline align-top dense>
                            <v-timeline-item large color="transparent" fill-dot flat>
                                <span slot="icon">
                                    <v-icon size="50" color="primary">description</v-icon>
                                </span>
                                <div class="mb-4">
                                    <b class="font-x3">Close the Deal</b>
                                </div>
                                <div class="timeline-content">
                                    <div class="mb-2">
                                        <v-icon color="primary" class="mr-2">check_circle</v-icon>
                                        <b>Verify Your Information</b>
                                    </div>
                                    <div class="ml-8">
                                        <div>
                                            When you’re ready to sell your vehicle to us (price is good for 7 days or an additional 250 miles), you’ll verify ownership information and upload pictures of your photo ID and registration. You’re one step closer to getting paid! Our team will be in touch to discuss transferring your title and finalizing your deal.
                                        </div>
                                    </div>
                                </div>

                                <div class="timeline-content">
                                    <div class="mb-2">
                                        <v-icon color="primary" class="mr-2">check_circle</v-icon>
                                        <b>Schedule Your Pickup</b>
                                    </div>
                                    <div class="ml-8">
                                        <div>
                                            Our team will work with you to schedule a free pickup from your driveway or a convenient location near you (within the lower 48 states). That's right, pickup is absolutely free
                                        </div>

                                        <v-btn depressed text plain color="primary" class="pl-0 mt-4">
                                            <b>More about Picking Up Your Car</b>
                                        </v-btn>
                                    </div>
                                </div>
                            </v-timeline-item>
                        </v-timeline>
                    </v-col>
                </v-row>
            </div>

            <div class="mt-12">
                <v-row>
                    <v-col cols="3">
                        <span><v-img contain width="200" position="center" :src="require('../assets/img/pic.png')" alt="Hermes Autos popular brands"></v-img></span>
                    </v-col>
                    <v-col cols="9">
                        <v-timeline align-top dense>
                            <v-timeline-item large color="transparent" fill-dot flat>
                                <span slot="icon">
                                    <v-icon size="50" color="primary">description</v-icon>
                                </span>
                                <div class="mb-4">
                                    <b class="font-x3">Get Paid</b>
                                </div>
                                <div class="timeline-content">
                                    <div class="mb-2">
                                        <v-icon color="primary" class="mr-2">check_circle</v-icon>
                                        <b>Look Out for Your Check</b>
                                    </div>
                                    <div class="ml-8">
                                        <div>
                                            With confirmation of pickup, we will process your payment and send you a check via overnight mail.
                                        </div>
                                    </div>

                                        <v-btn depressed text plain color="primary" class="pl-0 mt-4">
                                            <b>More about Paid</b>
                                        </v-btn>
                                </div>
                            </v-timeline-item>
                        </v-timeline>
                    </v-col>
                </v-row>
            </div>
        </v-container>
    </section>

    <section-cta :section="sectionCta" />
    <section>
        <v-container>
            <starred-reviews />
        </v-container>
    </section>

    <hr />

    <section>
        <footer-question />
    </section>
  </div>
</template>

<script>
import FooterQuestion from '../components/footerQuestion'
import pageHero from '../components/pageHero'
import sectionCta from '../components/sectionCta'
import starredReviews from '../components/starredReviews'
export default {
    components: {
        pageHero,
        sectionCta,
        starredReviews,
        FooterQuestion
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
            sectionCta: {
                title: "Ready For Your Next Great Car",
                cta: "Check Out Our Inventory",
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
.timeline-content:not(:nth-child(2)) {
    margin-top: 30px;
}
</style>