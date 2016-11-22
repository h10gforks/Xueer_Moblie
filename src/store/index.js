import Vue from 'vue'
import Vuex from 'vuex'

//全局的getters、actions、mutations
import * as getters from './getters'
import * as actions from './actions'
import * as mutations from './mutations'

//
import home from './modules/home'
import subject from './modules/subject'
import detail from './modules/detail'
import search from './modules/search'


Vue.use(Vuex)

const state = {
  
}

const store = new Vuex.Store({
  state,
  getters,
  actions,
  modules: {
    home,
    subject,
    detail,
    search
  },
  mutations
})

if (module.hot) {
  module.hot.accept([
    './getters',
    './actions',
    './mutations'
  ], () => {
    store.hotUpdate({
      getters: require('./getters'),
      actions: require('./actions'),
      mutations: require('./mutations')
    })
  })
}

export default store
