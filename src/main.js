import Vue from "vue";
import VueResource from "vue-resource";
import "whatwg-fetch";
import App from "./App";
import store from "./store";
import router from "./route/router";

Vue.use(VueResource);
/* eslint-disable no-new */

// Global hook, sync current route to store
router.beforeEach((to, from, next) => {
  store.dispatch("changeCurrentRoute", to.name);
  next();
});

new Vue({
  el: "#app",
  store,
  router,
  render: h => h(App)
});
