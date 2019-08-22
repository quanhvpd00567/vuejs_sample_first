import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import m_login from './modules/login'
import m_user from './modules/user'

Vue.use(Vuex)
axios.defaults.baseURL = 'http://localhost:3000/api/v1/'
export const store = new Vuex.Store({
    modules: {
        login: m_login,
        user: m_user
    }
})

// console.log(store.state.login.is_authen)
// store.state.user
