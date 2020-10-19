<template>
		<div class="footer-basic-centered">

			<p class="footer-links">
				<a><router-link to='/'>Portada</router-link></a>
				·
				<a href='https://hive.blog@bloque64'>Blog</a>
				.
				<a><router-link to='/nosotros'>Nosotros</router-link></a>
				·
				<a><router-link to='/publicidad'>Nosotros</router-link></a>
				·
				<a><router-link to='/contacto'>Contacto</router-link></a>
			</p> 

			<p class="footer-company-name">Bloque64 Inc. &copy; 2020</p>

		</div>
</template>

<script>

export default {
  name: 'footer-panel',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


.footer-basic-centered{
	background-color: #D2D2D2;
	box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.12);
	box-sizing: border-box;
	width: 100%;
	text-align: center;
	font: normal 14px American Typewriter;

	padding: 10px;
	margin-top: 20px;
}

.footer-basic-centered .footer-company-name{
	color:  #black;
	font-size: 14px;
	margin: 0;
}

.footer-basic-centered .footer-links{
	list-style: none;
	font-weight: bold;
	color:  #black;
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



