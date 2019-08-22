<template>
    <div id="RegisterView">
        <b-form @submit.prevent="register">
            <b-card bg-variant="light">
                <b-form-group
                    label-cols-sm="3"
                    label="Full name:"
                    label-align-sm="right"
                    label-for="nested-street">
                    <b-form-input placeholder="Email" v-model="form.full_name"></b-form-input>
                </b-form-group>
                 <b-form-group
                    label-cols-sm="3"
                    label="Email:"
                    label-align-sm="right"
                    label-for="nested-street">
                    <b-form-input type="email" placeholder="Email" v-model="form.email"></b-form-input>
                </b-form-group>
                <b-form-group
                    label-cols-sm="3"
                    label="Password:"
                    label-align-sm="right"
                    label-for="nested-street" >
                    <b-form-input type="password" placeholder="Password" v-model="form.password" autocomplete="true"></b-form-input>
                </b-form-group>
                <b-form-group
                    label-cols-sm="3"
                    label="Password confirm:"
                    label-align-sm="right"
                    label-for="nested-street" >
                    <b-form-input type="password" placeholder="Password confirm" v-model="form.password_confirm" ></b-form-input>
                </b-form-group>
                <b-button-group>
                    <b-button type="submit" variant="primary">Register</b-button>
                    <router-link :to="{name: 'login'}" class="nav-link">Sign in now</router-link>
            </b-button-group>
            </b-card>
        </b-form>
    </div>
</template>

<script>
export default {
    name: 'RegisterView',
    data() {
        return {
            form: {
                full_name: '',
                email: '',
                password: '',
                password_confirm: ''
            }
        }
    },
    mounted(){
        this.$store.commit('setIsAuthen', false)
    },
    methods: {
        register(){
            console.log(this.form)
        }
    }
}
</script>

<style lang="scss" scoped>
    #RegisterView{
        margin: 0 auto;
        width: 40%;
        margin-top: 100px;
        img{
            padding-bottom: 10px
        }
    }
</style>