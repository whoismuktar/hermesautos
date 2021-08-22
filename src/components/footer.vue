<template>
  <div class="footer">
      <div class="upper-footer">
          <h2 class="relative">Who We Are</h2>
          <p class="relative">
              Our hundreds of team members are helping Vroom revolutionize the way people buy, sell, and trade in cars. Count on us to make your next car buying experience the best you’ve ever had.
          </p>

          <v-btn depressed color="primary">Learn More</v-btn>
      </div>
      <div class="lower-footer">
          <v-row>
              <v-col cols="4">
                <v-img contain :src="require('../assets/logo.png')" class="car-holder" width="170" position="left"></v-img>

                <!-- Social -->
                <div class="d-flex">
                    <v-icon>add</v-icon>
                </div>
              </v-col>
              <v-col cols="2"></v-col>
              <v-col cols="2"></v-col>
              <v-col cols="2"></v-col>
          </v-row>
      </div>
  </div>
</template>

<script>
export default {
    name: "appFooter"
}
</script>

<style scoped>
    .upper-footer {
        color: #ffffff;
        position: relative;
        padding: 100px 98px;
        text-align: center;
        background-image: url("../assets/img/pic.png");
        background-size: cover;
        background-position: center;
    }
    .upper-footer::before {
        content: "";
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0,0,0,0.5)
    }
</style>
