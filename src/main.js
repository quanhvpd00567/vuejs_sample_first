import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueRouter from 'vue-router'
import routers from './routers'
import base from './store/http'
import VueMeta from 'vue-meta'

Vue.use(BootstrapVue)
Vue.use(VueRouter)
Vue.use(VueMeta, {
  refreshOnceOnNavigation: true
})
Vue.config.devtools = true
const router = new VueRouter({
  routes: routers,
  mode: 'history'
})

router.beforeEach((to, from, next) => {
  // redirect to login page if not logged in and trying to access a restricted page
  const publicPages = ['login'];
  const authRequired = !publicPages.includes(to.name);
  const loggedIn = localStorage.getItem('token');

  if (authRequired && !loggedIn) {
    return next('/login');
  }
  next();
})


Vue.prototype.$http = base
Vue.prototype.test = 'quan'
new Vue({
  el: '#app',
  router: router,
  store: 1,
  render: h => h(App)
})
