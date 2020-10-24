<template>
    <div class="top-bar">
		{{ get_date() }}
     <nav><a><router-link to='/login'><img src="../../src/assets/icons/account_icon.png"></router-link></a></nav>
    <nav><a><router-link to='/new_post'><img src="../../src/assets/icons/new_post_icon_30.png"></router-link></a></nav>
    </div>
</template>

<script>

export default {
  name: 'top-bar',
  props: {
    msg: String
  },

   methods: {

            get_date: function() {
              var today = new Date();
              var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
              return(date);
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



