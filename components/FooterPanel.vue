<template>
  <div class="footer-basic-centered">
    <div class="footer-links">
      <!-- This will give a VDOM warning in the browser console because the routers page are not configured yet. -->
      <a><nuxt-link to="/">Portada</nuxt-link></a>
      ·
      <a href="https://hive.blog/@bloque64">Blog</a>
      .
      <a><nuxt-link to="/nosotros">Nosotros</nuxt-link></a>
      ·
      <a><nuxt-link to="/contacto">Contacto</nuxt-link></a>
    </div>

    <div class="footer-company-name">
      <p> Bloque64 Inc. &copy; 2020 </p>
    <!--  -->
    </div>
  </div>
</template>

<script>

export default {
  name: 'FooterPanel',
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
    color: black;
    font-size: 14px;
    margin: 0;
}

.footer-basic-centered .footer-links{
    list-style: none;
    font-weight: bold;
    color:  black;
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
