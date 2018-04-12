import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  count: 0,
  name: '1',
  pwd: '1'
}
const mutations = {
  add(state) {
    state.count += 1
    // console.log(this)
    // console.log(this.state)
    // console.log(this.Store)
    // console.log(this.state.name)
  },
  reduce(state) {
    state.count -= 1
  }
}

export default new Vuex.Store({ state, mutations })
