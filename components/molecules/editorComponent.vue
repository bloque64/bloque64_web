<template>
  <medium-editor
    class="text-distribution"
    :options="editorOptions"
    :prefill="'<div class=' +
    style +
    '>' + text + '</div>'"
  />
</template>

<script lang="ts">
import { Component, Vue, Prop } from "nuxt-property-decorator"

@Component({})
export default class editorComponent extends Vue {
    @Prop() editorOptions: any
    @Prop() text: string | undefined
    style = 'text-distribution'
}
</script>

<style>
.text-distribution {
    text-justify: distribute;
    text-align: justify;
    font: normal 20px American Typewriter;
}
.img-style {
    
} 
</style>
