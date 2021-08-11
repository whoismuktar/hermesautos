// import "@mdi/font/css/materialdesignicons.css"; // Ensure you are using css-loader
import "material-design-icons-iconfont/dist/material-design-icons.css";
import Vue from "vue";
import Vuetify from "vuetify/lib";

Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    iconfont: "mdi",
  },
  theme: {
    options: { customProperties: true },
    themes: {
      light: {
        toDark: "#262626",
        primary: "#d9a51f",
        secondary: "#19647E",
        lightBG: "#f9f9f9",
        error: "#b71c1c",
      },
    },
  },
});
