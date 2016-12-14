const mutations = {
	changePageFlagN(state, flag) {
		if (Object.prototype.toString.call(flag) === '[object String]') {
			state[flag] = false
		} else if (Object.prototype.toString.call(flag) === '[object Array]') {
			flag.forEach(element => {
				state[element] = false
			})
		}
	},
	changePageFlagY(state, flag) {
		if (Object.prototype.toString.call(flag) === '[object String]') {
			state[flag] = true
		} else if (Object.prototype.toString.call(flag) === '[object Array]') {
			flag.forEach(element => {
				state[element] = true
			})
		}
	},
	getSnaps(state, snaps) {
		for(const key in snaps) {
			state.page_snaps[key] = snaps[key]
		}
	},
	isLoading(state, flag) {
		state.is_loading = flag
	},
}

export default mutations
