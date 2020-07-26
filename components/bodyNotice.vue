<template>
  <div />
</template>

<script lang="ts">
import 'reflect-metadata'
import { Vue, Component, Prop } from 'nuxt-property-decorator'

@Component
class bodyNotice extends Vue {
    @Prop() urlImg: string | undefined
    @Prop() bodyText: string | undefined
}

export default bodyNotice
</script>

<style>

</style>
