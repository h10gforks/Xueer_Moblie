const actions = {
	changePageFlagN({ commit }, flag) {
		commit('changePageFlagN', flag)
	},
	changePageFlagY({ commit }, flag) {
		commit('changePageFlagY', flag)
	},
	getSnaps({ commit }, snaps) {
		commit('getSnaps', snaps)
	}
}

export default actions
