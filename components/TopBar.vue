<template>
  <b-navbar toggleable="md" variant="light">
    <b-container>
      <b-navbar-toggle target="navbar-collapse" />
      <b-collapse id="nav_collapse" is-nav>
        <b-col>
          <b-nav-text>
            Aquí tamos
          </b-nav-text>
        </b-col>
        <b-col>
          <b-nav-item-dropdown right>
            <b-dropdown-item href="#">EN</b-dropdown-item>
            <b-dropdown-item href="#">ES</b-dropdown-item>
            <b-dropdown-item href="#">RU</b-dropdown-item>
            <b-dropdown-item href="#">FA</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-col>
        <b-col>
          <b-navbar-nav>
            <b-nav-item> Cortarse las venas </b-nav-item>
            <b-nav-item> Tirarse de un puente </b-nav-item>
          </b-navbar-nav>
        </b-col>
      </b-collapse>
    </b-container>
  </b-navbar>
</template>

<script>

export default {
  name: 'TopBar',
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

.top-bar {

  margin: 0px;
  padding: 10px;
  overflow: hidden;
  background-color: white;
  font: normal 14px American Typewriter;
  border-style: dotted;
  border-left: 0px;
  border-right: 0px;
  border-top: 0px;
  border-botton: 1px;
  border-width: 1px;

}

</style>
