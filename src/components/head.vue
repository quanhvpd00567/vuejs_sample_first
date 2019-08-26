<template>
  <div id="headHoder">
    <b-navbar toggleable="lg" type="dark" variant="info">
      <router-link to="/" class="navbar-brand">
        <img src="./../assets/logo_me.png" alt="Hoang Quan" />
      </router-link>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <!-- list menu -->
        <b-navbar-nav>
          <li class="nav-item">
            <router-link to="/about" class="nav-link">About</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/contact" class="nav-link">Contact</router-link>
          </li>
        </b-navbar-nav>
        <!-- end list menu -->
        <!-- list flag -->
        <b-navbar-nav class="ml-auto">
          <li class="nav-item">
            <b-link v-if="loggedIn" v-on:click="logout" class="nav-link">Logout</b-link>
            <router-link v-if="!loggedIn" to="/login" class="nav-link">Login</router-link>
          </li>
          <li class="nav-item" v-if="!loggedIn">
            <router-link :to="{name: 'register'}" class="nav-link">Register</router-link>
          </li>
          <li class="nav-item">
            <b-link class="flag_c nav-link">
              <country-flag country="vn" />
            </b-link>
          </li>
          <li class="nav-item">
            <b-link class="nav-link flag_c">
              <country-flag country="jp" />
            </b-link>
          </li>
          <li class="nav-item">
            <b-link class="nav-link flag_c">
              <country-flag country="kr" />
            </b-link>
          </li>
        </b-navbar-nav>
        <!-- end list flag -->
      </b-collapse>
    </b-navbar>
  </div>
</template>
<script>
import { LOGOUT } from "./../store/mutation-type";
import CountryFlag from "vue-country-flag";
import { mapGetters } from "vuex";

export default {
  name: "headHoder",
  components: {
    CountryFlag
  },
  computed: mapGetters(["loggedIn"]),
  methods: {
    logout() {
      this.$store.dispatch(LOGOUT).then(res => {
        this.$router.push({ name: "login" });
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.flag_c {
  padding: 0px 5px !important;
}
</style>

