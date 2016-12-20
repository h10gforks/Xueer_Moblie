const state = {
	hot: [],
	show_search: false,
	result: [],
}
const getters = {
	hot: () => state.hot,
	result: () => state.result,
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
	searchCourse({
		commit,
	}, info) {
		commit('searchCourse', info)
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
	searchCourse(state) {
		return fetch('/api/v1.0/search/?page=1&per_page=20&keywords=%E7%A4%BE%E4%BC%9A%E5%AD%A6').then(response => {
			response.json().then(json => {
				state.result = json
			})
		})
	},
}
export default {
	state,
	getters,
	actions,
	mutations,
}
