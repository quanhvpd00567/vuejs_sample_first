import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)
axios.defaults.baseURL = 'http://localhost:3000/api/v1/'
export const store = new Vuex.Store({
    state: {
        token: localStorage.getItem('token') || null,
        is_authen: true
    },
    getters: {
        getIsAuthen(state) {
            return state.is_authen
        }
    },
    mutations: {
        setIsAuthen(state, isLogin){
            state.is_authen = isLogin
        },
        setToken(state, token){
            state.token = token
        }
    },
    actions: {
        a_login(context, payload){
            return new Promise((resolve, reject) => {
                axios.post('session', payload)
                .then((response) => {
                    if (response.status === 200){
                        const token = response.data.jwt
                        // Set token to localstorage
                        localStorage.setItem('token', token)
                        context.commit('setIsAuthen', true)
                        // Set token to headers api
                        context.commit('setToken', token)
                        resolve(response)
                    }
                })
                .catch((error) => {
                    reject(error)
                })
            })
        }
    }
}) 