const state = {
	cont: '',
	title: '',
	author: '',
	date: '',
	subject_likes: '',
	subject_id: '',
}
const getters = {
	cont: () => state.cont,
	title: () => state.title,
	author: () => state.author,
	date: () => state.date,
	subject_likes: () => state.subject_likes,
	subject_id: () => state.subject_id,
}
const actions = {
	fetchSubject({
		commit,
	}, id) {
		commit('fetchSubject', id)
	},
	likeThis({
		commit,
	}) {
		commit('likeThis')
	},
}
const mutations = {
	fetchSubject(state, id) {
		state.subject_id = id
		const url = '/api/v1.0/tips/' + id
		fetch(url).then(response => {
			response.json().then(json => {
				state.cont = json.body
				state.title = json.title
				state.author = json.author
				state.date = json.date
				state.subject_likes = json.likes
			})
		})
	},
	/* eslint no-unused-vars:0 */
	likeThis(state) {
		// const url = '/api/v1.0/comments/' + state.subject_id + '/like/'
		// fetch(url)
		// .then(response => {
		//     response.json().then(json => {
		//     })
		// })
	},
}
export default {
	state,
	getters,
	actions,
	mutations,
}
