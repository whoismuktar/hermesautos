<template>
  <v-app id="app">
    <nav-bar />
    <router-view/>
  </v-app>
</template>

<script>
import navBar from "@/components/navBar";

export default {
  components: {
    navBar
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  padding-top: 65px;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>

<style src="@/assets/scss/style.scss" lang="scss"></style>