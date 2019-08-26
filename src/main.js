import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueRouter from 'vue-router'
import routes from './routers'
import VueMeta from 'vue-meta'
import { store } from './store/store';
import i18n from './i18n.js'

Vue.use(BootstrapVue)
Vue.use(VueRouter)

Vue.use(VueMeta, {
  refreshOnceOnNavigation: true
})

Vue.config.devtools = true
const router = new VueRouter({
  routes,
  mode: 'history'
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    !store.getters.loggedIn ? next({ name: 'login' }) : next()
  } else if (to.matched.some(record => record.meta.requiresVisitor)) {

  } else if (to.matched.some(record => record.meta.viewLogin)) {
    store.getters.loggedIn ? next({ name: 'home' }) : next()
  } else {
    next()
  }
})

new Vue({
  el: '#app',
  router,
  store,
  i18n,
  render: h => h(App)
})
