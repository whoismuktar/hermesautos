<template>
  <div class="protection">
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
        <v-row>
          <v-col cols="6">
            <div class="font-x3b">Vehicle Service Protection</div>
            <div>
              Most of Hermes Autos's vehicles are still covered under their
              original manufacturer's warranty, but the coverage may be limited.
              Hermes Autos's Vehicle Service Protection (VSP) product helps
              protect you in the event of unexpected expenses.
            </div>

            <div class="my-12">
              <b>Plan Highlights</b>
            </div>

            <hr class="mb-10" />

            <ul class="pl-0">
              <li>
                Coverage options up to 10 years or 120,000 miles for mechanical
                repairs, including parts and labor
              </li>
              <li>
                Pay nothing on covered repairs other than the selected
                deductible (per occurrence)
              </li>
              <li>
                Nationwide service available at your local franchised dealership
                or ASE-certified mechanic
              </li>
              <li>
                24-hour roadside assistance with enhanced benefits such as:
                battery service, flat tire assistance, fuel, fluid delivery, and
                lockout assistance
              </li>
            </ul>
          </v-col>

          <v-col cols="6">
            <div>
              <div class="pa-2 black white--text">What's Covered</div>

              <div>
                <table border>
                  <!-- <colsgroup>
                                    <col class="borderTest" style="width: 50%" />
                                    <col class="borderTest" style="width: 25%" />
                                    <col class="borderTest" style="width: 25%" />
                                </colsgroup> -->
                  <thead>
                    <tr>
                      <th></th>
                      <th>Manufacturer Warranty</th>
                      <th>Vehicle Service Protection</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr
                      v-for="(item, index) in protectionCoverage"
                      :key="index"
                    >
                      <td>{{ item.name }}</td>
                      <td class="text-center">
                        <font-awesome-icon
                          v-if="item.warranty"
                          icon="check-circle"
                          :color="'var(--v-primary-base)'"
                        />
                      </td>
                      <td class="text-center">
                        <font-awesome-icon
                          v-if="item.vsp"
                          icon="check-circle"
                          :color="'var(--v-primary-base)'"
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div class="mt-n12">
              <v-img
                contain
                width="500"
                position="center"
                :src="require('../assets/img/gle-benz.png')"
                alt="Hermes Autos"
              ></v-img>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <section class="lightBG">
      <v-container>
        <v-row>
          <v-col cols="6">
            <div>
              <div class="pa-2 black white--text">GAP PROTECTION EXAMPLE</div>

              <div class="borderLight text-left">
                <table>
                  <thead>
                    <tr>
                      <th>2016 BMW 3 Series</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <span>Amount owed on your car</span>
                      </td>
                      <td class="text-center">
                        <span>$30,000</span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <span>Insurance payout</span>
                      </td>
                      <td class="text-center">
                        <span>$30,000</span>
                      </td>
                    </tr>
                    <tr style="border-top: 1px solid grey">
                      <td>
                        <b>Amount still owed (GAP)</b>
                      </td>
                      <td class="text-center">
                        <b>$5,000</b>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div class="mt-n12">
              <v-img
                contain
                width="500"
                position="center"
                :src="require('../assets/img/gle-benz.png')"
                alt="Hermes Autos"
              ></v-img>
            </div>
          </v-col>

          <v-col cols="6">
            <div class="font-x3b">
              Hermes Auto's Guaranteed Asset Protection
            </div>
            <div>
              If your vehicle is ever declared a total loss due to an accident,
              theft or natural disaster, your insurance company might only
              reimburse you for their assessed market value of the vehicle,
              leaving you to pay the balance or "gap".
            </div>

            <br />
            <br />

            <div>
              <b>What's covered?</b>
            </div>

            <div>
              Hermes Autos’s Guaranteed Asset Protection (GAP) covers the
              difference between your primary insurance settlement and the
              outstanding balance on your vehicle's financing, subject to the
              terms and conditions of the program.
            </div>

            <hr class="mb-10" />

            <ul class="pl-0">
              <li>Waives covered losses up to $50,000</li>
              <li>
                May include coverage for your insurance deductible, up to $1,000
              </li>
              <li>
                Available on amounts financed up to 150% of your vehicle’s MSRP,
                up to $150K
              </li>
            </ul>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <section>
      <v-container>
        <v-row>
          <v-col cols="6">
            <div class="font-x3b">Tire & Wheel Protection</div>
            <div>
              <b>Maintain your momentum.</b>
            </div>

            <div>
              Because the softest parts of your vehicle have the hardest job, we
              offer Hermes Autos Protect Tire & Wheel Protection. It gives you
              the extra protection you need from road hazards such as metal,
              nails, glass, debris, or potholes with benefits including:
            </div>

            <ul class="pl-0">
              <li>
                Tires and wheels repaired or replaced if structurally damaged
                due to a covered road hazard
              </li>
              <li>
                Towing expenses reimbursed up to $100 in the event of the
                covered damage
              </li>
              <li>No deductible</li>
              <li>No limit on the number of claims</li>
            </ul>
          </v-col>

          <v-col cols="6">
            <div class="mt-n12 d-flex">
              <v-img
                cover
                aspect-ratio="1"
                width="500"
                position="left"
                :src="require('../assets/img/side-car.png')"
                alt="Hermes Autos"
              ></v-img>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <section class="lightBG">
      <v-container>
        <div class="text-center">
          <div class="font-x3b">Complimentary Coverage</div>

          <div class="font-x3b">
            Know that you’re protected from unexpected mechanical breakdown
            expenses and road hazards with our complimentary 90-Day Limited
            Warranty and 1-Year Roadside Assistance
          </div>
        </div>

        <v-row>
          <v-col cols="6">
            <div>
              <b class="black font-tiny pa-1 white--text">INCLUDED STANDARD</b>
            </div>

            <div class="my-7">
              <b>90-Day limited warranty</b>
            </div>

            <div>
              The limited warranty helps to minimize unexpected costs associated
              with mechanical breakdown, repairs, parts, and labor.
            </div>

            <hr class="my-10" />

            <ul class="pl-0">
              <li>
                Covers unexpected costs due to mechanical breakdown repairs such
                as parts and labor
              </li>
              <li>
                Protection for 3 months / 6,000 miles, whichever comes first
              </li>
              <li>Only a $50 deductible per occurrence</li>
            </ul>
          </v-col>

          <v-col cols="6">
            <div>
              <b class="black font-tiny pa-1 white--text">INCLUDED STANDARD</b>
            </div>

            <div class="my-7">
              <b>1-year roadside assistance</b>
            </div>

            <div>
              24-hour emergency assistance to help you prepare for the
              unexpected. We offer help 24 hours a day, 7 days a week, 365 days
              a year.
            </div>

            <hr class="my-10" />

            <ul class="pl-0">
              <li>
                Towing, flat tire, oil, fluid, water, fuel delivery, battery,
                and lock-out assistance
              </li>
              <li>Up to $600 in emergency travel expense reimbursement</li>
              <li>No deductible</li>
            </ul>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <section>
      <footer-question />
    </section>
  </div>
