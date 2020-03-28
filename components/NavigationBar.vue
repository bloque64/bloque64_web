<template>
  <nav>
    <ul class="topnav">
      <!-- <li><router-link to='/'><img src=./assets/bloque64_logo_40x40.png></router-link></li> -->
      <!-- <li><router-link to='/'><img src=./assets/bloque64_logo_40x40.png></router-link></li> -->
      <li><a><nuxt-link to="/politica">Politica</nuxt-link></a></li>
      <li><a><nuxt-link to="/economia">Economia</nuxt-link></a></li>
      <li><a><nuxt-link to="/sociedad">Sociedad</nuxt-link></a></li>
      <li><a><nuxt-link to="/musica">Música</nuxt-link></a></li>
      <li><a><nuxt-link to="/deportes">Deportes</nuxt-link></a></li>
      <li><a><nuxt-link to="/tecnologia">Tecnología</nuxt-link></a></li>
      <li><a><nuxt-link to="/ciencia">Ciencia</nuxt-link></a></li>
      <li><a><nuxt-link to="/salud">Salud</nuxt-link></a></li>
      <li><a><nuxt-link to="/opinion">Opinión</nuxt-link></a></li>
      <li><a><nuxt-link to="/blockchain">Blockchain</nuxt-link></a></li>
    </ul>
  </nav>
</template>

<script>

export default {
  name: 'NavigationBar',
  props: {
    msg: {
      type: String,
      default: 'No existe el éxito, sino la belleza. Nosotros la buscamos, y la compartimos con usted'
    }
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
