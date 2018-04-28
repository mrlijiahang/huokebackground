import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Call from '@/components/Call'
import Customer from '@/components/Customer'
import ServiceSetting from '@/components/ServerSetting'
import Login from '@/components/Login'
import Store from '@/components/Fuwenben'
Vue.use(Router)

export default new Router({
  // mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/2'
    },
    {
      path: '/3',
      component: Store
    },
    {
      path: '/2',
      component: Login
    },
    {
      path: '/1',
      name: 'login',
      component: HelloWorld,
      children: [
        {
          path: 'customer',
          component: Customer,
          meta: {
            title: 'customerlist'
          }
        },

        {
          path: 'call',
          component: Call,
          meta: {
            title: 'calllist'
          }
        },
        {
          path: 'servicesetting',
          component: ServiceSetting,
          meta: {
            title: 'servicesettinglist'
          }
        }
      ]
    }
  ]
})
