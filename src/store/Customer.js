import Vue from 'vue'
import Vuex from 'vuex'
import { getUserlistmsg } from '../api/login'
Vue.use(Vuex)
const state = {
  auid: 1,
  num: 5,
  TB: [],
  sum: 0,
  form: {},
  dialogTableVisible: false
}
const mutations = {
  mes(state, payload) {
    state.dialogTableVisible = true
    state.form = payload.payload.row
  }
}
const actions = {
  get(context) {
    getUserlistmsg({ auid: context.state.auid, num: context.state.num }).then(
      res => {
        context.state.TB = res.data.data.users
        context.state.sum = res.data.data.sum
      }
    )
  }
}

export default new Vuex.Store({ state, mutations, actions })
