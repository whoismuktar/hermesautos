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

        <!-- <nav-menu-links /> -->

        <div class="d-flex align-center signedIn-menuWrapper primary--text mr-2">
          <span
            v-for="(menu, index) in navMenu"
            :key="index"
            :to="menu.ext ? menu.path : menu.path"
            :target="menu.ext ? '_blank' : ''"
            class="signedIn-menu mr-3"
            @click="gotoRoute(menu.path, menu.ext)"
          >
            <span v-if="!menu.items">{{ menu.title }}</span>

            
            <!-- <v-menu offset-y> -->
            <v-menu nudge-top="-7" v-else :close-on-content-click="!true" bottom offset-y>
              <template v-slot:activator="{ on }">
                <v-btn
                  dark
                  icon
                  v-on="on"
                  width="auto"
                  height="auto"
                >
                  <span class="signedIn-menu" @click="gotoRoute(menu.path, menu.ext)">{{ menu.title }}</span>
                  <v-icon color="black">expand_more</v-icon>
                </v-btn>
              </template>
              <v-list class="d-flex flex-column">
                <v-list-tile
                  v-for="(sub, i) in menu.items"
                  :key="i"
                  class="pa-2"
                  @click="gotoRoute(sub.path, sub.ext)"
                >
                  <v-list-tile-title class="cursorMe px-3">
                    {{ sub.title }}
                  </v-list-tile-title>
                </v-list-tile>
              </v-list>
            </v-menu>
          </span>
        </div>
        <!-- <v-list light class="d-flex">
          <v-list-group
            v-model="item.active"
            v-for="(item, index) in navMenu"
            :key="index"
            :to="item.ext ? item.path : item.path"
            class="signedIn-menu"
          >
            <template v-if="item.items" v-slot:appendIcon>
              <v-icon>expand_more</v-icon>
            </template>
            <template v-else v-slot:appendIcon>
              <span></span>
            </template>

            <template v-slot:activator>
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title
                    @click="gotoRoute(item.path, item.ext)"
                  >
                  {{ item.title }}
                  </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </template>

            <v-list-item v-for="(subItem, i) in item.items" :key="i">
              <v-list-item-content>
                <v-list-item-title class="ml-10">{{ subItem.title }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-group>
        </v-list> -->

        <v-menu :close-on-content-click="!true" bottom offset-y>
          <template v-slot:activator="{ on }">
            <v-btn plain v-on="on">
              <v-icon color="black">menu</v-icon>
            </v-btn>
          </template>

          <v-list>
            <v-list-group
              v-model="item.active"
              v-for="(item, index) in navMenu"
              :key="index"
              :to="item.ext ? item.path : item.path"
              class="signedIn-menu"
            >
              <template v-if="item.items" v-slot:appendIcon>
                <v-icon>expand_more</v-icon>
              </template>
              <template v-else v-slot:appendIcon>
                <span></span>
              </template>

              <template v-slot:activator>
                <v-list-item>
                  <v-list-item-content>
                    <v-list-item-title
                      @click="gotoRoute(item.path, item.ext)"
                    >
                    {{ item.title }}
                    </v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </template>

              <v-list-item v-for="(subItem, i) in item.items" :key="i">
                <v-list-item-content>
                  <v-list-item-title class="ml-10">{{ subItem.title }}</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list-group>
          </v-list>
        </v-menu>

        <!-- <div v-else class="d-flex signedIn-menuWrapper primary--text mr-2">
          <span
            v-for="(menu, index) in navMenu"
            :key="index"
            :to="menu.ext ? menu.path : menu.path"
            :target="menu.ext ? '_blank' : ''"
            class="signedIn-menu mr-3"
            @click="gotoRoute(menu.path, menu.ext)"
          >
            <v-icon>{{ menu.icon }}</v-icon>
            <span>{{ menu.title }}</span>
          </span>
        </div> -->

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
    </v-app-bar>
  </div>
</template>

<script>
// import navMenuLinks from './navMenuLinks.vue'
export default {
  // components: { navMenuLinks },
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
        {
          title: "buy", ext: true, path: "https://shop.hermesautos.com"
        },
        // {
        //   title: "sell", ext: true, path: "https://shop.hermesautos.com"
        // },
        {
          title: "finance", path: "/finance"
        },
        {
          title: "CSR", path: "/csr"
        },
        {
          title: "about", path: "about",
          items: [
            {
              title: "Protection", path: "/protection"
            }
          ]
        },
        {title: "contact", path: "/contact"}
      ]
    }},
    methods: {
      gotoRoute(path, ext) {
        if (ext) {
          window.open(path, "_blank")
        } else {
          this.$router.push(`${path}`)
        }
      }
    }
}
</script>

<style lang="scss" scoped>
.appbar {
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px !important;
}
.signedIn-menu {
  font-size: 16px;
  cursor: pointer;
  color: #000000;
  text-transform: capitalize;
  font-weight: 700;
}
</style>