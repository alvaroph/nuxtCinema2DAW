<template>
    <form>
        <div class="form-group">
            <label for="nombre">Nombre</label>
            <input type="text" class="form-control" id="nombre" v-model="nombre">
        </div>
        <div class="form-group">
            <label for="apellidos">Apellidos</label>
            <input type="text" class="form-control" id="apellidos" v-model="apellidos">
        </div>
        <div class="form-group">
            <label for="correo">Correo</label>
            <input type="email" class="form-control" id="correo" v-model="correo">
        </div>
        <button type="submit" class="btn btn-primary">Enviar</button>
    </form>
</template>

<script>
export default {
    data() {
        return {
            nombre: '',
            apellidos: '',
            correo: ''
        };
    }
};
</script>

<style>
/* Estilos de Bootstrap */
</style>