import Vue from 'vue'
import Vuex from 'vuex'
import { getUserlistmsg } from '../api/login'
Vue.use(Vuex)
const state = {
  auid: 1
}
const mutations = {}
const actions = {
  get(context) {
    getUserlistmsg({ auid: context.state.auid }).then(res => {
      console.log(res)
    })
  }
}

export default new Vuex.Store({ state, mutations, actions })
