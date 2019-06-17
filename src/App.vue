/ App.vue

<template>
  <div id="app">
    <nav>
        <ul class="topnav">
          <!-- <li><router-link to='/'><img src=./assets/bloque64_logo_35x35_no_circle.png></router-link></li> -->
          <li><router-link to='/'><img src=./assets/bloque64_logo_35x35_no_circle.png></router-link></li>
          <li><a><router-link to='/'>Política</router-link></a></li>
           <li><a><router-link to='/'>Economia</router-link></a></li>
           <li><a><router-link to='/'>Sociedad</router-link></a></li>
           <li><a><router-link to='/'>Musica</router-link></a></li>
           <li><a><router-link to='/'>Deportes</router-link></a></li>
           <li><a><router-link to='/'>Tecnología</router-link></a></li>
          <li class="right"><a><router-link to='/register'>Registro</router-link></a></li>
          <li class="right"><a> <router-link to='/login'>Login</router-link></a></li>
        </ul>
    </nav>
    <router-view />
    
  </div>
  <footer-basic-centered></>
</template>

<script>
export default {
}
</script>

<style>

body {margin: 1;}

ul.topnav li a:hover:not(.active) {background-color: #073C51;}

ul.topnav li a.active {background-color: #073C51;}

ul.topnav li.right {float: right;}

@media screen and (max-width: 600px) {
  ul.topnav li.right, 
  ul.topnav li {float: none;}
}

ul.topnav {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #0A5574;
  font: 14px arial, sans-serif;
}

ul.topnav li {float: left;}

ul.topnav li a {
  display: block;
  color: white;
  text-align: center;
  vertical-align: middle;
  padding: 7px 7px;
  text-decoration: none;
}

ul.topnav li a:hover:not(.active) {background-color: #073C51;}


</style>
