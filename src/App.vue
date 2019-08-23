<template>
  <div id="app">
    <head-hoder v-if="is_show_head"></head-hoder>
    <b-container fluid class="padding_">
      <b-row>
        <router-view />
        {{ $t('lable.email')}}
      </b-row>
    </b-container>
  </div>
</template>

<script>
import HeadHoder from "./components/head";
export default {
  name: "app",
  components: { HeadHoder },
  data() {
    return {};
  },
  computed: {
    is_show_head() {
      return this.$store.getters.getIsAuthen;
    }
  },
  methods: {}
};
</script>
<style lang="scss" scoped>
.padding_ {
  padding-left: 50px;
  padding-right: 50px;
  padding-top: 10px;
}
</style>

