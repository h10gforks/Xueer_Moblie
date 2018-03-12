import Vue from "vue";
import "whatwg-fetch";
import App from "./App";
import store from "./store";
import router from "./route/router";
import VueResource from "vue-resource";

Vue.use(VueResource);
/* eslint-disable no-new */

new Vue({
  el: "#app",
  store,
  router,
  render: h => h(App)
});
