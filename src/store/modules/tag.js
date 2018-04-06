import TagService from "../../service/tag";
const state = {
  hot_tag: []
};
const getters = {
  hot_tag: () => state.hot_tag
};
const actions = {
  getTags({ commit }) {
    commit("getTags");
  }
};
const mutations = {
  getTags(state) {
    /*
		const url = '/api/v1.0/tags/'
		fetch(url).then(response => {
			response.json()
			*/
    TagService.getTags().then(json => {
      for (let i = 0; i < 4; i++) {
        state.hot_tag.push(json[i].title);
      }
    });
  }
};
export default {
  state,
  getters,
  actions,
  mutations
};
