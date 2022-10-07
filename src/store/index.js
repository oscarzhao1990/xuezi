import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    uname: null,
  },
  getters: {},
  mutations: {
    changeUname(state, uname) {
      state.uname = uname
    },
  },
  actions: {},
  modules: {},
})
