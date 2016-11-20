const state = {
    info: {},
    hot_tags: [],
    comments: [],
    hot_comments: []
}

const getters = {
    info: state => state.info,
    hot_tags: state => state.hot_tags,
    comments: state => state.comments,
    hot_comments: state => state.hot_comments,
}

const actions = {
    fetchInfo({ commit, state }) {
        new Promise((resolve) =>{
            var info = commit('fetchInfo')
        }).then(
            commit('getTag',state)
        )
    },
    fetchComments({ commit, state }) {
        commit('fetchComments')
    },
    fetchHotComments({ commit }) {
        commit('fetchHotComments')
    }
}

const mutations = {
    fetchInfo() {
        fetch('/api/v1.0/courses/190/')
        .then(function(response) {
            response.json().then(function(json) {
                state.info = json
                return json
            });
        })
    },
    getTag(state){
        for(var key in state) {
             console.log(state[key])
        }
        // var arr = this.hot_tags = tags.split(' ')
        // this.hot_tags.unshift(this.info.main_category)
        // return arr;
    },
    fetchComments() {
        fetch('/api/v1.0/courses/190/comments/')
        .then(function(response) {
            response.json().then(function(json) {
                state.comments = json
            })
        })
    },
    fetchHotComments() {
        fetch('/api/v1.0/courses/190/comments/hot/')
        .then(function(response) {
            response.json().then(function(json) {
                state.hot_comments = json
            })
        })
    },
    // preprocess(json) {;
    //     json.forEach(function(element, index, array){
    //         if(element.body.length >= 60) {
    //             element._body = element.body
    //             element.body =element.body.substr(0,60)
    //         }
    //     })
    // }
}

export default {
  state,
  getters,
  actions,
  mutations
}
