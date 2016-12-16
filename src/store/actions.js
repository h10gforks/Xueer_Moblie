const actions = {
	changePageFlagN({ commit }, flag) {
		commit('changePageFlagN', flag)
	},
	changePageFlagY({ commit }, flag) {
		commit('changePageFlagY', flag)
	},
	getSnaps({ commit }, snaps) {
		commit('getSnaps', snaps)
	},
	isLoading({ commit }, flag) {
		commit('isLoading', flag)
	},
	showSelector({ commit }, flag) {
		commit('showSelector', flag)
	},
	showLogin({ commit }, flag) {
		commit('showLogin', flag)
	},
}

export default actions
