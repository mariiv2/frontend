<template>
   <div id="app">
       <Helloes />
   </div>
</template>

<script>
    import Helloes from './components/Helloes'

    const app = {
        name: 'app',
        components: {
            Helloes
        },

        data: () => {
            return{

            }
        }
    }
    export default app
</script>

<style scoped>

</style>