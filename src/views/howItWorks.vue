<template>
  <div class="how-it-works">
    <page-hero
      :carImg="hero.carImg"
      :intro="hero.intro"
      :title="hero.title"
      :subtitle="hero.subtitle"
      :cta="hero.cta"
      :ctaAction="hero.ctaAction"
    />

    <section>
      <v-container>
        <div>
          <div class="font-x2b">For Buyers</div>
          <v-row>
            <v-col cols="3">
              <span
                ><v-img
                  contain
                  width="200"
                  position="center"
                  :src="require('../assets/img/pic.png')"
                  alt="Hermes Autos popular brands"
                ></v-img
              ></span>
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
                      <b>Select a Vehicle</b>
                    </div>
                    <div class="ml-8">
                      <div>
                        On hermesautos.com, you'll find thousands of high-quality, low-mileage vehicles, with new cars and trucks added every week. All of the vehicles are thoroughly inspected, so you can rest assured that you'll be enjoying a fantastic ride.
                      </div>

                      <v-btn
                        depressed
                        text
                        plain
                        color="primary"
                        class="pl-0 mt-4"
                      >
                        <b>Begin your Purchase.</b>
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
                        Click “Start Purchase” and create an account on hermesautos.com, our system will save your information for future purchase.
                      </div>

                      <v-btn
                        depressed
                        text
                        plain
                        color="primary"
                        class="pl-0 mt-4"
                      >
                        <b>More about buying with Hermes Autos</b>
                      </v-btn>
                    </div>
                  </div>

                  <div class="timeline-content">
                    <div class="mb-2">
                      <v-icon color="primary" class="mr-2">check_circle</v-icon>
                      <b>Select a Payment Method</b>
                    </div>
                    <div class="ml-8">
                      <div>
                        You have the option of paying with cash or financing through your bank. After you've completed this step, a Hermes Autos Car Specialist will contact you to go over the details.
                        details.
                      </div>

                      <v-btn
                        depressed
                        text
                        plain
                        color="primary"
                        class="pl-0 mt-4"
                      >
                        <b>More about Financing</b>
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
              <span
                ><v-img
                  contain
                  width="200"
                  position="center"
                  :src="require('../assets/img/pic.png')"
                  alt="Hermes Autos popular brands"
                ></v-img
              ></span>
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
                      <b>Upload Important Documents</b>
                    </div>
                    <div class="ml-8">
                      <div>
                        To prove your identification, snap a picture of your driver's license and proof of insurance. When our Car Specialist calls you, they'll ask for these and send you a link to submit them. You may be prompted to confirm additional facts based on your funding.
                      </div>
                    </div>
                  </div>

                  <div class="timeline-content">
                    <div class="mb-2">
                      <v-icon color="primary" class="mr-2">check_circle</v-icon>
                      <b>Put down a deposit</b>
                    </div>
                    <div class="ml-8">
                      <div>
                        We'll retain your vehicle for 24 hours if you pay a non-refundable deposit. This ensures that no one else can purchase the vehicle while the deal is being finalized. The deposit amount varies depending on the car.
                      </div>
                    </div>
                  </div>

                  <div class="timeline-content">
                    <div class="mb-2">
                      <v-icon color="primary" class="mr-2">check_circle</v-icon>
                      <b>Sign Document</b>
                    </div>
                    <div class="ml-8">
                      <div>
                        We'll either send your documentation to you for signature overnight or email it to you for e-signature (dependent on the requirements of your purchase). Review your paperwork carefully, sign where indicated, and return or complete it within 24 hours. We'll ensure everything looks good once we have it, and then the automobile will be yours. 
                      </div>

                      <v-btn
                        depressed
                        text
                        plain
                        color="primary"
                        class="pl-0 mt-4"
                      >
                        <b>More about Buying A Car with Heres Autos</b>
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
              <span
                ><v-img
                  contain
                  width="200"
                  position="center"
                  :src="require('../assets/img/pic.png')"
                  alt="Hermes Autos popular brands"
                ></v-img
              ></span>
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
                      <b>Make a Delivery Plan</b>
                    </div>
                    <div class="ml-8">
                      <div>
                        We give your automobile a final inspection and schedule delivery after receiving your signed and authorized papers and money. Our Delivery Support Team will keep you updated as soon as it's on its way to you.
                      </div>
                    </div>
                  </div>

                  <div class="timeline-content">
                    <div class="mb-2">
                      <v-icon color="primary" class="mr-2">check_circle</v-icon>
                      <b>Meet Your New Vehicle</b>
                    </div>
                    <div class="ml-8">
                      <div>
                        Typically, your vehicle will arrive within 4-6 weeks following your order, though this may take longer in some cases. Your car will be delivered to your home or a convenient location near you.
                      </div>

                      <v-btn
                        depressed
                        text
                        plain
                        color="primary"
                        class="pl-0 mt-4"
                      >
                        <b>More about Delivery</b>
                      </v-btn>
                    </div>
                  </div>

                  <div class="timeline-content">
                    <div class="mb-2">
                      <v-icon color="primary" class="mr-2">check_circle</v-icon>
                      <b>Look for Temporary Tags</b>
                    </div>
                    <div class="ml-8">
                      <div>
                        Your automobile will be delivered with temporary tags that will allow you to drive it right away. Upon delivery, you'll receive an email with information about titling and registration. We file your DMV paperwork for you if you financed your vehicle through Hermesautos.com. 
                      </div>

                      <v-btn
                        depressed
                        text
                        plain
                        color="primary"
                        class="pl-0 mt-4"
                      >
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
                        It takes more than a lap around the block to get to know your car. You have a week (7 days or 250 miles) to decide if it's the best fit for you.
                      </div>

                      <v-btn
                        depressed
                        text
                        plain
                        color="primary"
                        class="pl-0 mt-4"
                      >
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
                        Feel good about yourself for getting a wonderful car at a great price and having it delivered right to your door. Enjoy your journey, tell your friends, and if you need anything more, give our Customer Support staff a call.
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
              <span
                ><v-img
                  contain
                  width="200"
                  position="center"
                  :src="require('../assets/img/pic.png')"
                  alt="Hermes Autos popular brands"
                ></v-img
              ></span>
            </v-col>
            <v-col cols="9">
              <v-timeline align-top dense>
                <v-timeline-item large color="transparent" fill-dot flat>
                  <span slot="icon">
                    <v-icon size="50" color="primary">calculate</v-icon>
                  </span>
                  <div class="mb-4">
                    <b class="font-x3">Get a Quote</b>
                  </div>
                  <div class="timeline-content">
                    <div class="mb-2">
                      <v-icon color="primary" class="mr-2">check_circle</v-icon>
                      <b>Describe your Vehicle to us.</b>
                    </div>
                    <div class="ml-8">
                      <div>
                        Provide basic car information, such as your license plate or VIN, mileage, and condition. Based on your description and statistics from hundreds of comparable transactions, Hermesautos' exclusive buying technology provides you with an instant price for your vehicle.
                      </div>
                    </div>
                  </div>

                  <div class="timeline-content">
                    <div class="mb-2">
                      <v-icon color="primary" class="mr-2">check_circle</v-icon>
                      <b>Get an Instant Quote</b>
                    </div>
                    <div class="ml-8">
                      <div>
                        We'll provide you an instant price for your vehicle that is valid for 7 days or 250 extra miles, whichever comes first. If we can't compute an instant quote, one of our car-buying experts will normally email you a price the same day.
                      </div>

                      <v-btn
                        depressed
                        text
                        plain
                        color="primary"
                        class="pl-0 mt-4"
                      >
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
              <span
                ><v-img
                  contain
                  width="200"
                  position="center"
                  :src="require('../assets/img/pic.png')"
                  alt="Hermes Autos popular brands"
                ></v-img
              ></span>
            </v-col>
            <v-col cols="9">
              <v-timeline align-top dense>
                <v-timeline-item large color="transparent" fill-dot flat>
                  <span slot="icon">
                    <v-icon size="50" color="primary">description</v-icon>
                  </span>
                  <div class="mb-4">
                    <b class="font-x3">Complete the transaction</b>
                  </div>
                  <div class="timeline-content">
                    <div class="mb-2">
                      <v-icon color="primary" class="mr-2">check_circle</v-icon>
                      <b>Double-check Your Information</b>
                    </div>
                    <div class="ml-8">
                      <div>
                        You'll check ownership information and upload images of your photo ID, registration, title in your name (if applicable), and odometer when you're ready to sell your vehicle to us (pricing is good for 7 days or an additional 250 miles). You're one step closer to receiving your payment! Our team will contact you to discuss the transfer of your title and the finalization of your transaction.
                      </div>
                    </div>
                  </div>

                  <div class="timeline-content">
                    <div class="mb-2">
                      <v-icon color="primary" class="mr-2">check_circle</v-icon>
                      <b>Make Your Pickup Appointment</b>
                    </div>
                    <div class="ml-8">
                      <div>
                        Our team will work with you to arrange a free pickup from your driveway or a nearby location that is convenient for you (within our coverage region). That's right, there's no charge for pick-up.
                      </div>

                      <v-btn
                        depressed
                        text
                        plain
                        color="primary"
                        class="pl-0 mt-4"
                      >
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
              <span
                ><v-img
                  contain
                  width="200"
                  position="center"
                  :src="require('../assets/img/pic.png')"
                  alt="Hermes Autos popular brands"
                ></v-img
              ></span>
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
                      <b>Keep an eye out for your payment</b>
                    </div>
                    <div class="ml-8">
                      <div>
                        We'll process your payment and send it to you by via your choice of direct deposit after we get confirmation of pickup.
                      </div>
                    </div>
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
import FooterQuestion from "../components/footerQuestion";
import pageHero from "../components/pageHero";
import sectionCta from "../components/sectionCta";
import starredReviews from "../components/starredReviews";
export default {
  components: {
    pageHero,
    sectionCta,
    starredReviews,
    FooterQuestion,
  },
  data() {
    return {
      hero: {
        carImg: require("../assets/img/gle-benz.png"),
        intro: "How It Works",
        title: "BUYING AND SELLING MADE EASY",
        subtitle:
          "You've discovered the better way for purchasing a vehicle. \n Find a fantastic car and make it yours, all without having to visit a dealership. But how precisely do you do it? Here's how to do it.",
        cta: "Shop Now",
        ctaAction: "",
      },
      sectionCta: {
        title: "Ready For Your Next Great Car",
        cta: "Check Out Our Inventory",
        ctaAction: "",
      },
    };
  },
};
</script>

<style scoped>
>>> .v-timeline-item__dot {
  box-shadow: none;
}
.timeline-content:not(:nth-child(2)) {
  margin-top: 30px;
}
</style>