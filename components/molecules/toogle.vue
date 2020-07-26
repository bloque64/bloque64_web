<template>
  <div>
    <font-awesome-icon
       v-b-toggle.my-sidebar
       :icon="{ prefix: 'fas', iconName: 'list' }"
       class="list"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator"

@Component({})
export default class toogle extends Vue {}
</script>

<style>
</style>
