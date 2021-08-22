<template>
  <div class="car-logos">
    <v-row>
        <v-col cols="2" v-for="(n, index) in 12" :key="index" class="cursorMe car-logo-col">
        <v-card flat class="car-logo d-flex allChildrenCenter">
            <v-img contain width="40" position="center" :src="require('../assets/img/pic.png')" alt="Hermes Autos popular brands"></v-img>
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
                    logo: require("../assets/img/pic.png")
                }
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
