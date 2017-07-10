const state = {
	sub_info: {},
	subject_id: '',
}
const getters = {
	sub_info: () => state.sub_info,
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
		const url = '/api/v1.0/tips/' + id + '/'
		console.log(url)
		fetch(url).then(response => {
			response.json().then(json => {
				state.sub_info = json
			})
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
