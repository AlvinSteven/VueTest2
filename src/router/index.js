import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Appindex from '@/components/home/Appindex/Appindex'
import Login from '@/components/Login/Login'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/welcome',
      name: 'Appindex',
      component: Appindex,
      meta: {
        requireAuth: true
      }
    }

  ]
})
