const state = {
	courses: [],
	page: 0,
	position: 0,
	scrollTop: 0,
	height: 0,
	back: false,
}
const getters = {
	courses: () => state.courses,
	page: () => state.page,
	position: () => state.position,
	scrollTop: () => state.scrollTop,
	height: () => state.height,
	back: () => state.back,
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
	turnFlag({
		commit,
	}) {
		commit('turnFlag')
	},
}
const mutations = {
	/* eslint no-unused-vars:0 */
	fetchCourse(state) {
		const url = 'api/v1.0/courses/?page=' + state.page + '&per_page=20&sort=view&null=asc'
		state.page += 1
		if (state.courses.length == 20) {
			const courses_list = document.getElementById('js_courses_list')
			if (courses_list) {
				state.height = courses_list.offsetHeight
			}
		}
		if (state.courses.length == 40) {
			state.scrollTop = document.body.scrollTop
		}
		fetch(url).then(response => {
			console.log('state.page' + state.page)
			response.json().then(json => {
				if (state.page >= 3) {
					state.courses.splice(0, 20)
					console.log('调整滚动条！')
					document.body.scrollTop = (state.scrollTop - state.height)
				}
				state.courses = state.courses.concat(json)
			})
		})
	},
	getPosition(state, position) {
		state.position = position
	},
	turnFlag(state) {
		state.back = !state.back
	},
}
export default {
	state,
	getters,
	actions,
	mutations,
}