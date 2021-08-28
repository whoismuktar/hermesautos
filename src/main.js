import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faFacebookSquare, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faEquals, faPiggyBank } from '@fortawesome/free-solid-svg-icons';

// library.add(faFacebook);
library.add([faFacebookSquare, faTwitter, faInstagram, faEquals, faPiggyBank]);
Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
