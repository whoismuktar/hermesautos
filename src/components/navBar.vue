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

        <!-- Desktop Menu -->
        <div v-if="$vuetify.breakpoint.smAndUp" class="d-flex align-center signedIn-menuWrapper primary--text mr-2">
          <span
            v-for="(menu, index) in navMenu"
            :key="index"
            :to="menu.ext ? menu.path : menu.path"
            :target="menu.ext ? '_blank' : ''"
            class="signedIn-menu mr-3 desktop-menu hover-underline-animation"
            @click="gotoRoute(menu.path, menu.ext)"
          >
            <span v-if="!menu.items">{{ menu.title }}</span>

            <!-- <v-menu offset-y> -->
            <v-menu nudge-top="2" v-else :close-on-content-click="!true" bottom offset-y open-on-hover>
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
                <v-list-item
                  v-for="(sub, i) in menu.items"
                  :key="i"
                  class="sub-items hover-underline-animation"
                  @click="gotoRoute(sub.path, sub.ext)"
                >
                  <v-list-item-title class="cursorMe px-3">
                    {{ sub.title }}
                  </v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
          </span>
        </div>

        <!-- Mobile Menu -->
        <v-menu v-else :close-on-content-click="!true" bottom offset-y min-width="250" max-width="250">
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
              class="signedIn-menu mobile-menu hover-underline-animation"
            >
              <template v-if="item.items" v-slot:appendIcon>
                <v-icon>expand_more</v-icon>
              </template>
              <template v-else v-slot:appendIcon>
                <span></span>
              </template>

              <template v-slot:activator>
                <v-list-item class="sub-item-parent">
                  <v-list-item-content>
                    <v-list-item-title
                      @click="gotoRoute(item.path, item.ext)"
                    >
                    {{ item.title }}
                    </v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </template>

              <v-list-item v-for="(subItem, i) in item.items" :key="i" class="sub-items">
                <v-list-item-content>
                  <v-list-item-title class="ml-2">{{ subItem.title }}</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list-group>
          </v-list>
        </v-menu>
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
          title: "CSR", path: "/csr"
        },
        {
          title: "Check Car Valuation", path: "/car-valuation"
        },
        {
          title: "finance", path: "/finance",
          items: [
            {
              title: "How Finance Works", path: "/finance#how-it-works"
            },
            {
              title: "Our Partners", path: "/finance#our-partners"
            }
          ]
        },
        {
          title: "about", path: "about",
          items: [
            {
              title: "About Us", path: "/about"
            },
            {
              title: "Protection", path: "/protection"
            },
            {
              title: "How It Works", path: "/how-it-works"
            },
            {
              title: "Customer Review", path: "/customer-reviews"
            },
            {
              title: "Investor Relations", path: "/about"
            },
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

.signedIn-menu, .sub-items {
  font-size: 13px;
  cursor: pointer;
  color: #000000;
  text-transform: capitalize;
  font-weight: 700;
  text-transform: uppercase;

  &:hover {
    color: var(--v-primary-base);
    position: relative;
    z-index: 2;
  }

  &.desktop-menu {
    letter-spacing: 1px;
    margin-left: 18px;
  }
  &.mobile-menu {
    letter-spacing: 1px;

    .sub-item-parent {
      padding-left: 0;
    }
    .v-list-item__content {
      padding: 0;
    }

    .v-list-item__title {
      font-size: 13px;
      white-space: normal;
    }
  }
}
.sub-items {
  padding: 10px;
  display: flex;
  align-items: center;

  .v-list-item__title {
    font-size: 13px;
  }
}
</style>