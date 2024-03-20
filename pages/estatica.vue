<template>
    <div>
        <h1>Es una pagina estatica</h1>
        {{ msg }}
    </div>
</template>

<script>
    definePageMeta({ layout: 'admin' });
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