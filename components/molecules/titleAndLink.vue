<template class="summary_title">
  <nuxt-link :to="'/post_view/' + permlink" class="link">
    <div @click="peekPost()">
      {{ title }}
    </div>
  </nuxt-link>
</template>

<script lang="ts">
import { Component, Vue, Emit, Prop } from "nuxt-property-decorator"
import detailPostStore from '~/store/modules/detail_post_store'

@Component({
})
export default class titleAndLink extends Vue {
  @Prop() permlink: string | undefined
  @Prop() author : string | undefined
  @Prop() title : string | undefined

  @Emit()
  peekPost () {
    if (this.permlink && this.author) {
      console.log('en el titleAndLink ', this.author, this.permlink)
      detailPostStore.get_aditional_post_details({ author: this.author, permlink: this.permlink })
    }
  }
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
