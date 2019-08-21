<template>
    <div id="LoginHoder">
        <b-form @submit.prevent="login">
            <b-card bg-variant="light">
                <img class="mx-auto d-block" src="./../assets/logo_me.png" alt="Hoang Quan">
                <b-form-group
                    label-cols-sm="3"
                    label="Email:"
                    label-align-sm="right"
                    label-for="nested-street"
                >
                    <b-form-input placeholder="Email" v-model="form.email"></b-form-input>
                </b-form-group>
                <b-form-group
                    label-cols-sm="3"
                    label="Password:"
                    label-align-sm="right"
                    label-for="nested-street"
                >
                    <b-form-input type="password" placeholder="Password" v-model="form.password"></b-form-input>
                </b-form-group>
                <b-button-group>
                    <b-button type="submit" variant="primary">Login</b-button>
                    <!-- <b-link href="#foo">Foget password</b-link> -->
            </b-button-group>
            </b-card>
        </b-form>
    </div>
</template>

<script>

import axios from 'axios'

export default {
    name: 'LoginHoder',
    data(){
        return {
            form: {
                email: 'bob.gulgowski@brekke.biz',
                password: '12345678'
            }
        }
    },
    // mounted(){
    //     console.log(localStorage.getItem('token'));
    // },
    methods: {
        login(){
            // return new Promise((resolve, reject) => {
            
            // })
            this.$http.post('session',this.form)
            .then((response) => {
                if (response.status === 200){
                    let token = response.data.jwt
                    // Set token to localstorage
                    localStorage.setItem('token', token)
                    this.$emit('authenticated', true)
                    // Set token to headers api
                    this.$http.defaults.headers.common['Authorization'] = token
                    this.$router.push('/')
                }
            })
            .catch((error) => {
                localStorage.removeItem('token')
            })
        }
    }
}
</script>

<style lang="scss" scoped>
    #LoginHoder{
        margin: 0 auto;
        width: 30%;
        margin-top: 100px;
        img{
            padding-bottom: 10px
        }
    }
</style>