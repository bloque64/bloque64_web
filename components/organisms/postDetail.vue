<template>
  <b-container>
    <div v-html="renderedText"> </div>
    <footerBarPost
      :numbersBLQ="post.pending_token"
      :votesNumber="post.upvotes"
      :commentsNumber="post.comments_number"
    />
  </b-container>
</template>

<script lang="ts">
import 'reflect-metadata'
import { Vue, Component, Prop } from 'vue-property-decorator'
import detailPostStore from '~/store/modules/detail_post_store'
import footerBarPost from '~/components/molecules/footerBarPost.vue'
import postModel from '~/models/postModel'
import { componentsContainer } from '~/utils/inversify.config'
import { IParserFullText,
         IRenderCleanText,
         IStringify,
         TYPES
        } from '~/utils/interfaces'
@Component({
  components: {
    footerBarPost
  }
})
class postDetail extends Vue {
  parser = componentsContainer.get<IParserFullText>(TYPES.IParserFullText)
  sanitizer = componentsContainer.get<IRenderCleanText>(TYPES.IRenderCleanText)
  stringifier =  componentsContainer.get<IStringify>(TYPES.IStringify)
  created () {
    
  }

  get post() : postModel {
    return detailPostStore.postInfo
  }

  get renderedText() : string {
    if (this.post !== null)
    return this.stringifier.stringifyFullContent(this.parser.parseFullText(this.post.body || ''))
    return ''
  }
}

export default postDetail
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
