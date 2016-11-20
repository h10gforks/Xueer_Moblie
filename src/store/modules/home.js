const state = {
    tips: ''
}

const getters = {
    tips: state => state.tips
}

const actions = {
    fetchData({ commit }) {
        commit('fetchData')
    }
}

const mutations = {
    fetchData(state) {
        fetch('/api/v1.0/tips/')
        .then(function(response) {
            response.json().then(function(json) {
                state.tips = json
                console.log(json)
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
