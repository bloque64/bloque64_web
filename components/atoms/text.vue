<template>
  <div class = "text-style">
      {{ text }}
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "nuxt-property-decorator"

@Component({})
export default class textA extends Vue {
    @Prop() text : string | undefined
}
</script>

<style>
  .text-style {
    font: normal 12px American Typewriter;
    background-color: white;
  }

</style>
