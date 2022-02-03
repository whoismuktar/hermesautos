// Block console.log in production
process.env.NODE_ENV === "development" ? null : (console.log = () => { });

import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faFacebookSquare, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faCheckCircle, faEquals, faPiggyBank } from '@fortawesome/free-solid-svg-icons';
import store from './store'

import "@/assets/scss/style.scss"

// library.add(faFacebook);
library.add([faFacebookSquare, faTwitter, faInstagram, faEquals, faPiggyBank, faCheckCircle]);
Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
