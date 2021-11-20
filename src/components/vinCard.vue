<template>
  <div class="vin-card">
      <v-card flat tile :max-width="maxWidth" class="pa-8">
        <v-card-title class="px-0">Check Your VIN</v-card-title>
        <v-card-text class="px-0">
        <div>Enter your VIN Number</div>
        <v-text-field v-model="vin" outlined dense hide-details="auto"></v-text-field>
        </v-card-text>

        <!-- <v-card-action> -->
        <v-btn dark width="100%" height="50" :loading="loading" @click="searchVin">Search</v-btn>
        <!-- </v-card-action> -->
    </v-card>

    <v-dialog persistent v-model="showDialog" max-width="900" content-class="vin-dialog">
      <v-container class="dialog-container white pa-10">
        <v-btn
          fab
          plain
          depressed
          width="22"
          height="22"
          class="close-dialog"
          @click="showDialog = false"
        >
          <v-icon size="15">close</v-icon>
        </v-btn>
        <div v-if="!fullReportActive"  class="vin-result">
          <div class="result-title car-title text-center">
              2011 Mercedes-Benz E-Class
          </div>
          <v-card class="vin-summary-card pa-10 pt-12">
            <div class="check-status-msg text-center">
              <span v-if="vinCheckSuccessful">Successfully Decoded</span>
              <span v-else>Failed to Decoded Information</span>
            </div>

            <div class="car-brief">
              <div class="d-flex align-center justify-space-between">
                <v-img contain :src="require('@/assets/img/salon.svg')" class="vin-car-img" max-width="25%"></v-img>
                <div class="car-brief-info">
                  <h3 class="car-title text-center">
                    2011 Mercedes-Benz E-Class
                  </h3>
                  <h3 class="car-title text-center">
                    WDDHF8HB2BA296633
                  </h3>
                </div>
              </div>
            </div>

            <div class="vin-summary vin-table">
              <v-row>
                <v-col cols="3" v-for="(d, k) in vinResult" :key="k" class="vin-table-col">
                  <div class="result-key">{{ k.replace(/_/g,' ') }}</div>
                  <div class="result-data">{{ d }}</div>
                </v-col>
              </v-row>
            </div>
          </v-card>
            <v-row class="mt-4">
              <v-col cols="12">
                <div class="text-right">
                  <v-btn depressed color="primary" @click="fullReportActive = true">
                    <span>Get Full Report</span>
                    <v-icon>chevron_right</v-icon>
                  </v-btn>
                </div>
              </v-col>
            </v-row>
        </div>

        <div v-else class="full-report-step">
          <v-stepper v-model="step">
            <v-stepper-header>
              <v-stepper-step
                :complete="step > 1"
                step="1"
              >
                Name
              </v-stepper-step>

              <v-divider></v-divider>

              <v-stepper-step
                :complete="step > 2"
                step="2"
              >
                Contact Details
              </v-stepper-step>

              <v-divider></v-divider>

              <v-stepper-step step="3">
                Finish
              </v-stepper-step>
            </v-stepper-header>

            <v-stepper-items>
              <v-stepper-content step="1">
                <v-card
                  class="my-12 mx-auto"
                  min-height="200px"
                  width="70%"
                  flat
                >
                  <v-text-field v-model.trim="customer.firstName" label="First Name"></v-text-field>
                  <v-text-field v-model.trim="customer.lastName" label="Last Name"></v-text-field>
                </v-card>

                <div class="text-right">
                  <v-btn
                    color="primary"
                    @click="step = 2"
                  >
                    Continue
                  </v-btn>

                  <v-btn text class="ml-2" @click="showDialog = false">
                    Cancel
                  </v-btn>
                </div>
              </v-stepper-content>

              <v-stepper-content step="2">
                <v-card
                  class="my-12 mx-auto"
                  min-height="200px"
                  width="70%"
                  flat
                >
                  <v-text-field v-model.trim="customer.email" label="Email"></v-text-field>
                  <v-text-field v-model.trim="customer.phone" label="Phone"></v-text-field>
                </v-card>

                <div class="text-right">
                  <v-btn
                    color="primary"
                    @click="step = 3"
                  >
                    Pay and Receive Full report
                  </v-btn>

                  <v-btn text class="ml-2" @click="step = step-1">
                    Back
                  </v-btn>
                </div>
              </v-stepper-content>

              <v-stepper-content step="3">
                <v-card
                  class="my-12 mx-auto allChildrenCenter"
                  min-height="200px"
                  width="70%"
                  flat
                >
                  <paystack
                    :amount="amount"
                    :email="customer.email"
                    :paystackkey="paystackkey"
                    :reference="reference"
                    :callback="callback"
                    :close="close"
                    :embed="!false"
                >
                  <v-icon>credit_card</v-icon>
                  Make Payment
                </paystack>
                </v-card>

                <div class="text-right">
                  <v-btn depressed color="primary" class="ml-2" @click="step = step-1">
                    Back
                  </v-btn>
                </div>
              </v-stepper-content>
            </v-stepper-items>
          </v-stepper>
        </div>
      </v-container>
    </v-dialog>
  </div>
</template>

<script>
import paystack from 'vue-paystack';

