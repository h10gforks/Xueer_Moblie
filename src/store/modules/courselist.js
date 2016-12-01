const state = {
    courses: [],
    page: 0
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
        state.page ++ 
        let url = 'api/v1.0/courses/?page='+ state.page +'&per_page=20&sort=view&null=asc'
        fetch(url)
        .then(function(response) {
            response.json().then(function(json) {
                if (state.page >= 3) {
                    state.courses.splice(0, 20)
                }
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
