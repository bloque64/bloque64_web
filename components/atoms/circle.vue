<template>
  <div class= "circle-a">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import 'reflect-metadata'
import { Vue, Component } from 'nuxt-property-decorator'

@Component({
})
class circleA extends Vue{
}
export default circleA
</script>

<style>
  .circle-a {
    background: inherit;
    border-radius: 50px;
    border: solid black;
    width: 23px;
    height: 23px;
    position: relative;
  }
  .circle-a .arrow-a{
    position: absolute;
    right: 4px;
    top: 5px;
  } 
</style>
