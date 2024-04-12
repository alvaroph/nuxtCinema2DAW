<template>
    <div class="container">
        <h1>Confirmar la compra</h1>
        <p>Por favor, confirme la compra de las siguientes butacas:</p>
        <div class="row">
            <div class="col-md-4">
                <fichaSesion :datosSesion="sesion"></fichaSesion>
            </div>
            <div class="col-md-4">
                <ResumenCompra :seleccion="seleccion"></ResumenCompra>
            </div>
            <div class="col-md-4">
                <FormularioDatos></FormularioDatos>
            </div>
        </div>
        
      
        <button @click="compra()" class="btn btn-warning">Confirmar Compra</button>
    </div>
</template>

<script>
   import {useCompraStore} from '../store/compra.js'
    export default {
        data() {
            return {
                sesion: {},
                seleccion: []
            }
        },
        created(){
            const store = useCompraStore();
            this.sesion = store.sesion;
            this.seleccion = store.seleccion;           
        },
        methods: {
            compra(){   
                console.log(this.seleccion)
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>