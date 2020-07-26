<template>
  <div>
    <div>
      {{ text[1] }}
    </div>
  </div>
</template>

<script lang="ts">
import 'reflect-metadata'
import { Vue, Component, Prop } from 'nuxt-property-decorator'
import { Marked } from '@ts-stack/markdown'

@Component
class lead extends Vue {
    @Prop() text: [string, string] = ['', '']
    created () {
      if (this.text[0] === 'intro' || this.text[0] === 'final') {
        this.text[1] = Marked.parse('<p> <div class = "text-justify">' + this.text[1] + '</div> </p>')
      } else if (this.text[0] === 'body') {
        const splittedBodyText = this.text[1].split('\n')
        this.text[1] = ''
        splittedBodyText.forEach((paragraph) => {
          this.text[1] += Marked.parse('<p> <div class = "text-justify">' + paragraph + '</div> </p>')
        })
      }
    }
}

export default lead
</script>

<style>

</style>
