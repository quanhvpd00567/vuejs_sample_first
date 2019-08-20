<template>
    <div id="home">
        <b-table striped hover :items="items" :fields="fields"></b-table>
    </div>
</template>
<script>
export default {
     name: 'Home',
     head () {
        return {
            title: "My page title",
            meta: [
                // { name: ‘description’, content: ‘My page description’ }
            ]
           
        }
    },
    data(){
        return {
            fields: [
                {
                    key: 'id',
                    label: 'ID ne'
                },
                {
                    key: 'title',
                    label: 'Title ne'
                }
        
            ],
            items: []
        }
    },
    created(){
        this.search()
    },
    methods: {
         search(){
            this.$http.get('posts')
            .then((response) => {
                this.items = response.data
            }).catch((e) => {
                console.error(e)
            })
        }
    }
}
</script>

