import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Appindex from '@/components/home/Appindex/Appindex'
import Login from '@/components/Login/Login'
import Home from '@/components/Home'
import LibraryIndex from '@/components/library/LibraryIndex/LibraryIndex'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    /*{
      path: '/welcome',
      name: 'Appindex',
      component: Appindex,
      meta: {
        requireAuth: true
      }
    }*/
    {
      path: '/home',
      name: 'Home',
      component: Home,
      // home页面并不需要被访问
      redirect: '/welcome',
      children: [
        {
          path: '/welcome',
          name: 'Appindex',
          component: Appindex,
          meta: {
            requireAuth: true
          }
        },
        {
          path: '/library',
          name: 'Library',
          component: LibraryIndex,
          meta: {
            requireAuth: true
          }
        }
      ]
    }
  ]
})
