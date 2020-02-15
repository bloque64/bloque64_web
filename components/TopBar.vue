<template>
  <div class="top-bar">
  17.07.2019
  </div>
</template>

<script>

export default {
  name: 'top-bar',
  props: {
    msg: String
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
