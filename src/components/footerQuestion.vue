<template>
  <div class="footer-question mb-12">
      <div class="text-center font-x2b mb-4 __section_title">Questions?</div>

      <v-row justify="center" class="text-updpercase">
          <v-col cols="12" sm="2" class="text-center">
              <div class="cursorMe" @click="$router.push('/contact')">
                <v-icon class="mr-2 cursorMe" color="primary">contact_support</v-icon>
                <b>Visit Our Help Center</b>
              </div>
          </v-col>
          <v-col cols="12" sm="2" class="text-center">
              <div class="cursorMe" @click="$router.push('/contact')">
                  <v-icon class="mr-2 cursorMe" color="primary">mail</v-icon>
                  <b>Send A Message</b>
              </div>
          </v-col>
          <v-col cols="12" sm="2" class="text-center">
              <div class="cursorMe">
                <v-icon class="mr-2 cursorMe" color="primary">phone</v-icon>
                <b>
                    <a href="tel:+13054248922">+1 305-424-8922</a>
                </b>
              </div>
          </v-col>
      </v-row>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>