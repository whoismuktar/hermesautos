<template>
  <div class="footer black">
    <upper-footer />

    <div class="lower-footer py-12">
      <v-container class="app-max-width">
        <v-row class="mb-0">
          <v-col v-if="$vuetify.breakpoint.smAndDown" cols="12" class="pb-0">
            <v-expansion-panels accordion dark>
              <v-expansion-panel
                v-for="(menu, i) in allMenus"
                :key="i"
                class="transparent"
              >
                <v-expansion-panel-header>
                  <span class="grey--text app-bold">{{ menu.title }}</span>
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                  <div v-for="(list, ii) in menu.items" :key="ii">
                    <router-link :to="list.path">
                      <span class="white--text pl-3 text-capitalize">{{
                        list.title
                      }}</span>
                    </router-link>
                  </div>
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>
          </v-col>

          <v-col cols="12" sm="4" class="pb-0">
            <v-img
              contain
              :src="require('../../assets/logo.png')"
              class="car-holder"
              width="170"
              position="left"
            ></v-img>

            <!-- Social -->
            <div class="mt-4 ml-3">
              <social-icons />
            </div>
          </v-col>

          <v-col
            v-if="!$vuetify.breakpoint.smAndDown"
            cols="12"
            sm="2"
            class="pb-0"
          >
            <div>
              <ul>
                <li class="grey--text app-bold mb-2">{{ menu1.title }}</li>
                <li v-for="(menu1, index) in menu1.items" :key="index">
                  <a :href="menu1.path" :target="menu1.ext ? '_blank' : ''">
                    <span class="white--text text-capitalize">{{
                      menu1.title
                    }}</span>
                  </a>
                </li>
              </ul>
            </div>
          </v-col>

          <v-col
            v-if="!$vuetify.breakpoint.smAndDown"
            cols="12"
            sm="2"
            class="pb-0"
          >
            <div>
              <ul>
                <li class="grey--text app-bold mb-2">{{ menu2.title }}</li>
                <li v-for="(menu2, index) in menu2.items" :key="index">
                  <a :href="menu2.path">
                    <span class="white--text text-capitalize">{{
                      menu2.title
                    }}</span>
                  </a>
                </li>
              </ul>
            </div>
          </v-col>

          <v-col
            v-if="!$vuetify.breakpoint.smAndDown"
            cols="12"
            sm="2"
            class="pb-0"
          >
            <div>
              <ul>
                <li class="grey--text app-bold mb-2">{{ menu3.title }}</li>
                <li v-for="(menu3, index) in menu3.items" :key="index">
                  <a :href="menu3.path">
                    <span class="white--text text-capitalize">{{
                      menu3.title
                    }}</span>
                  </a>
                </li>
              </ul>
            </div>
          </v-col>

          <v-col
            v-if="!$vuetify.breakpoint.smAndDown"
            cols="12"
            sm="2"
            class="pb-0"
          >
            <div>
              <ul>
                <li class="grey--text app-bold mb-2">{{ menu4.title }}</li>
                <li v-for="(menu4, index) in menu4.items" :key="index">
                  <a :href="menu4.path">
                    <span class="white--text text-capitalize">{{
                      menu4.title
                    }}</span>
                  </a>
                </li>
              </ul>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<script>
import socialIcons from "@/components/socialIcons";
import UpperFooter from './upperFooter';

export default {
  name: "appFooter",
  components: {
    socialIcons,
    UpperFooter,
  },
  data() {
    return {
      menu1: {
        title: "Shop",
        items: [
          {
            title: "Shop",
            ext: true,
            path: "https://shop.hermesautos.com",
          },
          {
            title: "sell/trade",
            path: "/sell",
          },
          {
            title: "finance",
            path: "/finance",
          },
        ],
      },
      menu2: {
        title: "Company",
        items: [
          {
            title: "about us",
            path: "/about",
          },
          {
            title: "hermes protection",
            path: "/how-it-works",
          },
          {
            title: "investor relations",
            path: "/investor-relation",
          },
          {
            title: "CSR",
            path: "/csr",
          },
        ],
      },
      menu3: {
        title: "Contact",
        items: [
          {
            title: "+1 305-424-8922",
            path: "tel:13054248922",
          },
          {
            title: "FAQ",
            path: "faq",
          },
          {
            title: "contact us",
            path: "contact",
          },
        ],
      },
      menu4: {
        title: "Useful Links",
        items: [
          {
            title: "privacy policy",
            path: "/privacy-policy",
          },
          {
            title: "careers",
            path: "/contact?reason=vacancy",
          },
          {
            title: "do not sell my info",
            path: "/do-not-sell-my-info",
          },
        ],
      },
    };
  },
  computed: {
    allMenus() {
      return [this.menu1, this.menu2, this.menu3, this.menu4];
    },
    customUpperFooter() {
      return this.$route.meta.customUpperFooter;
    },
  },
};
</script>

<style lang="scss" scoped>
.upper-footer {
  color: #ffffff;
  position: relative;
  padding: 100px 98px;
  text-align: center;
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  align-items: center;

  ._wrapper {
    width: 70%;
  }
}
.upper-footer::before {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
}

ul li {
  list-style: none;
  text-transform: capitalize;
  line-height: 2;
  font-weight: 500;
}
ul li a {
  color: #ffffff;
}

@media (max-width: 960px) {
  
.upper-footer {
  padding: 100px 50px;

  ._wrapper {
    width: 100%;
  }
}
}
</style>
