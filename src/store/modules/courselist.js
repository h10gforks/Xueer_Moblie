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
	this.url = 'api/v1.0/courses/?sort='
	this.json = null
}
GetData.prototype.getUrl = function (state, sort) {
	if (!sort) {
		sort = 'view'
	}
	this.url += sort + '&page='
}
GetData.prototype.fetch = function () {
	const self = this
	const p = new Promise((resolve) => {
		fetch(self.url).then(response => {
			response.json().then(json => {
				self.json = json
				resolve()
			})
		})
	})
	return p
}
GetData.prototype.preData = function (state, count, end, flag) {
	if (flag == -1) {
		state.courses = this.json.concat(state.courses)
	} else {
		state.courses = state.courses.concat(this.json)
	}
	if (this.json.length == 0) {
		state.isend = true
	}
	if (state.courses.length >= 60) {
		state.courses.splice(count, end)
	}
	if (flag == -1) {
		document.body.scrollTop = state.height
	} else {
		document.body.scrollTop = (state.scrollTop - state.height)
	}
}
GetData.prototype.getHeight = (state) => {
	if (state.courses.length == 20) {
		const courses_list = document.getElementById('js_courses_list')
		if (courses_list) {
			state.height = courses_list.offsetHeight
		}
	}
}
GetData.prototype.getTop = (state) => {
	if (state.courses.length == 40) {
		state.scrollTop = document.body.scrollTop
	}
}
const mutations = {
	initCourse(state) {
		state.page = 0
		state.courses = []
	},
	fetchSelector(state, sort) {
		state.page += 1
		sort.forEach((item, index, arr) => { arr[index] = item + '=1' })
		const send = new GetData()
		send.getTop(state)
		send.getUrl(state, sort)
		send.url += sort.join('&')
		send.fetch().then(() => {
			send.preData(state, 0, 20, 1)
		})
	},
	fetchCourse(state, sort) {
		state.page += 1
		const send = new GetData()
		send.getUrl(state, sort)
		send.url += state.page + '&per_page=20&null=asc'
		send.getTop(state)
		send.fetch().then(() => {
			send.preData(state, 0, 20, 1)
		}).then(() => {
			send.getHeight(state)
		})
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
		const send = new GetData()
		send.getUrl(state, sort)
		send.url += state.page + '&per_page=20&null=asc'
		send.getTop(state)
		send.fetch().then(() => {
			send.preData(state, state.courses.length + 1, 20, -1)
		}).then(() => {
			send.getHeight(state)
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
