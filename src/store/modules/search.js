const state = {
    hot: []
}

const getters = {
    hot: state => state.hot,
}

const actions = {
    fetchHot({ commit }) {
        commit('fetchHot')
    }
}

const mutations = {
    fetchHot() {
        fetch('/api/v1.0/search/hot/')
        .then(function(response) {
            response.json().then(function(json) {
                state.hot = json
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
