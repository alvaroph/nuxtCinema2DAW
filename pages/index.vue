<template>
    <div>
        <CobaGraph />
        <h1>Cinema Pedralbes </h1>
        <div class="container">
            <div v-for="sesion in sesiones" :key="sesion.id_sesion">
                <FichaSesion :datosSesion="sesion">
                    <nuxt-link class="btn btn-primary" :to="'compra/'+sesion.id_sesion">Comprar entradas</nuxt-link>           
               
                </FichaSesion>
            </div>
        </div>
    </div>
</template>

<script setup>
     const { data:sesiones, pending, error, refresh }  = await useFetch('https://alvaro.daw.inspedralbes.cat/api.php/records/SESION?join=PELICULA',{
        transform: (products) => products.records,
     });
       
    
</script>

<style scoped>
.btn-entradas {
    display: inline-block;
    font-size: 20px;
    padding: 15px 30px;
    color: #fff;
    background-color: #f60;
    border: none;
    border-radius: 5px;
    text-align: center;
    text-decoration: none;
    transition: background-color 0.3s ease;
}

.btn-entradas:hover {
    background-color: #e55;
}
    .container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    }
    .sesion {
    flex: 0 0 calc(33.3333% - 10px);
    margin: 5px;
    padding: 10px;
    border: 1px solid #000;
    box-sizing: border-box;
    }
    .sesion img {
    width: 100%;
    height: auto;
    }
</style>