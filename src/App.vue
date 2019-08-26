<template>
  <div id="app">
    <head-hoder v-if="is_show_head"></head-hoder>
    <header-content-hoder></header-content-hoder>
    <b-container fluid class="padding_">
      <b-row>
        <router-view />
      </b-row>
    </b-container>
    <footer-hoder></footer-hoder>
  </div>
</template>

<script>
import HeadHoder from "./components/Head";
import FooterHoder from "./components/Footer";
import HeaderContentHoder from "./components/HeaderContent";
export default {
  name: "app",
  components: { HeadHoder, FooterHoder, HeaderContentHoder },
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
  height: 5000px;
}
</style>

