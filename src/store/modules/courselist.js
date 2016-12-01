const state = {
    courses: [],
    page: 1
}

const getters = {
    courses: state => state.courses,
    page: state => state.page
}

const actions = {
    fetchCourse({ commit }) {
        commit('fetchCourse')
    }
}

const mutations = {
    fetchCourse(state) {
        let url = '/api/v1.0/courses/?page='+ state.page + '1&main_cat=0&ts_cat=1'
        state.page ++ 
        fetch(url)
        .then(function(response) {
            response.json().then(function(json) {
                state.courses = state.courses.concat(json)
                console.log(state.courses)
                console.log(state.page)
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
