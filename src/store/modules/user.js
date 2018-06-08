import UserService from "../../service/user";

const state = {
  email: "",
  username: "",
  link: "",
  loadingLink: false
};
const getters = {};
const actions = {
  resetUserData({ commit }) {
    commit("reset");
  },
  fetchUserData({ commit }, token) {
    UserService.getCurrentUserInfo({ token }).then(res => {
      commit("setUserInfo", res);
    });
  },
  fetchLink({ commit }, token) {
    commit("setLoadingLink", true);
    commit("setLink", "加载中");
    UserService.getPromotionLink({ token }).then(res => {
      commit("setLink", res.private_promotion_link);
      commit("setLoadingLink", false);
    });
  }
};
const mutations = {
  reset(state) {
    state.email = "";
    state.username = "";
  },
  setUserInfo(state, info) {
    state.email = info.email;
    state.username = info.username;
  },
  setLink(state, link) {
    state.link = link;
  },
  setLoadingLink(state, flag) {
    state.loadingLink = flag;
  }
};
export default {
  state,
  getters,
  actions,
  mutations
};
