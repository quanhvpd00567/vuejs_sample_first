<template>
  <div id="app">
    <head-hoder></head-hoder>
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
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    }
  }
</script>
<style lang="scss" scoped>
	.padding_ {
		margin-left: 10px;
		margin-right: 10px;
	}
</style>

