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

    <v-container class="mt-12">
      <v-row justify="center">
        <v-col cols="6" sm="2">
          <v-btn depressed :to="'#mechanicalCoverage'">
            Mechanical Coverage
          </v-btn>
        </v-col>

        <v-col cols="6" sm="2">
          <v-btn depressed :to="'#everydayCoverage'"> Everyday Coverage </v-btn>
        </v-col>

        <v-col cols="6" sm="2">
          <v-btn depressed :to="'#complimentaryCoverage'">
            Complimentary Coverage
          </v-btn>
        </v-col>
      </v-row>
    </v-container>

    <section id="mechanicalCoverage">
      <v-container>
        <div class="text-center mb-12 font-x2b">Mechanical Coverage</div>
        <v-row>
          <v-col cols="12" sm="6">
            <div class="font-x3b">Vehicle Service Protection</div>
            <div>
              The majority of Hermes Autos' vehicles are still protected by
              their original manufacturer's warranty, albeit this may be
              limited. The Vehicle Service Protection (VSP) package is meant to
              help shield you from unexpected repair costs.
            </div>

            <div class="my-6">
              <b>Plan Highlights</b>
            </div>

            <hr class="mb-10" />

            <ul class="pl-0">
              <li>Benefits that go beyond the OEM warranty on your vehicle.</li>
              <li>
                Mechanical repair coverage for up to 10 years or 120K miles,
                including parts and labor.
              </li>
              <li>
                In the event of mechanical failure, up to 1,500 parts are
                covered.
              </li>
              <li>
                All authorized service providers handle nationwide repairs and
                claims.
              </li>
              <li>
                Battery service, flat tire assistance, lockout assistance,
                fuel/fluid supply, and towing reimbursement are all available 24
                hours a day, 7 days a week with increased roadside benefits.
              </li>
            </ul>

            <div class="mt-12">
              <h4>Coverage exclusions and limitations may apply.</h4>
              <p class="font-sm">
                Mechanical failures covered under your vehicle's manufacturer's
                warranty; accidents, collisions, vandalism, or weather-related
                situations; lack of maintenance or pre-existing issues; Repairs
                carried out without prior approval. In the event of a mechanical
                breakdown/failure, Platinum exclusionary coverage covers all
                mechanical parts of your vehicle unless they are specifically
                mentioned as not covered in the exclusions section of the
                Agreement.
              </p>
            </div>
          </v-col>

          <v-col cols="12" sm="6">
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

    <section class="lightBG" id="everydayCoverage">
      <v-container>
        <div class="text-center mb-12 font-x2b">Everyday Coverage</div>

        <v-row>
          <v-col cols="12" sm="6">
            <div class="font-x3b">Tire & Wheel Protection</div>

            <div>
              Damage to your tires or wheels caused by road hazards such as
              metal, nails, glass, debris, and potholes is covered by Tire &
              Wheel Protection. The only pieces of your car that make touch with
              the road are the tires and wheels. With Tire & Wheel Protection,
              you can be ready for road hazards.
            </div>

            <h3 class="mt-5">Benefits</h3>

            <ul class="pl-0">
              <li>
                Due to structural damage caused by a covered road hazard, one
                tire must be repaired or replaced.
              </li>
              <li>
                If road hazard damage prevents the wheel from sealing to the
                tire or maintaining the tire manufacturer's air pressure
                criteria, the wheel should be repaired or replaced.
              </li>
              <li>
                The Multi-Coverage Protection Plan includes cosmetic wheel
                repair as a benefit.
              </li>
              <li>
                Covers expenditures for installation and balancing as well as
                other necessary repairs.
              </li>
              <li>
                Covers the replaced tires and wheels for the rest of their life.
              </li>
              <li>
                In the event of covered road hazard damage, towing costs are
                reimbursed per incident.
              </li>
              <li>
                There is no limit to how many structural damage claims are
                covered.
              </li>
              <li>There are no restrictions on how far you can travel.</li>
              <li>There is no deductible for this insurance.</li>
            </ul>

            <div class="mt-12">
              <h4>Coverage exclusions and limitations may apply.</h4>
              <p class="font-sm">
                When damage happens, normal wear and tear, vandalism, or road
                conditions seen in construction sites/zones, tires with less
                than 3/32" tread depth are at risk. Tires or wheels that have
                been damaged cosmetically Wheels with chrome/chrome cladding
                have been damaged cosmetically. Repairs/replacements carried
                done without prior approval. Exclusions may apply. For precise
                coverage details, including limits and exclusions, please refer
                to your Product Agreement. Coverage varies according on the
                dealer, lender, and state.
              </p>
            </div>
          </v-col>

          <v-col cols="12" sm="6">
            <div class="mt-n12 d-flex">
              <v-img
                cover
                aspect-ratio="1"
                width="500"
                position="left"
                :src="require('../assets/img/side-car2.png')"
                alt="Hermes Autos"
              ></v-img>
            </div>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="12" sm="6">
            <div class="mt-n12 d-flex">
              <v-img
                cover
                aspect-ratio="1"
                width="500"
                position="left"
                :src="require('../assets/img/side-car2.png')"
                alt="Hermes Autos"
                class="flipX"
              ></v-img>
            </div>
          </v-col>

          <v-col cols="12" sm="6">
            <div class="font-x3b">Dent Protection</div>
            <div>
              Optional Damage Protection should be considered well before your
              first dent or ding. Dent Protection helps to mask these ugly yet
              unavoidable flaws. Door dings and minor dents can be repaired
              using a paintless dent repair procedure that does not compromise
              your vehicle's paint finish or necessitates fresh coats of paint.
              <br />
              <br />
              Dents and dings may detract from the resale or trade-in value of
              your vehicle, in addition to marring its appearance. It's simple
              to safeguard your investment with Dent Protection. Repairs can be
              done at the dealership, at your home, or at your place of
              business, and there are no out-of-pocket fees.
            </div>

            <h3 class="mt-5">Benefits</h3>

            <ul class="pl-0">
              <li>
                Covers the permanent elimination of door dings and minor dents
                up to four (4) inches in diameter without affecting the factory
                finish on your car.
              </li>
              <li>
                Includes per-incident hail damage coverage up to the lesser of
                your primary insurance deductible or your deductible from your
                secondary policy.
              </li>
              <li>
                Repairs can be done at your place of business or at your home.
              </li>
              <li>
                There are no deductibles and there are no limits to the number
                of claims you can make.
              </li>
              <li>There are no restrictions on how far you can travel.</li>
            </ul>

            <div class="mt-12">
              <h4>Coverage exclusions and limitations may apply.</h4>
              <p class="font-sm">
                Dents or dents greater than four (4) inches in diameter, not
                placed in an accessible region, or not repairable by the
                paintless dent repair procedure; Repairs that will impact or
                damage the paint or finish of the vehicle. Vandalism has caused
                significant damage. There may be other exclusions. Specific
                coverage specifics, including limits and exclusions, can be
                found in your Product Agreement.
              </p>
            </div>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="12" sm="6">
            <div class="font-x3b">Key Protection</div>

            <div>
              Vehicle key fobs and remotes can be expensive to repair if they
              are lost or damaged. As a result, getting Key Protection is an
              excellent idea. We can help you if your keys are lost, broken, or
              locked inside your vehicle.
            </div>

            <h3 class="mt-5">Benefits</h3>

            <ul class="pl-0">
              <li>Replaces the vehicle key/remote that is covered.</li>
              <li>Provides assistance for the covered vehicle's lockout.</li>
              <li>Towing to a registered servicing facility is covered.</li>
              <li>There are no deductibles.</li>
            </ul>

            <div class="mt-12">
              <h4>Coverage exclusions and limitations may apply.</h4>
              <p class="font-sm">
                Replacement keys for any additional master keys not included
                with the covered vehicle at the time of purchase. If your keys
                are protected by a manufacturer's, repairer's, or supplier's
                warranty or recall, you can get replacement keys. Any key
                replacements that haven't been authorized in advance; Exclusions
                may apply. For precise coverage details, including limits and
                exclusions, please refer to your Product Agreement.
              </p>
            </div>
          </v-col>

          <v-col cols="12" sm="6">
            <div class="mt-n12 d-flex">
              <v-img
                cover
                aspect-ratio="1"
                width="500"
                position="left"
                :src="require('../assets/img/side-car2.png')"
                alt="Hermes Autos"
              ></v-img>
            </div>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="12" sm="6">
            <div class="mt-n12 d-flex">
              <v-img
                cover
                aspect-ratio="1"
                width="500"
                position="left"
                :src="require('../assets/img/side-car3.png')"
                alt="Hermes Autos"
                class="flipX"
              ></v-img>
            </div>
          </v-col>

          <v-col cols="12" sm="6">
            <div class="font-x3b">Windshield Protection</div>

            <div>
              Because your windshield is your window to the wide road,
              Windshield Protection is an option worth considering. A minor chip
              or fracture in your windshield can block your vision and be
              annoying. It can also jeopardize the structural integrity of your
              entire windshield if left unattended. The benefit of having
              Windshield Protection when your windshield needs to be repaired is
              obvious.
            </div>

            <h3 class="mt-5">Benefits</h3>

            <ul class="pl-0">
              <li>
                Repairs to the front windshield are unlimited owing to chips and
                cracks produced by road debris.
              </li>
              <li>
                Repairs can be done in the comfort of your own home, business,
                or through an authorized repair provider.
              </li>
              <li>There is no limit to how many times this can happen.</li>
              <li>There are no restrictions on mileage.</li>
              <li>There is no deductible to pay.</li>
            </ul>

            <div class="mt-12">
              <h4>Coverage exclusions and limitations may apply.</h4>
              <p class="font-sm">
                The front windshield was replaced. Other than the front
                windshield, there is damage. Stress cracks or cracks that are
                more than six (6) inches long, or if repairs may restrict the
                driver's line of sight. Hail, vandalism, or negligence caused
                the damage. There may be other exclusions. Specific coverage
                specifics, including limits and exclusions, can be found in your
                Product Agreement.
              </p>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <section>
      <v-container>
        <v-row>
          <v-col cols="12" sm="6">
            <div>
              <div class="pa-2 black white--text">GAP PROTECTION EXAMPLE</div>

              <div class="borderLight text-left">
                <table class="mb-3">
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

          <v-col cols="12" sm="6">
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

    <section class="lightBG" id="complimentaryCoverage">
      <v-container>
        <div class="text-center mb-5">
          <div class="font-x3b">Complimentary Coverage</div>

          <div class="font-x3b">
            Know that you’re protected from unexpected mechanical breakdown
            expenses and road hazards with our complimentary 90-Day Limited
            Warranty and 1-Year Roadside Assistance
          </div>
        </div>

        <v-row>
          <v-col cols="12" sm="6">
            <div>
              <b class="black font-tiny pa-1 white--text">INCLUDED STANDARD</b>
            </div>

            <div class="my-7">
              <b>90-Day limited warranty</b>
            </div>

            <div>
              The limited warranty serves to keep the expenses of mechanical
              breakdown, repairs, parts, and labor to a minimum.
            </div>

            <hr class="my-10" />

            <ul class="pl-0">
              <li>
                Covers unforeseen costs such as parts and labor incurred as a
                result of mechanical breakdown.
              </li>
              <li>
                3 months or 6,000 miles of protection, whichever comes first.
              </li>
              <li>Only a small deductible per incident is required.</li>
            </ul>

            <div class="mt-12">
              <h4>Coverage exclusions and limitations may apply.</h4>
              <p class="font-sm">
                This content is intended to provide general information on
                Hermes Autos' 90-Day Limited Warranty ("Limited Warranty") and
                1-Year Roadside Assistance ("Roadside Assistance") products and
                should not be used as the sole basis for determining which, if
                any, goods to purchase. The Roadside Assistance and the Limited
                Warranty are not insurance. All Limited Warranty and/or Roadside
                Assistance transactions are controlled entirely by their written
                agreements, which contain the precise terms, conditions, and
                coverage information, including limitations and exclusions. Some
                car models may be excluded from coverage.
              </p>
            </div>
          </v-col>

          <v-col cols="12" sm="6">
            <div>
              <b class="black font-tiny pa-1 white--text">INCLUDED STANDARD</b>
            </div>

            <div class="my-7">
              <b>1-year roadside assistance</b>
            </div>

            <div>
              Emergency aid is available 24 hours a day, 7 days a week to help
              you prepare for the unexpected. We are available 24 hours a day, 7
              days a week, 365 days a year to assist you.
            </div>

            <hr class="my-10" />

            <ul class="pl-0">
              <li>
                Towing, flat tire repair, oil, fluid, and water delivery, fuel
                delivery, battery replacement, and lockout assistance are all
                available.
              </li>
              <li>Travel expenses are reimbursed in an emergency.</li>
              <li>There is no deductible.</li>
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
          "Hermes Autos provides a comprehensive range of protection packages to provide you further peace of mind today and in the future.",
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