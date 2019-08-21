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
  import {mapGetters} from 'Vuex'

  export default {
    name: 'app',
    components: {HeadHoder},
    data () {
      return {
        // is_show_head: true,
      }
    },
    // mounted(){
    //   this.is_show_head = this.$route.name === 'login' ? false : true
    // },
    computed: {
      is_show_head(){
        return this.$store.getters.getIsAuthen
      }
    },
    methods: {
     
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

