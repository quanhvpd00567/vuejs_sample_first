<template>
    <div id="home">
        <div v-if="items.length > 0">
            <b-table striped hover :items="items" :fields="fields">
                <template slot="[show_details]" slot-scope="row">
                    <b-button size="sm" @click="row.toggleDetails" variant="primary">
                        Edit
                    </b-button>
                </template>
            </b-table>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Home',
    metaInfo: {
      title: 'My Example App',
      titleTemplate: '%s - Yay!',
      meta: [
            {name: 'viewport', content: 'width=device-width, initial-scale=1'},
            {name: 'description', content: 'I have things here on my site.'}
        ]
    },
    data(){
        return {
            fields: [
                {
                    key: 'id',
                    label: 'ID ne'
                },
                {
                    key: 'full_name',
                    label: 'Full name'
                },
                {
                    key: 'show_details',
                    label: 'View detail'
                }
            ],
            items: []
        }
    },
    created(){
        // this.search()
    },
    methods: {
         search(){
            let config = {
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem('token')
                }
            }
            this.$http.get('users', config)
            .then((response) => {
                this.items = response.data.data
            }).catch((e) => {
                console.error(e)
            })
        }
    }
}
</script>

