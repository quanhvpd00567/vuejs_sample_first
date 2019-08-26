<template>
  <div id="home">
    <div v-if="items.length">
      <b-table striped hover :items="items" :fields="fields">
        <template slot="[show_details]" slot-scope="row">
          <b-button size="sm" @click="row.toggleDetails" variant="primary">Edit</b-button>
        </template>
      </b-table>
    </div>
  </div>
</template>
<script>
import { LIST_USER } from "./../store/mutation-type";
export default {
  name: "Home",
  data() {
    return {
      fields: [
        {
          key: "id",
          label: "ID ne"
        },
        {
          key: "full_name",
          label: "Full name"
        },
        {
          key: "show_details",
          label: "View detail"
        }
      ]
    };
  },
  metaInfo: {
    title: "aaaaaaaaaaaaaaaa",
    titleTemplate: "%s - haong.com!",
    meta: [
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "description", content: "I have things here on my site." }
    ]
  },
  computed: {
    items() {
      return this.$store.getters.listUser;
    }
  },
  mounted() {
    // this.search();
  },
  methods: {
    search() {
      this.$store
        .dispatch(LIST_USER)
        .then(rep => {})
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>

