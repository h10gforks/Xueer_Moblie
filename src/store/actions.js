import SignService from "../service/sign";
import Cookie from "../service/cookie";

const actions = {
  changeCurrentRoute({ commit }, path) {
    commit("changeCurrentRoute", path);
  },
  isLoading({ commit }, flag) {
    commit("isLoading", flag);
  },
  showSelector({ commit }, flag) {
    commit("showSelector", flag);
  },
  showLogin({ commit }, flag) {
    commit("showLogin", flag);
  },
  initData({ commit }, data) {
    commit("initData", data);
  },
  logout({ commit }) {
    Cookie.clearCookie("token");
    commit("clearUserData");
  },
  getToken({ commit }) {
    const email = SignService.getEmail();
    SignService.getToken(email).then(res => {
      if (res !== null && res !== undefined) {
        Cookie.setCookie("token", res.token);
        commit("isLoading", false);
        window.location.href = Cookie.getCookie("url");
      } else {
        SignService.getUsername(email).then(info => {
          SignService.register(info.username, email).then(() => {
            SignService.getToken(email).then(res => {
              Cookie.setCookie("token", res.token);
              commit("isLoading", false);
              window.location.href = Cookie.getCookie("url");
            });
          });
        });
      }
    });
  },
  setToken({ commit }, token) {
    commit("setToken", token);
    commit("isLogin");
  }
};

export default actions;
