<template class="summary_title">
  <nuxt-link :to="{ name: 'author-permlink', params: { author : '@' + author, permlink } }"
  class="link"
  >
    {{ title }}
  </nuxt-link>
</template>

<script lang="ts">
import { Component, Vue, Emit, Prop } from "nuxt-property-decorator"

@Component({
})
export default class titleAndLink extends Vue {
  @Prop() permlink: string | undefined
  @Prop() author : string | undefined
  @Prop() title : string | undefined

}
</script>

<style>
  .summary_title {
    font-weight: bold;
    margin-left: -1%;
    padding: 10px;
    background-color:white;
    font-family: '../assets/fonts/ufonts.com_american-typewriter-bold.woff';
    font: normal 180% American Typewriter;
    text-decoration: none;
 }

  .summary_title a {
    color: black;
 }

  .summary_title a:link {
    text-decoration: none;
 }

</style>
