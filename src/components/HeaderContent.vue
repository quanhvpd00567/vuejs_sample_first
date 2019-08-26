<template>
  <div id="HeaderContentHoder">
    <!-- <div class="col-md-3">
      <b-jumbotron>
        <template slot="header">BootstrapVue</template>
        <p>For more information visit website</p>
        <b-button variant="primary" href="#">More Info</b-button>
      </b-jumbotron>
    </div>
    <div class="col-md-9">
      <b-jumbotron>
        <template slot="header">BootstrapVue</template>
        <p>For more information visit website</p>
        <b-button variant="primary" href="#">More Info</b-button>
      </b-jumbotron>
    </div>-->
  </div>
</template>

<script>
export default {
  name: "HeaderContentHoder"
};
</script>
<style lang="scss" scoped>
#HeaderContentHoder {
  width: 100%;
  .jumbotron {
    word-break: break-word;
    margin-bottom: 10px;
  }
  div:first-child {
    padding: 0px 0px;
  }
  div:last-child {
    padding: 0px 0px;
  }
}
</style>