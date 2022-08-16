import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    topTabl: [],
    loadingState: false
  },
  getters: {
  },
  mutations: {
    // 添加标签
    setTabl(state, value) {
      state.topTabl.push(value)
    },
    // 删除标签
    remTabl(state, value) {
      state.topTabl.pop(value)
    },

    openLoading(state) {
      state.loadingState = true
    },
    closeLoading(state) {
      state.loadingState = false
    }
  },
  actions: {
  },
  modules: {
  }
})
