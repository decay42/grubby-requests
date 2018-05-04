import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    requests: JSON.parse(localStorage.getItem('requestQueue')) || [],
    request: null,
    requester: null,
    id: 0
  },
  getters: {
    requests: state => state.requests,
    request: state => state.request,
    requester: state => state.requester
  },
  mutations: {
    addRequest (state, request) {
      request.id = state.id
      state.id++
      state.requests.push(request)
      localStorage.setItem('requestQueue', JSON.stringify(state.requests))
      state.request = ''
      state.requester = ''
    },
    nextRequest (state) {
      state.requests = state.requests.length > 1 ? state.requests.slice(1) : []
      localStorage.setItem('requestQueue', JSON.stringify(state.requests))
    },
    clearRequests (state) {
      state.requests = []
      state.request = ''
      state.requester = ''
      state.id = 0
      localStorage.removeItem('requestQueue')
    },
    setRequest (state, request) {
      state.request = request
    },
    setRequester (state, requester) {
      state.requester = requester
    }
  }
})
