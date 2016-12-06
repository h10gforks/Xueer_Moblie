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
}
export default getters
