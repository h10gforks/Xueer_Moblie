const state = {
  tag: "",
  pre_tags: []
};
const getters = {
  tag: () => state.tag,
  pre_tags: () => state.pre_tags
};
const actions = {
  preTags({ commit }, val) {
    commit("preTags", val);
  },
  deleteTag({ commit }) {
    commit("deleteTag");
  },
  clickTag({ commit }) {
    commit("clickTag");
  }
};
const mutations = {
  preTags(state, val) {
    const tags = val
      .split(",")
      .join("，")
      .split("，");
    if (tags.length > 1) {
      state.pre_tags.push(tags[0]);
      state.tag = "";
    } else {
      state.tag = tags + "";
    }
  },
  deleteTag(state) {
    if (state.tag.length == 0 && state.pre_tags.length > 0) {
      state.pre_tags.pop();
    }
  },
  clickTag(state, val) {
    state.pre_tags.push(val);
  }
};
export default {
  state,
  getters,
  actions,
  mutations
};
