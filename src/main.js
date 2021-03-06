// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router' // 引入路由配置
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import store from './store'

// 前端监控插件
import * as Sentry from '@sentry/browser'
import {Vue as VueIntegration} from '@sentry/integrations'

Vue.config.productionTip = false

// 设置反向代理,前端请求默认发送到 http://localhost:8443/api
var axios = require('axios')

// todo 1.切换本地/服务器
// axios.defaults.baseURL = 'http://localhost:8443/api'
axios.defaults.baseURL = 'http://fancywonderland.com:8443/api'
// 全局注册,之后可在其他组件中通过 this.$axios 发送数据
Vue.prototype.$axios = axios

Vue.use(ElementUI)

Sentry.init({
  dsn: 'https://718ec4cd49cb4a20b1877c1655aa5acc@o421681.ingest.sentry.io/5341810',
  integrations: [new VueIntegration({Vue, attachProps: true, logErrors: true})]
})

router.beforeEach((to, from, next) => {
  console.log('test beforeEach')

  if (to.meta.requireAuth) {
    if (store.state.user.username) {
      console.log('本地存在用户信息:' + JSON.stringify(store.state.user))
      next()
    } else {
      next({
        path: 'login',
        query: {redirect: to.fullPath}
      })
    }
  } else {
    next()
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store,
  components: {App},
  template: '<App/>'
})
