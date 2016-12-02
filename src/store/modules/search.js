const state = {
	hot: [],
	show_search: false,
}
const getters = {
	hot: () => state.hot,
	show_search: () => state.show_search,
}
const actions = {
	fetchHot({
		commit,
	}) {
		commit('fetchHot')
	},
	showSearch({
		commit,
	}) {
		commit('showSearch')
	},
	hideSearch({
		commit,
	}) {
		commit('hideSearch')
	},
}
const mutations = {
	fetchHot(state) {
		fetch('/api/v1.0/search/hot/').then(response => {
			response.json().then(json => {
				state.hot = json
			})
		})
	},
	showSearch(state) {
		state.show_search = true
	},
	hideSearch(state) {
		state.show_search = false
	},
}
export default {
	state,
	getters,
	actions,
	mutations,
}
