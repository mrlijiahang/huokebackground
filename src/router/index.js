import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Call from '@/components/Call'
import Customer from '@/components/Customer'
import Sale from '@/components/Sale'
import ServiceSetting from '@/components/ServerSetting'
import FormSetting from '@/components/FormSetting'
Vue.use(Router)

export default new Router({
  // mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/1/Customer'
    },
    {
      path: '/1',
      name: 'login',
      component: HelloWorld,
      children: [
        {
          path: 'customer',
          component: Customer
        },
        {
          path: 'sale',
          component: Sale
        },
        {
          path: 'call',
          component: Call
        },
        {
          path: 'servicesetting',
          component: ServiceSetting
        },
        {
          path: 'formsetting',
          component: FormSetting
        }
      ]
    }
  ]
})
