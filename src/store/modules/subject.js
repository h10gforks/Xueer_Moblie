const state = {
    cont: '',
    title: '',
    author: '',
    date: ''
}

const getters = {
    cont: state => state.cont,
    title: state => state.title,
    author: state => state.author,
    date: state => state.date
}

const actions = {
    fetchSubject({ commit }, id) {
        commit('fetchSubject', id)
    }
}

const mutations = {
    fetchSubject(state, id) {
        var url = '/api/v1.0/tips/' + id
        fetch(url)
        .then(function(response) {
            response.json().then(function(json) {
                state.cont = json.body
                state.title = json.title
                state.author = json.author
                state.date = json.date
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
