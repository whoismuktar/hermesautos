<template>
  <div class="navbar">
      <v-app-bar
      app
      color="white"
      dark
      elevation="1"
    >
      <div class="d-flex">
        <v-img
          alt="Hermes Auto Logo"
          :src="require('../assets/logo.png')"
          contain
          position="left"
          height="60"
          width="100"
        />
      </div>

      <v-spacer></v-spacer>

      <v-list light class="borderTest d-flex transparent">
        <v-list-item v-for="(menu, index) in navMenu" :key="index" @click="$router.push(`/${menu.path}`)">
          <v-list-item-title class="text-capitalize">{{ menu.title }}</v-list-item-title>
          <!-- <v-list-item-action >{{ menu.title }}</v-list-item-action> -->
        </v-list-item>
      </v-list>

      <!-- <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn> -->
    </v-app-bar>
  </div>
</template>

<script>
export default {
    name: "NavBar",
    data(){return {
      navMenu: [
        {title: "buy", path: "buy"},
        {title: "about", path: "about"},
        {title: "CSR", path: "csr"},
        {title: "contact", path: "contact"}
      ]
    }}
}
</script>

<style>

</style>