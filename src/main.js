import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueRouter from 'vue-router'
import routers from './routers'
import base from './store/http'

Vue.use(BootstrapVue)
Vue.use(VueRouter)
Vue.config.devtools = true
const router = new VueRouter({
  routes: routers,
  mode: 'history'
})

Vue.prototype.$http = base

new Vue({
  el: '#app',
  router: router,
  render: h => h(App)
})
