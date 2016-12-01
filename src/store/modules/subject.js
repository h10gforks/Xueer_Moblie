const state = {
    cont: '',
    title: '',
    author: '',
    date: '',
    subject_likes: '',
    subject_id: ''
}

const getters = {
    cont: state => state.cont,
    title: state => state.title,
    author: state => state.author,
    date: state => state.date,
    subject_likes: state => state.subject_likes,
    subject_id: state => state.subject_id
}

const actions = {
    fetchSubject({ commit }, id) {
        commit('fetchSubject', id)
    },
    likeThis({commit}) {
        commit('likeThis')
    }
}

const mutations = {
    fetchSubject(state, id) {
        state.subject_id = id
        let url = '/api/v1.0/tips/' + id
        fetch(url)
        .then(function(response) {
            response.json().then(function(json) {
                state.cont = json.body
                state.title = json.title
                state.author = json.author
                state.date = json.date
                state.subject_likes = json.likes
            });
        })
    },
    likeThis() {
        let url = '/api/v1.0/comments/' + state.subject_id + '/like/'
        console.log(url)
        // fetch(url)
        // .then(function(response) {
        //     response.json().then(function(json) {
                
        //     });
        // })
    }
}

export default {
  state,
  getters,
  actions,
  mutations
}
