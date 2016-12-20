const getters = {
	snaps: (state) => {
		const snaps = {}
		snaps.is_index = state.is_index
		snaps.is_all = state.is_all
		snaps.is_recommend = state.is_recommend
		snaps.is_auth = state.is_auth
		snaps.is_course = state.is_course
		snaps.is_sub = state.is_sub
		return snaps
	},
	is_index: (state) => state.is_index,
	is_all: (state) => state.is_all,
	is_recommend: (state) => state.is_recommend,
	is_auth: (state) => state.is_auth,
	is_course: (state) => state.is_course,
	is_sub: (state) => state.is_sub,
	is_search: (state) => state.is_search,
}
export default getters