</template>

<script>
import footerQuestion from "../components/footerQuestion.vue";
import pageHero from "../components/pageHero";

export default {
  components: {
    pageHero,
    footerQuestion,
  },
  data() {
    return {
      hero: {
        carImg: require("../assets/img/gle-benz.png"),
        intro: "Hermes Autos Protection",
        title: "Comprehensive Coverage",
        subtitle:
          "Find the coverage plan that's right for your vehicle. For additional information and pricing, call now.",
        cta: "Get A Quote",
        ctaAction: "",
      },
      protectionCoverage: [
        {
          name: "Engine",
          warranty: true,
          vsp: true,
        },
        {
          name: "Transmission",
          warranty: true,
          vsp: true,
        },
        {
          name: "Drive Axle",
          warranty: true,
          vsp: true,
        },
        {
          name: "Additional Mechanical Repairs",
          warranty: false,
          vsp: true,
        },
        {
          name: "Roadside Assistance",
          warranty: false,
          vsp: true,
        },
        {
          name: "Use Your Local Service Provider",
          warranty: false,
          vsp: true,
        },
        {
          name: "Transferable And Refundable",
          warranty: false,
          vsp: true,
        },
        {
          name: "Towing Reimbursement",
          warranty: false,
          vsp: true,
        },
        {
          name: "Rental Car Reimbursement",
          warranty: false,
          vsp: true,
        },
        {
          name: "Trip Interruption Coverage",
          warranty: false,
          vsp: true,
        },
      ],
    };
  },
};
</script>

<style scoped>
li {
  list-style: none;
  margin: 1em 0;
}
li:before {
  content: "\2713";
  display: inline-block;
  margin-right: 8px;
  font-weight: bold;
  color: var(--v-primary-base);
  text-align: center;
}
table tr:nth-child(even) {
  background-color: var(--v-lightBG-base);
}
table th,
table td {
  padding: 8px;
}
</style>