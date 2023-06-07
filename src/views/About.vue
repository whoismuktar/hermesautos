<template>
  <div class="about-us">
    <page-hero :carImg="hero.carImg" :intro="hero.intro" :title="hero.title" :subtitle="hero.subtitle" :cta="hero.cta" :ctaAction="hero.ctaAction" />

    <section>
      <div class="font-x3b text-center mb-4">Meet The Team</div>

      <v-row justify="center">
        <v-col cols="12" sm="3" v-for="(person, index) in team" :key="index">
          <span>
            <v-img contain class="mb-5 team-avatar" width="20%" position="center" :src="person.avatar" :alt="person.fullName"></v-img>

            <div>{{ person.fullName }}</div>
            <div class="text-uppercase primary--text my-1">
              <b>{{ person.position }}</b>
            </div>
            <div>{{ person.about }}</div>
          </span>
        </v-col>
      </v-row>
    </section>

    <section>
      <section-cta :section="sectionCta" />
    </section>

    <section>
      <footer-question />
    </section>

  </div>
</template>

<script>
import sectionCta from '../components/sectionCta.vue'
import footerQuestion from '../components/footerQuestion.vue'
import pageHero from '../components/pageHero'
export default {
  components: {
    pageHero,
    sectionCta,
    footerQuestion
  },
  data() {
    return {
      hero: {
        carImg: require('../assets/img/gle-benz.png'),
        intro: "About Hermes Autos",
        title: "Get Your Next Car Delivered",
        subtitle: "Great Prices. Better Cars. Delivered to You.",
        cta: "Find Your Car",
        ctaAction: "",
      },
      sectionCta: {
        title: "We Are Hiring",
        subtitle: "Want to join the team?",
        cta: "View Careers At Hermes Autos",
        ctaAction: "contact",
        params: {
          reason: "Vacancy"
        }
      },
      team: [
        {
          fullName: "Alex Obinyan",
          position: "Director",
          about: "Alex Obinyan is highly accomplished director in the automotive industry with over two decades of experience. He has played a pivotal role in shaping the success of leading different auto car companies, leading cross-functional teams in the development of cutting-edge vehicle models. With a keen understanding of market dynamics and a passion for innovation, Alex has driven remarkable growth and profitability for the company. His collaborative leadership style and strategic vision have earned him recognition as a key influencer in the industry.",
          avatar: require('../assets/img/avatar.png'),
        },
        {
          fullName: "Sarah Ejodamen",
          position: "Co-Founder",
          about: "Sarah Ejodamen is a dynamic co-founder of Hermesautos, a prominent automotive company. With her entrepreneurial spirit and unwavering dedication, Sarah has been instrumental in building the company from its inception. Her deep knowledge of the automotive sector, coupled with her strong business acumen, has led to the successful establishment of Hermesautos as a market leader. Sarah's innovative mindset and ability to navigate industry challenges have been vital in driving the company's growth and fostering strategic partnerships.",
          avatar: require('../assets/img/avatar.png'),
        },
        {
          fullName: "Thomas Bridges",
          position: "CEO / Co-Founder",
          about: "Thomas Bridges is an accomplished CEO and the co-founder of Hermesautos, a renowned automotive company. With a visionary approach and extensive industry expertise, Thomas has played a pivotal role in shaping the company's trajectory since its inception. His commitment to excellence and customer satisfaction has driven the company's success and earned it a reputation for delivering cutting-edge products and services. Under his guidance, Hermesautos continues to thrive as a driving force in the industry, setting new standards for quality and performance.",
          avatar: require('../assets/img/avatar.png'),
        }
      ]
    }
  }
}
</script>

<style>

</style>