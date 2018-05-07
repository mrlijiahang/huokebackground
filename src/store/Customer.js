import Vue from 'vue'
import Vuex from 'vuex'
import { getUserlistmsg } from '../api/login'
import Cookies from 'js-cookie'
Vue.use(Vuex)
const state = {
  auid: Cookies.get('auid') || 0,
  num: 5,
  TB: [],
  sum: 0,
  form: {},
  dialogTableVisible: false,
  index: 0
}
const mutations = {
  mes(state, payload) {
    state.dialogTableVisible = true
    state.form = payload.payload.row
  }
}
const actions = {
  get(context) {
    console.log('auid===>' + context.state.auid)
    console.log('num===>' + context.state.num)
    getUserlistmsg({ auid: context.state.auid, num: context.state.num }).then(
      res => {
        console.log('页面加载开始数据请求')
        console.log(res.data)
        context.state.TB = res.data.data.users
        context.state.sum = res.data.data.sum
        console.log(res.data.data)
      }
    )
  },
  paging(context) {
    getUserlistmsg({
      auid: context.state.auid,
      num: context.state.num,
      page: context.state.index
    }).then(res => {
      context.state.TB = res.data.data.users
      context.state.sum = res.data.data.sum
      console.log(res)
    })
  }
}

export default new Vuex.Store({ state, mutations, actions })
