<template>
  <v-app id="app">
    <nav-bar />
    <router-view/>
    <app-footer />
  </v-app>
</template>

<script>
import navBar from "@/components/navBar";
import appFooter from "@/components/footer";

export default {
  components: {
    navBar,
    appFooter
  },
  watch: {
    customUpperFooter(val) {
      console.log("APP footer 2: ", val);
    }
  },
  computed: {
    customUpperFooter() {
      return this.$route.meta.customUpperFooter
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  padding-top: 53px;
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