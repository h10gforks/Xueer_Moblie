const state = {
	hot: [],
	show_search: false,
	result: [],
	search_page: 1,
	key_word: '',
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
	searchResScroll({
		commit,
	}) {
		commit('searchResScroll')
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
	searchCourse(state, info) {
		state.key_word = info
		const url = '/api/v1.0/search/?page=1&per_page=20&keywords=' + info
		return fetch(url).then(response => {
			response.json().then(json => {
				state.result = json
			})
		})
	},
	searchResScroll(state) {
		state.search_page += 1
		const url = '/api/v1.0/search/?page=' + state.search_page + '&per_page=20&keywords=' + state.key_word
		return fetch(url).then(response => {
			response.json().then(json => {
				state.result = state.result.concat(json)
			})
		})
	}
}
export default {
	state,
	getters,
	actions,
	mutations,
}
