<template>
    <div>
        <div class="cabecera">
        <img src="https://www.institutpedralbes.cat/wp-content/uploads/2021/05/logo.jpg" alt="Descripción de la imagen">
    </div>
          <slot />
    </div>
  </template>
  
  <style scoped>

        .cabecera {
            background-color: red;
            text-align: center;
            padding: 20px;
        }

</style>