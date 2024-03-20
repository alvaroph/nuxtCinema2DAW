<template>
    <div>

        <h2>Resumen de compra</h2>
        <p v-for="butaca in seleccion" :key="butaca">Butaca {{butaca}}: Fila {{Math.trunc(butaca/10)}}-asiento {{butaca%10}}     x 10€ </p>
        <p>Total: {{seleccion.length*10}}€</p>
    </div>
</template>

<script>
    export default {
        props: ['seleccion']
    }
</script>

<style lang="scss" scoped>

</style>