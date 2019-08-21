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
                email: 'quanlybanthan@gmail.com',
                password: '123456'
            }
        }
    },
    mounted(){
        this.$store.commit('setIsAuthen', false)
    },
    methods: {
        login(){
            this.$store.dispatch('a_login', this.form)
            .then(response => {
                console.log(response)
                this.$router.push({ name: 'home' })
            })
            .catch(error => {
                  console.log(error)  
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