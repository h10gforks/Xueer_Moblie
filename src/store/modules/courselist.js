const state = {
	courses: [],
	page: 0,
}
const getters = {
	courses: () => state.courses,
	page: () => state.page,
}
const actions = {
	fetchCourse({
		commit,
	}) {
		commit('fetchCourse')
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
}
export default {
	state,
	getters,
	actions,
	mutations,
}
