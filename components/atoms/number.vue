<template>
  <div class="number-style" >
      {{ number }}
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    props : {
        number: Number
    }
 })
</script>

<style>
  .number-style {
    font: normal 12px American Typewriter;
    background-color: white;
  }

</style>