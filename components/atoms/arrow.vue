<template>
    <div :class="'arrow-a ' + direction" />
</template>

<script lang="ts">
import 'reflect-metadata'
import { Vue, Component, Prop } from 'nuxt-property-decorator'

@Component({
})
class upArrow extends Vue{
  @Prop() direction : 'up' | 'down' | undefined
}
export default upArrow
</script>

<style>
  .arrow-a {
    border: solid black;
    border-width: 0 3px 3px 0;
    display: inline-block;
    padding: 3px;
  }
  .up {
    transform: rotate(-135deg);
    -webkit-transform: rotate(-135deg);
  }
  .down {
    transform: rotate(45deg);
    -webkit-transform: rotate(45deg);
  }
</style>
