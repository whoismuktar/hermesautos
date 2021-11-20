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
        ctaAction: "",
      },
      team: [
        {
          fullName: "Lawrence Jibowu",
          position: "Director",
          about: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis officiis soluta harum. Excepturi similique rerum mollitia deserunt voluptatem itaque sed quod quibusdam tempora suscipit! Consequatur voluptas quaerat culpa nobis asperiores!",
          avatar: require('../assets/img/avatar.png'),
        },
        {
          fullName: "Jelil Kabiyesi",
          position: "Co-Founder",
          about: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis officiis soluta harum. Excepturi similique rerum mollitia deserunt voluptatem itaque sed quod quibusdam tempora suscipit! Consequatur voluptas quaerat culpa nobis asperiores!",
          avatar: require('../assets/img/avatar.png'),
        },
        {
          fullName: "Tom Holland",
          position: "CEO / Co-Founder",
          about: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis officiis soluta harum. Excepturi similique rerum mollitia deserunt voluptatem itaque sed quod quibusdam tempora suscipit! Consequatur voluptas quaerat culpa nobis asperiores!",
          avatar: require('../assets/img/avatar.png'),
        }
      ]
    }
  }
}
</script>

<style>

</style>