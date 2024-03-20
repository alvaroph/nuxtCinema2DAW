<template>
    <div>
        <div class="card" style="width: 18rem;">
        <img :src="datosSesion.id_pelicula.poster"  class="card-img-top":alt="datosSesion.id_pelicula.descripcion">
        <div class="card-body">
            <h5>{{ datosSesion.id_pelicula.titulo }}</h5>
            <hp>{{ datosSesion.dia_semana }},  {{ datosSesion.dia}} de {{datosSesion.mes }}</hp>
            <hp>{{ datosSesion.hora }} horas</hp>
            <p>{{ datosSesion.id_pelicula.descripcion }}</p>
            <p>Edad recomendada: {{ datosSesion.id_pelicula.edad_recomendada }}</p>
            <slot></slot>
        </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['datosSesion']
    }
</script>

<style lang="scss" scoped>

</style>