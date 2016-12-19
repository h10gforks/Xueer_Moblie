const state = {
	courses: [],
	page: 0,
	position: undefined,
	scrollTop: 0,
	height: 0,
	back: false,
	isend: false,
}
const getters = {
	courses: () => state.courses,
	page: () => state.page,
	position: () => state.position,
	scrollTop: () => state.scrollTop,
	height: () => state.height,
	back: () => state.back,
	isend: () => state.isend,
}
/* eslint no-undef:0 */
const actions = {
	fetchCourse({
		commit,
	}, sort) {
		commit('fetchCourse', sort)
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
	initCourse({
		commit,
	}, page) {
		commit('initCourse', page)
	},
	fetchCourseN({
		commit,
	}, sort) {
		commit('fetchCourseN', sort)
	},
	fetchSelector({
		commit,
	}, sort) {
		commit('fetchSelector', sort)
	},
}

const GetData = function () {
	this.url = 'api/v1.0/courses/?page=1&'
	this.json = null
}
GetData.prototype.fetch = function () {
	const self = this
	return fetch(self.url).then(response => {
		response.json().then(json => {
			self.json = json
		}).then(() => {
			self.preData(0, 20)
		})
	})
}
GetData.prototype.preData = function (start, end) {
	state.courses = state.courses.concat(this.json)
	if (this.json.length == 0) {
		state.isend = true
	}
	if (state.courses.length >= 60) {
		state.courses.splice(start, end)
		document.body.scrollTop = (state.scrollTop - state.height)
	}
}
// test
const getHeight = (state) => {
	if (state.courses.length == 20) {
		const courses_list = document.getElementById('js_courses_list')
		if (courses_list) {
			state.height = courses_list.offsetHeight
		}
	}
}
const preData = (state, start, end, json) => {
	state.courses = state.courses.concat(json)
	if (json.length == 0) {
		state.isend = true
	}
	if (state.courses.length >= 60) {
		state.courses.splice(start, end)
		document.body.scrollTop = (state.scrollTop - state.height)
	}
}
const sendFetch = (state, url) => {
	fetch(url).then(response => {
		response.json().then(json => {
			preData(state, 0, 20, json)
		})
	}).then(() => {
		getHeight(state)
	})
}

const mutations = {
	/* eslint no-unused-vars:0 */
	initCourse(state, page) {
		state.page = 0
		state.courses = []
	},
	fetchSelector(state, sort) {
		state.page += 1
		sort.forEach((item, index, arr) => { arr[index] = item + '=1' })
		if (state.courses.length == 40) {
			state.scrollTop = document.body.scrollTop
		}
		const send = new GetData()
		send.url += sort.join('&')
		send.fetch()
	},
	fetchCourse(state, sort) {
		if (!sort) {
			sort = 'view'
		}
		state.page += 1
		const url = 'api/v1.0/courses/?page=' + state.page + '&per_page=20&sort=' + sort + '&null=asc'
		if (state.courses.length == 40) {
			state.scrollTop = document.body.scrollTop
		}
		// const send = new GetData()
		// send.url += sort.join('&')
		// send.fetch()
		sendFetch(state, url)
	},
	getPosition(state, position) {
		state.position = position
	},
	turnFlag(state) {
		state.back = !state.back
	},
	fetchCourseN(state, sort) {
		if (state.page >= 2) {
			state.page -= 1
		} else {
			return false
		}
		if (!sort) {
			sort = 'view'
		}
		const url = 'api/v1.0/courses/?page=' + state.page + '&per_page=20&sort=' + sort + '&null=asc'
		if (state.courses.length == 40) {
			state.scrollTop = document.body.scrollTop
		}
		fetch(url).then(response => {
			response.json().then(json => {
				preData(state, state.courses.length - 20, 20, json)
			})
		}).then(() => {
			getHeight(state)
		})
		return true
	},
}
export default {
	state,
	getters,
	actions,
	mutations,
}
