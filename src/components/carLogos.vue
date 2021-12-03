<template>
  <div class="car-logos">
    <v-row>
        <v-col cols="2" v-for="(brand, index) in popularBrandLogos" :key="index" class="cursorMe car-logo-col">
        <v-card flat class="car-logo d-flex allChildrenCenter">
            <v-img contain width="40" position="center" :src="brand.logo" alt="Hermes Autos popular brands"></v-img>
        </v-card>
        </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
    props: {
        classes: {
            type: String,
            default: ""
        }
    },
    data() {
        return {
            popularBrandLogos: [
                {
                    name: "Hermes Autos",
                    logo: require("../assets/img/car-logos/honda.png")
                },
                {
                    name: "Hermes Autos",
                    logo: require("../assets/img/car-logos/toyota.png")
                },
                {
                    name: "Hermes Autos",
                    logo: require("../assets/img/car-logos/chevrolet.png")
                },
                {
                    name: "Hermes Autos",
                    logo: require("../assets/img/car-logos/bmw.png")
                },
                {
                    name: "Hermes Autos",
                    logo: require("../assets/img/car-logos/tesla.png")
                },
                {
                    name: "Hermes Autos",
                    logo: require("../assets/img/car-logos/rover.png")
                },
                {
                    name: "Hermes Autos",
                    logo: require("../assets/img/car-logos/gms.png")
                },
                {
                    name: "Hermes Autos",
                    logo: require("../assets/img/car-logos/hyndai.png")
                },
                {
                    name: "Hermes Autos",
                    logo: require("../assets/img/car-logos/lexus.png")
                },
                {
                    name: "Hermes Autos",
                    logo: require("../assets/img/car-logos/acura.png")
                },
                {
                    name: "Hermes Autos",
                    logo: require("../assets/img/car-logos/audi.png")
                },
                {
                    name: "Hermes Autos",
                    logo: require("../assets/img/car-logos/volks.png")
                },
            ]
        }
    }
}
</script>

<style scoped>
    .car-logo {
        transition: ease-in-out;
        width: 100px;
        height: 100px;
    }
    .car-logo:hover {
        transform: scale(1.2);
    }
</style>
