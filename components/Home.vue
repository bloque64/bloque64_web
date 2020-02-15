<template>
  <div class="main">
    <div class="main_post">
      Text
    </div>
    <div class="main2_post" />
    <div class="main3_post" />
  </div>
</template>

<script>
export default {
  name: 'Home' // this is the name of the component
}
</script>
<style>

.main {

  width: 1000px;
  margin: 10px auto;
  border: 2px solid black;

}

.main_post {
  width: 600px;
  height: 300px;
  border: 1px solid blue;
  box-sizing: border-box;
  margin: 10px auto;
}

.main2_post {
  width: 300px;
  height: 150px;
  padding: 50px;
  border: 1px solid red;
  box-sizing: border-box;
}

.main3_post {
  width: 300px;
  height: 150px;
  padding: 50px;
  border: 1px solid red;
  box-sizing: border-box;
}

</style>
