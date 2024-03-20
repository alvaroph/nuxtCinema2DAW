<template>
    <div>
        <h1>Es una pagina renderizada en el servidor, cambia?</h1>
        {{ msg }}
    </div>
</template>

<script>
    export default {
        data() {
            return {
                msg: 'Hola mundo'
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>