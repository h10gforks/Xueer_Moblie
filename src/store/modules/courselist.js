const state = {
    courses: []
}

const getters = {
    courses: state => state.courses
}

const actions = {
    fetchCourse({ commit }) {
        commit('fetchCourse')
    }
}

const mutations = {
    fetchCourse(state) {
        fetch('/api/v1.0/courses/?page=1&main_cat=0&ts_cat=1')
        .then(function(response) {
            response.json().then(function(json) {
                state.courses = json
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
