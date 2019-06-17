/ App.vue

<template>
  <div id="app">
    <center><img src=./assets/bloque64_iso.png></center>
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
          <li><a><router-link to='/'>Ciencia</router-link></a></li>
          <li><a><router-link to='/'>Salud</router-link></a></li>
          <li><a><router-link to='/'>Blockchain</router-link></a></li>
            
          <li class="right"><a><router-link to='/register'>Registro</router-link></a></li>
          <li class="right"><a> <router-link to='/login'>Login</router-link></a></li>
        </ul>
    </nav>
    <router-view />

    	<footer class="footer-basic-centered">

			<p class="footer-company-motto">El portal de noticias descentratralizado en castellano</p>

			<p class="footer-links">
				<a href="#">Portada</a>
				·
				<a href="#">Blog</a>
				·
				<a href="#">Sobre Nosotros</a>
				·
				<a href="#">FAQ</a>
				·
				<a href="#">Contacto</a>
			</p>

			<p class="footer-company-name">Bloque64 &copy; 2019</p>

		</footer>
 
  </div>


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

.footer-basic-centered{
	background-color: #073C51;
	box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.12);
	box-sizing: border-box;
	width: 100%;
	text-align: center;
	font: normal 13px sans-serif;

	padding: 45px;
	margin-top: 40px;
}

.footer-basic-centered .footer-company-motto{
	color:  #8d9093;
	font-size: 18px;
	margin: 0;
}

.footer-basic-centered .footer-company-name{
	color:  #8f9296;
	font-size: 14px;
	margin: 0;
}

.footer-basic-centered .footer-links{
	list-style: none;
	font-weight: bold;
	color:  #ffffff;
	padding: 35px 0 23px;
	margin: 0;
}

.footer-basic-centered .footer-links a{
	display:inline-block;
	text-decoration: none;
	color: inherit;
}

/* If you don't want the footer to be responsive, remove these media queries */

@media (max-width: 600px) {

	.footer-basic-centered{
		padding: 35px;
	}

	.footer-basic-centered .footer-company-motto{
		font-size: 18px;
	}

	.footer-basic-centered .footer-company-name{
		font-size: 12px;
	}

	.footer-basic-centered .footer-links{
		font-size: 14px;
		padding: 25px 0 20px;
	}

	.footer-basic-centered .footer-links a{
		line-height: 1.8;
	}
}


</style> 
