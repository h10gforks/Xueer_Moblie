import Vue from 'vue'
import App from './App'
import Vuex from 'vuex'
import store from './store'
import 'whatwg-fetch'

import router from './route/router.js'

import directives from './directives.js'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})
