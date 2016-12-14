import Vue from 'vue'
import 'whatwg-fetch'
import App from './App'
import store from './store'
import router from './route/router'
/* eslint-disable no-new */
new Vue({
	el: '#app',
	store,
	router,
	render: h => h(App),
})
