import {createStore} from "vuex";
import getters from "./getters";
import mutations from "../vuex/mutation";
import actions from "./actions";
// import createPersistedState from "vuex-persistedstate";

export const store = createStore({
  state: {
    user: null,
    isLogin: false,
    loadingStatus: false,
  },
  mutations,
  getters,
  actions,
  // plugins: [
  //   createPersistedState({
  //     // 주의! 사용할 모듈만 저장됨..!
  //     paths: ["getters","mutations","actions","isLogin"],
  //   })
  // ],
});