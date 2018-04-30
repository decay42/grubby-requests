import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    requests: [],
    id: 0
  },
  getters: {
    requests: state => state.requests
  },
  mutations: {
    addRequest (state, request) {
      request.id = state.id
      state.id++
      state.requests.push(request)
    },
    nextRequest (state) {
      state.requests = state.requests.length > 1 ? state.requests.slice(1) : []
    }
  }
})
