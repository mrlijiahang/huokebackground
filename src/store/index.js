import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  count: 0,
  name: '1',
  pwd: '1'
}
const mutations = {
  add(state, payload) {
    state.count += payload.n
    // console.log(this)
    // console.log(this.state)
    // console.log(this.Store)
    // console.log(this.state.name)
  },
  reduce(state, payload) {
    state.count -= payload.n
  }
}
const actions = {
  add(context) {
    context.commit('add')
  }
}

export default new Vuex.Store({ state, mutations, actions })
