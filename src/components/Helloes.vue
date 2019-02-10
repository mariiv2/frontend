<template>
    <div>
        <p v-for="msg in helloes">
            {{msg.message}}
        </p>
    </div>
</template>

<script>
    import api from '../Api';

    // app Vue instance
    const Helloes = {
        name: 'Helloes',
        props: {
            activeUser: Object
        },

        // app initial state
        data: function() {
            return {
                helloes: []
            }
        },

        mounted() {
            api.getAll()
                .then(response => {
                this.$log.debug("Data loaded: ", response.data)
            this.helloes = response.data
        })
        .catch(error => {
                this.$log.debug(error)
        })}
    }
    export default Helloes
</script>

<style scoped>

</style>