import Vue from 'vue'
import VueRouter from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Call from '@/components/Call'
import Customer from '@/components/Customer'
import ServiceSetting from '@/components/ServerSetting'
import Login from '@/components/Login'
import Store from '@/components/Fuwenben'
import Cookies from 'js-cookie'

Vue.use(VueRouter)
const router = new VueRouter({
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
      component: Login,
      name: 'login'
    },
    {
      path: '/1',
      component: HelloWorld,
      meta: {
        requireAuth: true
      },
      children: [
        {
          path: 'customer',
          component: Customer,
          name: 'Customer',
          meta: {
            title: 'customerlist'
          }
        },
        {
          path: 'call',
          component: Call,
          name: 'Call',
          meta: {
            title: 'calllist'
          }
        },
        {
          path: 'servicesetting',
          component: ServiceSetting,
          name: 'ServiceSetting',
          meta: {
            title: 'servicesettinglist'
          }
        }
      ]
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (Cookies.get('auid')) {
    next()
  } else {
    if (to.name === 'login') {
      next()
    } else {
      next({ name: 'login' })
    }
  }
})
export default router
