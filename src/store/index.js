import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    requests: JSON.parse(localStorage.getItem('requestQueue')) || [],
    id: 0
  },
  getters: {
    requests: state => state.requests
    // dummy data in case it's needed
    // [{
    //   'id': 1,
    //   'requester': 'kwilson0',
    //   'request': 'convallis morbi odio odio elementum eu interdum eu tincidunt in leo'
    // }, {
    //   'id': 2,
    //   'requester': 'rghiotto1',
    //   'request': 'ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae nulla dapibus dolor vel est donec odio justo'
    // }, {
    //   'id': 3,
    //   'requester': 'cgoodboddy2',
    //   'request': 'primis in faucibus orci luctus et ultrices posuere cubilia curae nulla dapibus dolor vel est donec odio justo sollicitudin ut'
    // }, {
    //   'id': 4,
    //   'requester': 'djendrach3',
    //   'request': 'rutrum nulla tellus in sagittis dui vel nisl duis ac'
    // }, {
    //   'id': 5,
    //   'requester': 'ccoombe4',
    //   'request': 'massa id nisl venenatis lacinia aenean sit amet justo'
    // }]
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
