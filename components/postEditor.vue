<template>
  <div>
    <medium-editor :content="content" :options="options" />
  </div>
</template>

<script lang = "ts">
import 'reflect-metadata'
import { Vue, Component } from 'nuxt-property-decorator'

@Component
class postEditor extends Vue {
    content :string = ''
    options = {}
}
export default postEditor
</script>

<style>

</style>
