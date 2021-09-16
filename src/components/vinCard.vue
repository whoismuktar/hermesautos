<template>
  <div class="von-card">
      <v-card flat tile :max-width="maxWidth" class="pa-8">
        <v-card-title class="px-0">Check Your VIN</v-card-title>
        <v-card-text class="px-0">
        <div>Enter your VIN Number</div>
        <v-text-field outlined dense hide-details="auto"></v-text-field>
        </v-card-text>

        <!-- <v-card-action> -->
        <v-btn dark width="100%" height="50">Search</v-btn>
        <!-- </v-card-action> -->
    </v-card>
  </div>
</template>

<script>
export default {
  props: {
    maxWidth: {
      type: String,
      default: "100%"
    }
  }

}
</script>

<style>

</style>