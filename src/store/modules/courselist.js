import CourseListService from "../../service/courselist";

// params hepler
function getQueryParams(state) {
  let mainCatKey;
  let obj = {
    page: state.page,
    sort: state.sort,
    pre_page: state.pre_page
  };
  if (state.catgories.length >= 0) {
    state.catgories.forEach(item => {
      obj[item] = 1;
    });
  }
  return obj;
}
const state = {
  loading: true,
  loadingMore: false,
  courses: [],
  totalPages: 0,
  // list params
  page: 1,
  sort: "view",
  pre_page: 20,
  catgories: [],
  // list params end

  position: undefined,
  scrollTop: 0,
  height: 0,
  back: false,
  txt: " ",
  search: false
};
const getters = {
  courses: () => state.courses,
  page: () => state.page,
  position: () => state.position,
  scrollTop: () => state.scrollTop,
  height: () => state.height,
  back: () => state.back,
  isend: state => {
    if (state.totalPages === 0) return true;
    return state.page == state.totalPages;
  },
  txt: () => state.txt
};
const actions = {
  // 加载课程列表，第一次
  fetchCoursesList({ commit, state }) {
    commit("reset");
    CourseListService.getCoursesList(getQueryParams(state)).then(
      ({ json, headers }) => {
        // 第一次请求时，把列表的元信息解析一下
        // link: </api/v1.0/courses/?page=2>; rel="next", </api/v1.0/courses/?page=30>; rel="last"
        // let totalPages = /page=([d]+)/.exec(headers[0].split(';')[1])
        let totalPages = Number(
          /page=([0-9]+)/.exec(headers[0].split(";")[1])[1]
        );
        commit("insertCourses", json);
        commit("setListMetaData", totalPages);
        commit("setLoading", false);
      }
    );
  },
  // 分页加载课程列表，下一页
  fetchNextCoursesList({ commit, state }) {
    commit("setLoadingMore", true);
    commit("setPage", state.page + 1);
    CourseListService.getNextCoursesList(getQueryParams(state)).then(res => {
      commit("insertCourses", res);
      commit("setLoadingMore", false);
    });
  },
  changeSortMethod({ commit }, method) {
    commit("setSort", method);
  },

  getPosition({ commit }, position) {
    commit("getPosition", position);
  },
  turnFlag({ commit }) {
    commit("turnFlag");
  },
  initCourse({ commit }, option) {
    commit("initCourse", option);
  },
  changeSelector({ commit }, sort) {
    commit("changeSelector", sort);
  }
};

const mutations = {
  initCourse(state, option) {
    if (!option) {
      option = {};
    }
    state.txt = option.info;
    state.search = option.search;
    state.page = 0;
    state.courses = [];
    state.isend = false;
  },
  changeSelector(state, sort) {
    state.catgories = sort;
  },
  reset(state) {
    state.page = 1;
    state.courses = [];
    state.loading = true;
  },
  insertCourses(state, courses) {
    state.courses = state.courses.concat(courses);
  },
  setListMetaData(state, total) {
    state.totalPages = total;
  },
  setPage(state, page) {
    state.page = page;
  },
  setSort(state, sort) {
    state.sort = sort;
  },
  setLoading(state, loading) {
    state.loading = loading;
  },
  setLoadingMore(state, loading) {
    state.loadingMore = loading;
  },
  getPosition(state, position) {
    state.position = position;
  },
  turnFlag(state) {
    state.back = !state.back;
  },
  fetchCourseN(state, sort) {}
};
export default {
  state,
  getters,
  actions,
  mutations
};
