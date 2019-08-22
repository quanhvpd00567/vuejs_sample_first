import axios from 'axios'
import {LIST_USER} from './../mutation-type'
const m_user = {
    state: {
        users: []
    },
    getters: {
        listUser(state) {
            return state.users
        }
    },
    mutations: {
        setListUsers(state, users){
            state.users = users
        }
    },
    actions: {
        // Login action
        [LIST_USER](context){
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + context.rootState.login.token
            return new Promise((resolve, reject) => {
                axios.get('users')
                .then((response) => {
                    context.commit('setListUsers', response.data.data)
                    resolve(response)
                })
                .catch((error) => {
                    reject(error)
                })
            })
        }
    }

}

export default m_user