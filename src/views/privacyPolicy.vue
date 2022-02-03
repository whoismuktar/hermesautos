<template>
  <div class="privacy-policy">
    <page-hero :carImg="hero.carImg" :intro="hero.intro" :title="hero.title" :subtitle="hero.subtitle" :cta="hero.cta" :ctaAction="hero.ctaAction" />

    <v-container>
        <section>
            <h1>Title</h1>

            <ol class="privacy-lists">
                <li class="privacy-list">
                    <h2>Scope</h2>
                    <div>
                        This Privacy Policy applies to the tools, features and services offered by Hermes Autos, Inc. or any of its subsidiaries, such as Hermes Autos Automotive, LLC d/b/a Hermes Autos or d/b/a Hermes Autos Logistics, LLC (together, "Hermes Autos", "we", "us", or "our"), through any Hermes Autos website, including Hermes Autos, and any other site "powered by Hermes Autos" (together, "Sites") or Hermes Autos mobile applications ("Apps"), as well as offline interactions with you related to your sale, trade, purchase or financing of a vehicle through Hermes Autos. By using or accessing the Services in any manner, you acknowledge that you accept the practices and policies outlined below, and you hereby consent to our collection, use and sharing of your information as described in this Privacy Policy. Also, your use of Hermes Autos’ Services is subject at all times to our, which incorporates the Privacy Policy. Unless otherwise stated, any terms we use in this Policy without defining them have the definitions given to them in the Terms of Use.
                        <br>
                        <br>
                        You may print a copy of this Privacy Policy by clicking.

                    </div>
                </li>
                <li class="privacy-list">
                    <h2>Types of Information Collected or Received</h2>
                    <div>
                        In connection with the Services, Hermes Autos and our third-party service providers may collect information about you or the device(s) you use to access the Services. We collect a variety of information, such as:

                        <ul>
                            <li>
                                <b>Account Information and Other Information You Provide Voluntarily.</b>  You may create an account through the Services and, if you do so, we will collect your name, email address, login information and telephone number. We also may collect your address for vehicle registration, pickup or delivery, as well as certain documents required for financing or to complete registration, where applicable (e.g., driver’s license, title and proof of insurance). Further, we collect any additional information that you voluntarily provide to us directly or through the Services, such as when you communicate with us in person or by email, text message, telephone or chat, ask us a question, respond to our surveys, post comments, or provide reviews or testimonials.
                            </li>
                            <li>
                                <b>Vehicle Information</b>  If you are interested in selling or trading in your vehicle to Hermes Autos, you may obtain a vehicle appraisal from us through the Services. In order to provide an appraisal, we request and collect your Vehicle Identification Number ("VIN") or license plate, vehicle history, and information about the condition of your vehicle. We also will request your name and contact information to contact you about the appraisal.
                            </li>
                        </ul>
                    </div>
                </li>
            </ol>
        </section>
    </v-container>

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
                intro: "",
                title: "Rules of the Road",
                subtitle: "Hermes Autos's mission is to help you find your drive. Please make a pit stop here to learn more about the terms and policies that govern your use of our products and services.",
                cta: "Find Your Car",
                ctaAction: "",
            },
        }
    }
}
</script>

<style>

</style>