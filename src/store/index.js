import Vue from 'vue'
import Vuex from 'vuex'
import * as getters from './getters'
import * as actions from './actions'
import * as mutations from './mutations'
import home from './modules/home'
import subject from './modules/subject'
import detail from './modules/detail'
import search from './modules/search'
import newcomments from './modules/newcomments'
import tag from './modules/tag'
import courselist from './modules/courselist'

Vue.use(Vuex)
const state = {}
const store = new Vuex.Store({
	state,
	getters,
	actions,
	modules: {
		home,
		subject,
		detail,
		search,
		newcomments,
		tag,
		courselist,
	},
	mutations,
})
if (module.hot) {
	module.hot.accept(['./getters', './actions', './mutations'], () => {
		store.hotUpdate({
			getters: './getters',
			actions: './actions',
			mutations: './mutations',
		})
	})
}
export default store
