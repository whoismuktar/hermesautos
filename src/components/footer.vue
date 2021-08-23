<template>
  <div class="footer black">
      <div class="upper-footer">
          <h2 class="relative">Who We Are</h2>
          <p class="relative">
              Our hundreds of team members are helping Vroom revolutionize the way people buy, sell, and trade in cars. Count on us to make your next car buying experience the best you’ve ever had.
          </p>

          <v-btn depressed color="primary">Learn More</v-btn>
      </div>
      <div class="lower-footer py-12">
          <v-container class="app-max-width">
              <v-row class="mb-0">
                <v-col cols="4" class="pb-0">
                    <v-img contain :src="require('../assets/logo.png')" class="car-holder" width="170" position="left"></v-img>

                    <!-- Social -->
                    <div class="mt-4 ml-3">
                        <social-icons />
                    </div>
                </v-col>
                <v-col cols="2" class="pb-0">
                    <div>
                        <ul>
                            <li v-for="(menu1, index) in menu1" :key="index">
                                <a :href="menu1.path">
                                    {{ menu1.title }}
                                </a>
                            </li>
                        </ul>
                    </div>
                </v-col>
                <v-col cols="2" class="pb-0">
                    <div>
                        <ul>
                            <li v-for="(menu2, index) in menu2" :key="index">
                                <a :href="menu2.path">
                                    {{ menu2.title }}
                                </a>
                            </li>
                        </ul>
                    </div>
                </v-col>

                <v-col cols="2" class="pb-0">
                    <div>
                        <ul>
                            <li v-for="(menu3, index) in menu3" :key="index">
                                <a :href="menu3.path">
                                    {{ menu3.title }}
                                </a>
                            </li>
                        </ul>
                    </div>
                </v-col>

                <v-col cols="2" class="pb-0">
                    <div>
                        <ul>
                            <li v-for="(menu4, index) in menu4" :key="index">
                                <a :href="menu4.path">
                                    {{ menu4.title }}
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
import socialIcons from "@/components/socialIcons"

export default {
    name: "appFooter",
    components: {
        socialIcons
    },
    data() {
        return {
            menu1: [
                {
                    title: "buy",
                    path: "/buy",
                },
                {
                    title: "sell/trade",
                    path: "/sell-trade",
                },
                {
                    title: "finance",
                    path: "/finance",
                }
            ],
            menu2: [
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
                }
            ],
            menu3: [
                {
                    title: "+123456789",
                    path: "tel:123456789",
                },
                {
                    title: "faq",
                    path: "faq",
                },
                {
                    title: "caontact us",
                    path: "contact",
                }
            ],
            menu4: [
                {
                    title: "privacy policy",
                    path: "/privacy-policy",
                },
                {
                    title: "careers",
                    path: "/careers",
                },
                {
                    title: "do not sell my info",
                    path: "/do-not-sell-my-info",
                }
            ],
        }
    }
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

ul li {
    list-style: none;
    text-transform: capitalize;
    line-height: 2;
    font-weight: 500;
}
ul li a {
    color: #ffffff;
}
</style>
