import SubjectService from "../../service/subject";
import State from "../state";

const state = {
  sub_info: {
    author: ""
  }
};
const getters = {
  sub_info: () => state.sub_info
};
const actions = {
  fetchSubject({ commit }, id) {
    SubjectService.oneTip(id).then(json => {
      commit("fetchSubject", json);
    });
  },
  likeTip({ state, commit }) {
    SubjectService.likeTip(state.sub_info.id, State.token).then(() => {
      commit("setLike", true);
    });
  },
  cancelLike({ state, commit }) {
    SubjectService.cancelLike(state.sub_info.id, State.token).then(() => {
      commit("setLike", false);
    });
  }
};
const mutations = {
  fetchSubject(state, json) {
    state.sub_info = json;
  },
  setLike(state, flag) {
    state.sub_info.liked = flag;
  }
};
export default {
  state,
  getters,
  actions,
  mutations
};
