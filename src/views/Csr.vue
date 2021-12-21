<template>
  <div class="csr pb-12">
      <v-carousel height="60vh" hide-delimiter-background hide-delimiters cycle>
        <v-carousel-item
            v-for="(slide, index) in csrSlides"
            :key="index"
        >

            <v-sheet
            height="100%"
            tile
            class="d-flex flex-column justify-center align-center"
            >
                <v-img :src="slide.img" width="100%" height="70%"></v-img>
            </v-sheet>
        </v-carousel-item>
      </v-carousel>
      <section class="intro-section">
          <v-container>
              <v-row no-gutters align="center">
                  <v-col cols="6" class="fillHeight px-10 d-flex flex-column justify-center" align-self="center">
                    <h1 class="font-x2b">Building a <br> Better Planet</h1>
                    <div class="intro-description">Hermes Autos recognizes its impact on the communities in which it operates and believes it has a tremendous opportunity to change the lives of these communities. It aspires to be a trusted partner who contributes to the region's social, economic, and environmental progress. As part of its commitment to creating economic opportunity in the communities where it operates, Hermes Autos has volunteered its time, skills, and resources to assist communities and has undertaken a series of locally relevant activities.</div>
                  </v-col>

                  <v-col cols="6" class="fillHeight">
                    <v-img :src="require('../assets/img/csr2.jpeg')" height="100%"></v-img>
                  </v-col>
              </v-row>
          </v-container>
      </section>

      <section>
        <v-container>
            <v-row align="center">
                <v-col cols="6">
                    <div class="text-center font-x3b mb-4">CSR OBJECTIVE</div>
                    <div>Hermes Autos is devoted to sustainable development and inclusive growth as a responsible corporate citizen, and has spent the last several years focused on topics such as water, the environment, healthy living, grassroots education, the girl child, gender equality, and women's empowerment. Hermes Autos' CSR initiatives are focused on major areas of concern, such as hunger reduction, education, renewable energy, and gender equality. The following are some of our most important areas of impact:</div>
                </v-col>
                <v-col cols="6">
                    <ol>
                        <li class="st-Li">
                            <h4>HUNGER</h4>
                            <div>Promotion of  projects,  activities and events that focus on putting an end to hunger, poverty, and malnutrition; as well as promoting preventive health care and cleanliness.</div>
                        </li>
                        <li class="st-Li">
                            <h4>EDUCATION</h4>
                            <div>Promotion of education, including special education and employment increasing vocation skills, particularly among children, women, the elderly, and the differently abled, as well as livelihood improvement projects.</div>
                        </li>
                        <li class="st-Li">
                            <h4>GIRLCHILD AND WOMEN</h4>
                            <div>Gender equality, women's empowerment, the establishment of houses and hostels for women and orphans, the establishment of old age homes, day care centers, and other senior citizen amenities, as well as steps to reduce inequities experienced by socially and economically disadvantaged groups.</div>
                        </li>
                        <li class="st-Li">
                            <h4>RENEWABLE ENERGY</h4>
                            <div>We are supporting the Global call for Zero Emission by implementing, creating and deploying renewable energy in Rural and Sub-urban Communities.</div>
                        </li>
                    </ol>
                </v-col>
            </v-row>
        </v-container>
      </section>

      <section>
          <v-container>
              <v-row align="center" class="mb-12">
                  <v-col cols="6">
                    <div class="text-center font-x3b mb-4">MONITORING OF CSR PROJECTS</div>
                    <div>The Board's CSR Committee has developed a "transparent monitoring structure" for Hermes Autos's different CSR Projects, Programs, and Activities, which includes conducting periodic impact evaluations of CSR Projects and Programs through independent third-party organizations as needed. Simultaneously, it collects feedback from a variety of recipients of Hermes Autos's CSR projects, activities, and programs in order to assess their value.</div>
                  </v-col>

                  <v-col cols="6">
                    <v-img :src="require('../assets/img/csr4.jpeg')" class="radius20"></v-img>
                  </v-col>
              </v-row>

              <v-row align="center" class="mt-12">
                  <v-col cols="6">
                    <v-img :src="require('../assets/img/csr3.jpeg')" class="radius20"></v-img>
                  </v-col>

                  <v-col cols="6">
                    <div class="text-center font-x3b mb-4">CSR ACTIVITIES/ PROJECTS/PROGRAMS:</div>
                    <div>The CSR Committee of the Board will prepare a list of CSR Projects, Activities, and Programs that Hermes Autos proposes to undertake during the financial year, specifying the modalities of execution in the areas and sectors chosen, as well as implementation schedules for approval by the Board, at the start of each financial year. In our monthly CSR Bulletin, we announce Hermes Autos's current CSR activities, projects, and programs, together with their execution modalities and implementation. Other activities, projects, and programs may be undertaken by Hermes Autos as it deems fit."</div>
                  </v-col>
              </v-row>
          </v-container>
      </section>
  </div>
</template>

<script>
export default {
    data() {
        return {
            csrSlides: [
                {
                    img: require('../assets/img/csr-4.jpg')
                },
                {
                    img: require('../assets/img/csr-5.jpg')
                },
                {
                    img: require('../assets/img/csr-8.jpg')
                },
                {
                    img: require('../assets/img/csr-12.jpg')
                },
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
.hero {
    .csr-hero-img {
        // position: absolute;
        .csr-hero-title {
            color: var(--v-primary-base);

            &::before {
                content: "";
                position: absolute;
                width: 100%;
                height: 100%;
                background-color: rgb(0 0 0 / 35%);
                left: 0;
                top: 0;
                z-index: -1;
            }
        }
    }

}
.intro-description {
    width: 70%;
    margin-left: 14%;
}
</style>