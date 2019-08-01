<template>
    <div class="top-bar m-3 row">

      <span class="col-md-2 col-4 mt-1 pt-2">
          17.07.2019
      </span>
      <div class="col-12 col-md-8 text-center mt-2">
          <b-dropdown text="ES" variant="flat" size="sm" class="lang">
              <b-dropdown-item href="#"  v-for="language in lang">
                {{language}}
              </b-dropdown-item>
          </b-dropdown>
          <span> - </span>
          <ul class="countries">
            <li v-for="country in countries" > 
                <a href="#!">
                  {{country}}
                </a>
            </li>
          </ul>
          <b-dropdown text="ES" variant="flat" size="sm" class="country-menu">
              <template slot="button-content"><i class="fas fa-bars"></i></template>
              <b-dropdown-item href="#"  v-for="country in countries">
                  {{country}}
              </b-dropdown-item>
          </b-dropdown>
      </div>
      <div class="col-md-2 col-4 text-right mt-2 top-bar-iconsRight">
          <a href="#"><i class="far fa-edit"></i></a>
          <a href="#"><i class="far fa-user-circle"></i></a>
          <a href="#"><i class="fas fa-bars"></i></a>
        
          
      </div>
      


    
    </div>
</template>

<script>

export default {
  name: 'top-bar',
  props: {
    msg: String
  },
  data() {

    return {
     
      lang: ['ES','EN','FR','RU','AB'],
      countries: ['VE','MX','AR','UR','CO','CL','EC'],

    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>




</style>



