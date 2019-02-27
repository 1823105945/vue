// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// import App from './App'
import Layout from './components/Layout'
import ViewrRouter from './router'
import IndexPage from './page/Index'

Vue.use(ViewrRouter)
let router=new ViewrRouter({
  mode:'history',
  routes: [
    {
      path:'/',
      component:IndexPage,
    }
  ]
})
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { Layout },
  template: '<Layout/>'
})
