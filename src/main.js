import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueRouter from 'vue-router'
import routers from './routers'
import VueMeta from 'vue-meta'
import { store } from './store/store';


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

// router.beforeEach((to, from, next) => {
//   const publicPages = ['login'];
//   const authRequired = !publicPages.includes(to.name);
//   const loggedIn = localStorage.getItem('token');
//   if (authRequired && !loggedIn) {
//     return next('/login');
//   }
//   next();
// })

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
