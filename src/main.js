import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import axios from "axios";
Vue.config.productionTip = false;
Vue.prototype.$http = axios;
import AOS from "aos";
import "aos/dist/aos.css";
import "@/styles/style.css";
import "@/styles/transition.css";
var VuePaginate = require("vue-paginate");
Vue.use(VuePaginate);
new Vue({
  created() {
    AOS.init({});
  },
  router,
  store,
  axios,
  vuetify,
  render: h => h(App)
}).$mount("#app");
