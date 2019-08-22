import axios from 'axios'
import {LOGIN, LOGOUT} from './../mutation-type'
const m_login = {
    state: {
        token: localStorage.getItem('token') || null,
        is_authen: true,
    },
    getters: {
        getIsAuthen(state) {
            return state.is_authen
        },
        loggedIn(state){
            return state.token !== null
        }
    },
    mutations: {
        setIsAuthen(state, isLogin){
            state.is_authen = isLogin
        },
        setToken(state, token){
            state.token = token
        },
        destroyToken(state) {
            state.token = null
        },
    },
    actions: {
        // Login action
        [LOGIN](context, payload){
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
        },
        [LOGOUT](context){
            return new Promise((resolve, reject) => {
                localStorage.removeItem('token')
                context.commit('destroyToken')
                resolve(true)
            })
        }
    }

}

export default m_login