const state = {
    hot: [],
    show_search: false
}

const getters = {
    hot: state => state.hot,
    show_search: state => state.show_search
}

const actions = {
    fetchHot({ commit }) {
        commit('fetchHot')
    },
    showSearch({ commit }) {
        commit('showSearch')
    },
    hideSearch({ commit }) {
        commit('hideSearch')
    },
}

const mutations = {
    fetchHot() {
        fetch('/api/v1.0/search/hot/')
        .then(function(response) {
            response.json().then(function(json) {
                state.hot = json
            });
        })
    },
    showSearch() {
        state.show_search = true
        console.log("Hello world!")
    },
    hideSearch() {
        state.show_search = false
    }
}

export default {
  state,
  getters,
  actions,
  mutations
}
