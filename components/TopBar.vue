<template>
  <div class="top-bar">
    <b-navbar toggleable="md" variant="light">
      <b-container fluid>
        <b-col class="ml-n4">
          <b-nav-text style="letter-spacing: -0.113em;">
            {{ peek_date() }}
          </b-nav-text>
        </b-col>
        <b-col>
          <!-- <b-nav-form>
            Cosas se verán mateo
          </b-nav-form> -->
        </b-col>
        <b-col offset="8" align-self="end">
          <font-awesome-icon :icon="{ prefix: 'fas', iconName: 'pen-square' }" />
          <font-awesome-icon :icon="{ prefix: 'fas', iconName: 'user-circle'}" />
          <font-awesome-icon :icon="{ prefix: 'fas', iconName: 'list' }" />
        </b-col>
      </b-container>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: 'TopBar',
  props: {
    msg: {
      type: String,
      default: 'No existe el éxito, sino la belleza. Nosotros la buscamos, y la compartimos con usted'
    }
  },
  data () {
    return {
      value: '',
      context: null
    }
  },
  methods: {
    peek_date () {
      const dt = new Date()
      const dtf = new Intl.DateTimeFormat('sp', { year: 'numeric', month: 'short', day: '2-digit' })
      const [{ value: mo },, { value: da },, { value: ye }] = dtf.formatToParts(dt)
      return `${da} ${mo} ${ye}`
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.top-bar {

  margin: 0px;
  padding: 0px;
  overflow: hidden;
  background-color: white;
  font: normal 20px American Typewriter;
  border-style: solid;
  border-left: 0px;
  border-right: 0px;
  border-top: 0px;
  border-width: 1px;

}

</style>
