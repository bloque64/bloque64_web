<template>
  <nav>
    <ul class="topnav">
      <!-- <li><router-link to='/'><img src=./assets/bloque64_logo_40x40.png></router-link></li> -->
      <!-- <li><router-link to='/'><img src=./assets/bloque64_logo_40x40.png></router-link></li> -->
      <li><a><router-link to="/politica">Politica</router-link></a></li>
      <li><a><router-link to="/economia">Economia</router-link></a></li>
      <li><a><router-link to="/sociedad">Sociedad</router-link></a></li>
      <li><a><router-link to="/musica">Música</router-link></a></li>
      <li><a><router-link to="/deportes">Deportes</router-link></a></li>
      <li><a><router-link to="/tecnologia">Tecnología</router-link></a></li>
      <li><a><router-link to="/ciencia">Ciencia</router-link></a></li>
      <li><a><router-link to="/salud">Salud</router-link></a></li>
      <li><a><router-link to="/opinion">Opinión</router-link></a></li>
      <li><a><router-link to="/blockchain">Blockchain</router-link></a></li>
    </ul>
  </nav>
</template>

<script>

export default {
  name: 'NavigationBar',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

ul.topnav li a:hover:not(.active) {background-color: #D2D2D2;}

ul.topnav li a.active {background-color: #D2D2D2;}

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
  background-color: #D2D2D2;
  font: normal 20px American Typewriter;
  text-align: center;
}

ul.topnav li {display: inline;}

ul.topnav li a {

  color: black;
  text-align: center;
  vertical-align: middle;
  padding: 7px 7px;
  text-decoration: none;
  display:inline-block;
}

ul.topnav li a:hover:not(.active) {background-color: #073C51;}

</style>
