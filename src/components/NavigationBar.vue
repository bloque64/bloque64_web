<template>
    <nav>
        <ul class="topnav">
          <!-- <li><router-link to='/'><img src=./assets/bloque64_logo_40x40.png></router-link></li> -->
          <li><router-link to='/'><img src="/assets/bloque64_logo_40x40.png"></router-link></li> 

          <li><router-link to='/'>Noticias</router-link></li>
          <li><router-link to='/deportes'>Deportes</router-link></li>
          <li><router-link to='/politica'>Politica</router-link></li>
          <li><router-link to='/economia'>Economia</router-link></li>
          <li><router-link to='/sucesos'>Sucesos</router-link></li>
          <li><router-link to='/opinion'>Opinión</router-link></li>
          <li><router-link to='/blockchain'>Blockchain</router-link></li>





          <!--

          <li><router-link to='/politica'>Politica</router-link></li>
          <li><router-link to='/economia'>Economia</router-link></li>
          <li><router-link to='/sociedad'>Sociedad</router-link></li>
          <li><router-link to='/musica'>Música</router-link></li>
          <li><router-link to='/deportes'>Deportes</router-link></li>
          <li><router-link to='/tecnologia'>Tecnología</router-link></li>
          <li><router-link to='/ciencia'>Ciencia</router-link></li>
          <li><router-link to='/salud'>Salud</router-link></li>
          <li><router-link to='/opinion'>Opinión</router-link></li>
          <li><router-link to='/blockchain'>Blockchain</router-link></li>

          -->
        </ul>
    </nav>
</template>

<script>

export default {
  name: 'navigation-bar',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>




</style>



