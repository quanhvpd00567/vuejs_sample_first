<template>
    <div id="headHoder">
        <b-navbar toggleable="lg" type="dark" variant="info">
            <router-link to="/" class="navbar-brand">
                <img src="./../assets/logo_me.png" alt="Hoang Quan">
            </router-link>
            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav>
                    <li class="nav-item">
                        <router-link to="/about" class="nav-link">About</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/contact" class="nav-link">Contact</router-link>
                    </li>
                </b-navbar-nav>
                <!-- Right aligned nav items -->
                <b-navbar-nav class="ml-auto">
                    <b-nav-form>
                        <b-form-input size="sm" class="mr-sm-2" v-model="keywork" placeholder="Search"></b-form-input>
                        <b-button size="sm" class="my-2 my-sm-0" variant="success">Search</b-button>
                    </b-nav-form>
                    <b-nav-item-dropdown text="Lang" right>
                        <b-dropdown-item href="#" v-for="(locale, index) in locales" :key="index">
                            {{locale.name}}
                        </b-dropdown-item>
                    </b-nav-item-dropdown>
                    <div>
                        <router-link v-if="!isLogin" to="/login" class="nav-link">Login</router-link>
                        <router-link v-if="isLogin" to="/" class="nav-link">Logout</router-link>
                    </div>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </div>
</template>
<script>
export default {
    name: 'headHoder',
    data() {
        return {
            locales: [
                {name: 'EN'},
                {name: 'ES'},
                {name: 'RU'},
                {name: 'FA'}
            ],
            keywork: 'a'
        }
    },
    computed: {
        isLogin(){
            return this.$store.getters.getIsAuthen
        }
    },
    methods: {
        // Logout(){
            
        // }
    }
}
</script>

