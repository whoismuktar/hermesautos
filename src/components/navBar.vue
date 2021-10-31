<template>
  <div class="navbar">
      <v-app-bar
        app
        color="white"
        dark
        elevation="1"
        class="appbar"
      >
      <div class="d-flex">
        <router-link to="/">
          <v-img
            alt="Hermes Auto Logo"
            :src="require('../assets/logo.png')"
            contain
            position="left"
            height="60"
            width="100"
          />
        </router-link>
      </div>

      <v-spacer></v-spacer>
      <div class="d-flex align-center">
        <div class="d-flex signedIn-menuWrapper primary--text mr-2">
          <router-link
            v-for="(menu, index) in navMenu"
            :key="index"
            :to="menu.path"
            class="signedIn-menu mr-3"
          >
            <v-icon>{{ menu.icon }}</v-icon>
            <span>{{ menu.title }}</span>
          </router-link>
        </div>

        <!-- <v-menu :close-on-content-click="false" open-on-hover bottom offset-y>
          <template v-slot:activator="{ on }">
            <v-icon v-on="on">expand_more</v-icon>
            <v-icon class="round-avatar">person</v-icon>
          </template>

          <v-list>
            <v-list-group
              v-for="(item, index) in navMenu"
              :key="index"
              v-model="item.active"
            >
              <template v-slot:activator>
                <v-list-item @click="$router.push(item.route)">
                  <v-list-item-content>
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </template>

              <v-list-item v-for="(subItem, i) in item.items" :key="i">
                <v-list-item-content>
                  <v-list-item-title>{{ subItem.title }}</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list-group>
          </v-list>
        </v-menu> -->

        <!-- <v-menu nudge-top="-50">
          <template v-slot:activator="{ on, attrs }">
            <v-btn icon v-bind="attrs" v-on="on">
              <img
                class="round-avatar mt-2"
                width="10"
                :src="require('@/assets/img/avatar.png')"
              />
              {{ attrs["aria-expanded"] }}
              <v-icon v-if="attrs['aria-expanded']">expand_more</v-icon>
              <v-icon v-else>expand_less</v-icon>
            </v-btn>
          </template>

          <v-list>
            <v-list-item v-for="n in 5" :key="n" @click="() => {}">
              <v-list-item-title>Option {{ n }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu> -->
      </div>
    </v-app-bar>
  </div>
</template>

<script>
export default {
    name: "NavBar",
    data(){return {
      menus: [
        {
          icon: "work_outline",
          title: "Comparaison de billet",
          route: "/compare-ticket",
        },
        { icon: "search", title: "Rechercher", route: "/search-trip" },
      ],
      navMenu: [
        {title: "buy", path: "buy"},
        {title: "sell", path: "https://sell.hermesautos.com"},
        {title: "finance", path: "finance"},
        {title: "CSR", path: "csr"},
        {title: "about", path: "about",
          items: [
            {title: "contact", path: "contact"}
          ]
        },
        {title: "contact", path: "contact"}
      ]
    }}
}
</script>

<style lang="scss" scoped>
.appbar {
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px !important;
}
.signedIn-menu {
  color: #000000;
  text-transform: capitalize;
  font-weight: 700;
}
</style>