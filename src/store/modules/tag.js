const state = {
    hot_tag: []
}

const getters = {
	hot_tag: state => state.hot_tag
}

const actions = {
	getTags({ commit }) {
		commit('getTags')
	}
}

const mutations = {
	getTags(state) {
		var url = '/api/v1.0/tags/'
        fetch(url)
        .then(function(response) {
            response.json().then(function(json) {
                for(var i=0;i<4;i++) {
                	state.hot_tag.push(json[i].title)
                }
            });
        })
	}
}

export default {
  state,
  getters,
  actions,
  mutations
}

