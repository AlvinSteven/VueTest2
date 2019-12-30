import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Appindex from '@/components/home/Appindex/Appindex'
import Login from '@/components/Login/Login'
import LoginTest from '@/components/LoginTest'

Vue.use(Router)

export default new Router({
  routes: [
   /* {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },*/
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/welcome',
      name: 'Appindex',
      component: Appindex
    }
    /*{
      path: '/',
      name: 'LoginTest',
      component: LoginTest
    }*/
  ]
})
