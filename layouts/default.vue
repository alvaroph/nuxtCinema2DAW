<template>
    <div>
        <nav class="navbar ">
        <div class="container">
            <a class="navbar-brand" href="/">
            <img src="https://www.institutpedralbes.cat/wp-content/uploads/2021/05/logo.jpg" alt="InstituPedralbes" height="60">
            </a>
        </div>
        </nav>
          <slot />
    </div>
  </template>
  
  <style scoped>

        .navbar {
            background-color: rgb(255, 255, 255);
            text-align: center;
            padding: 20px;
        }

</style>