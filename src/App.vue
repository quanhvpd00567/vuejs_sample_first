<template>
  <div id="app">
    <head-hoder v-if="is_show_head"></head-hoder>
    <b-container fluid class="padding_">
      <b-row>
          <router-view/>
      </b-row>
    </b-container>
  </div>
</template>

<script>
  import HeadHoder from './components/head'
  export default {
    name: 'app',
    components: {HeadHoder},
    mounted(){
      this.is_show_head = this.$route.name === 'login' ? false : true
      console.log(this.$on('authenticated'));
    },
    data () {
      return {
        is_show_head: true,
        authenticated: false
      }
    },
    methods: {
      getToken(){
        let token = localStorage.getItem('token')
        return token
      }
    }
  }
</script>
<style lang="scss" scoped>
	.padding_ {
		padding-left: 50px;
		padding-right: 50px;
    padding-top: 10px
	}
</style>

