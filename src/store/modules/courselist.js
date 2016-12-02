const state = {
	courses: [],
	page: 0,
	position: 0,
}
const getters = {
	courses: () => state.courses,
	page: () => state.page,
	position: () => state.position,
}
/* eslint no-undef:0 */
const actions = {
	fetchCourse({
		commit,
	}) {
		commit('fetchCourse')
	},
	getPosition({
		commit,
	}, position) {
		commit('getPosition', position)
	},
}
const mutations = {
	fetchCourse(state) {
		const url = 'api/v1.0/courses/?page=' + state.page + '&per_page=20&sort=view&null=asc'
		state.page += 1
		fetch(url).then(response => {
			response.json().then(json => {
				if (state.page >= 3) {
					state.courses.splice(0, 20)
				}
				state.courses = state.courses.concat(json)
			})
		})
	},
	getPosition(state, position) {
		state.position = position
	},
}
export default {
	state,
	getters,
	actions,
	mutations,
}
