<template>
  <div class="import-duties">
    <page-hero
      :carImg="hero.carImg"
      :intro="hero.intro"
      :title="hero.title"
      :subtitle="hero.subtitle"
      :cta="hero.cta"
      :ctaAction="hero.ctaAction"
    />

    <v-container class="lookup-container">
        <v-row justify="center">
            <v-col cols="8">
            <div class="car-brand mb-7">
                <h2 class="ml-4">Select or Enter Car Name</h2>

                <v-autocomplete
                v-model="brand"
                :loading="brandLoading"
                :search-input.sync="brand"
                :items="allCarBrands"
                cache-items
                class="mx-4"
                flat
                hide-no-data
                hide-details
                label="Car Name"
                solo-inverted
                ></v-autocomplete>
            </div>

            <div class="car-model mb-7">
                <h2 class="ml-4">Select or Select Car Model</h2>
                
                <v-autocomplete
                v-model="model"
                :loading="modelLoading"
                :search-input.sync="model"
                :items="allSelectedModels"
                class="mx-4"
                flat
                hide-no-data
                hide-details
                label="Car Model"
                solo-inverted
                :disabled="!brand"
                ></v-autocomplete>
            </div>

            <div class="car-year mb-7">
                <h2 class="ml-4">Select or Enter Production Year</h2>
                
                <v-autocomplete
                v-model.number="year"
                :loading="yearLoading"
                :search-input.sync="year"
                :items="allSelectedYears"
                cache-items
                class="mx-4"
                flat
                hide-no-data
                hide-details
                label="Car Year"
                solo-inverted
                :disabled="!model"
                ></v-autocomplete>
            </div>

            <div class="cost-result text-center" v-if="cost">
                <h1>${{ cost.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") }}</h1>

                <div class="mt-7 mb-2">We can Import your vehicle for you</div>
                <v-btn depressed large class="primary" to="/contact">
                    <b>Contact Us</b>
                </v-btn>
            </div>
            </v-col>

        <!-- <v-col cols="4">
            <div class="text-center">
                <h2>Did You Know?</h2>
            </div>
        </v-col> -->
        </v-row>
    </v-container>
  </div>
</template>

<script>
import pageHero from "../components/pageHero";
import { mapState } from 'vuex';
export default {
    components: {
        pageHero,
    },
    data() {
        return {
            hero: {
            carImg: require("../assets/img/car-3.png"),
            intro: "IMPORT your vehicles with Hermes autos",
            title: "Check official Import Duty Rates",
            subtitle:
                "Check below for the official custom duty rate for importing cars into teh country.",
            cta: "Contact Us",
            ctaAction: "/contact",
            },
            brandLoading: false,
            modelLoading: false,
            yearLoading: false,
            search: null,
            brand: "",
            year: "",
            model: "",
            brands: [],
            cost: null,
            states: [
                'Virgin Island',
                'Virginia',
                'Washington',
                'West Virginia',
                'Wisconsin',
                'Wyoming',
            ],
        }
    },
    watch: {
        // search (val) {
        //     this.brand = 
        //     // val && val !== this.brand && this.getImportDuties()
        // },
        brand(val) {
            // console.log(val);
            if (val) {
                // val && val !== this.select && this.querySelections(val)
                this.getSelectedModels()
            }
        },
        year(val) {
            // console.log(val);
            if (val) {
                // val && val !== this.select && this.querySelections(val)
                this.getImportDuties()
            }
        }
    },
    methods: {
        querySelections (v) {
            console.log("v:", v);
            this.loading = true
            // Simulated ajax query
            setTimeout(() => {
                this.brands = this.states.filter(e => {
                return (e || '').toLowerCase().indexOf((v || '').toLowerCase()) > -1
                })
                this.loading = false
            }, 500)
        },
        async getImportDuties() {
            const brand = this.brand;
            const year = this.year || "";
            const model = this.model || "";

            await this.$store.dispatch('api/getImportDutiesSheet', { brand, year, model }).then((response)=> {
                console.log("response:", response);
                if (!this.model) {
                    this.brands = response.data

                    console.log(this.brands);
                }
                this.cost = response.data.result
            })
        },
        async getAllCarBrands() {
            this.brandLoading = true;
            await this.$store.dispatch('api/getAllCarBrands').then(() => {
                this.brandLoading = false;
                // this.getSelectedModels()
            })
        },
        async getSelectedModels() {
            this.modelLoading = true;
            await this.$store.dispatch("api/getSelectedModels", { brand: this.brand }).then(() => {
                this.getSelectedYears()
            }).finally(()=> {
                this.modelLoading = false;
            })
        },
        async getSelectedYears() {
            this.yearLoading = true;
            await this.$store.dispatch("api/getSelectedYears", { brand: this.brand }).then(() => {
                this.yearLoading = false;
                // this.getImportDuties()
            })
        },
    },
    computed: {
        ...mapState({
            allCarBrands: (state) => state.api.allCarBrands,
            allSelectedModels: (state) => state.api.allSelectedModels,
            allSelectedYears: (state) => state.api.allSelectedYears
        })
    },
    created() {
        this.getAllCarBrands()
    },
}
</script>

<style scoped>
    .lookup-container {
        padding-top: 80px;
        padding-bottom: 80px;
    }
</style>