export default {
  props: {
    maxWidth: {
      type: String,
      default: "100%"
    }
  },
  components: {
      paystack
  },
  data() {
    return {
      email: "foobar@example.com", // Customer email
      amount: 1000000, // in kobo
      vin: "WDDHF8HB2BA296633",
      loading: false,
      showDialog: false,
      fullReportActive: false,
      step: 1,
      customer: {
        email: "mail@yahoo.com"
      },
      vinResult: {
        year: "2014",
        make: "Toyota",
        model: "Prius V",
        // trim: "Three",
        // style: "HATCHBACK 4-DR",
        type: "Salon",
        // size: "",
        // category: "",
        made_in: "JAPAN",
        made_in_city: "TSUTSUMI",
        // doors: "5",
        // fuel_type: "Gasoline",
        // fuel_capacity: "11.90 gallon",
        // city_mileage: "44 miles/gallon",
        // highway_mileage: "40 miles/gallon",
        // engine: "1.8L L4 DOHC 16V HYBRID",
        // engine_size: "",
        // engine_cylinders: "4",
        // transmission: "Continuously Variable Transmission",
        // transmission_short: "CVT",
        // transmission_type: "",
        // transmission_speeds: "",
        // drivetrain: "FWD",
        // anti_brake_system: "4-Wheel ABS",
        // steering_type: "R&P",
        // curb_weight: "3274 lbs",
        // gross_vehicle_weight_rating: "4321 lbs",
        // overall_height: "62.00 in.",
        // overall_length: "181.70 in.",
        // overall_width: "69.90 in.",
        // wheelbase_length: "109.40 in.",
        // standard_seating: "5",
        // invoice_price: "$25,613 USD",
        // delivery_charges: "$810 USD",
        // manufacturer_suggested_retail_price: "$27,515 USD",
        // production_seq_number: "298500",
        // front_brake_type: "Disc",
        // rear_brake_type: "Drum",
        // turning_diameter: "36.10 in.",
        // front_suspension: "Ind",
        // rear_suspension: "Semi",
        // front_spring_type: "Coil",
        // rear_spring_type: "Coil",
        // tires: "205/60R16",
        // front_headroom: "39.60 in.",
        // rear_headroom: "38.60 in.",
        // front_legroom: "41.30 in.",
        // rear_legroom: "35.90 in.",
        // front_shoulder_room: "55.90 in.",
        // rear_shoulder_room: "55.20 in.",
        // front_hip_room: "53.50 in.",
        // rear_hip_room: "53.50 in.",
        // interior_trim: [
        //     "Bisque",
        //     "Dark Gray",
        //     "Misty Gray"
        // ],
        // exterior_color: [
        //     "Barcelona Red Met",
        //     "Black",
        //     "Blizzard Pearl",
        //     "Blue Ribbon Metallic",
        //     "Classic Silver Metallic",
        //     "Clear Sky Metallic",
        //     "Magnetic Gray Metallic",
        //     "Sea Glass Pearl"
        // ],
        // curb_weight_manual: "",
        // ground_clearance: "5.70 in.",
        // track_front: "60.60 in.",
        // track_rear: "60.80 in.",
        // cargo_length: "",
        // width_at_wheelwell: "",
        // width_at_wall: "",
        // depth: "",
        // optional_seating: "",
        // passenger_volume: "97.20 cu.ft.",
        // cargo_volume: "34.30 cu.ft.",
        // standard_towing: "",
        // maximum_towing: "",
        // standard_payload: "915 lbs",
        // maximum_payload: "915 lbs",
        // maximum_gvwr: "4321 lbs"
      }
    }
  },
  watch: {
    showDialog(val) {
      if (!val) {
        this.step = 1
        this.fullReportActive = false
      }
    }
  },
  computed: {
    paystackkey () {
      console.log(process.env.VUE_APP_PAYSTACK_TEST_SECRET)
      console.log(process.env.VUE_APP_PAYSTACK_LIVE_SECRET)

      console.log(process.env.VUE_APP_PAYSTACK_TEST_PUBLIC)
      console.log(process.env.VUE_APP_PAYSTACK_LIVE_PUBLIC)

      return process.env.VUE_APP_PAYSTACK_TEST_PUBLIC
    },
    reference(){
      let text = "";
      let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

      for( let i=0; i < 10; i++ )
        text += possible.charAt(Math.floor(Math.random() * possible.length));

      return text;
    }
  },
  methods: {
    callback: function(response){
      console.log(response)
    },
    close: function(){
        console.log("Payment closed")
    },
    searchVin() {
      // this.loading = true;
      this.showDialog = true;
    },
  }
}
</script>

<style lang="scss">
.vin-dialog {
  .dialog-container {
    position: relative;

    .close-dialog {
      position: absolute;
      top: 10px;
      right: 15px;
      padding: 0;
      line-height: 0;
      border-radius: 100%;
    }
    .result-title {
      font-weight: 300;
      font-size: 2.2rem;
      margin-bottom: 23px;
    }
    .vin-summary-card {
      .check-status-msg {
        background: mediumslateblue;
        color: white;
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        padding: 10px;
        font-weight: 800;
        font-size: 20px;
      }
      .car-brief {
        padding: 20px 0;
      }
      .vin-table {
        margin-top: 40px;
        &-col {
          text-align: center;

          .result-key {
            text-transform: uppercase;
            background-color: lightgrey;
            font-weight: 600;
            color: #333;
          }
        }
      }
    }
  }
}
</style>