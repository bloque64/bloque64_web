<template>
  <div />
</template>

<script lang="ts">
import 'reflect-metadata'
import { Vue, Component, Prop } from 'nuxt-property-decorator'

@Component
class closedBody extends Vue {
    @Prop() urlImg: string | undefined
    @Prop() finishText: string |undefined
}

export default closedBody
</script>

<style>

</style>
