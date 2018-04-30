import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    requests: JSON.parse(localStorage.getItem('requestQueue')) || [],
    id: 0
  },
  getters: {
    requests: state => [{
      'id': 1,
      'requester': 'kwilson0',
      'request': 'convallis morbi odio odio '
    }, {
      'id': 2,
      'requester': 'rghiotto1',
      'request': 'ipsum primis in faucibus orci luctus'
    }, {
      'id': 3,
      'requester': 'cgoodboddy2',
      'request': 'primis in faucibus dapibus dolor vel est donec odio justo sollicitudin ut'
    }, {
      'id': 4,
      'requester': 'djendrach3',
      'request': 'rutrum nulla tellus'
    }] // state.requests
    // dummy data in case it's needed
  },
  mutations: {
    addRequest (state, request) {
      request.id = state.id
      state.id++
      state.requests.push(request)
      localStorage.setItem('requestQueue', JSON.stringify(state.requests))
    },
    nextRequest (state) {
      state.requests = state.requests.length > 1 ? state.requests.slice(1) : []
      localStorage.setItem('requestQueue', JSON.stringify(state.requests))
    }
  }
})
