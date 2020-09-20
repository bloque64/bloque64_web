<template>
  <b-container>
    <editor-component
    :text="renderedText"
    :editor-options="editorOptions"
    />
    <footerBarPost
      :numbers-blq="post.pending_token"
      :votes-number="post.upvotes"
      :comments-number="post.comments_number"
    />
  </b-container>
</template>

<script lang="ts">
import 'reflect-metadata'
import { Vue, Component, Prop } from 'vue-property-decorator'
import detailPostStore from '~/store/modules/detail_post_store'
import footerBarPost from '~/components/molecules/footerBarPost.vue'
import editorComponent from '~/components/molecules/editorComponent.vue'
import postModel from '~/models/postModel'
import { componentsContainer } from '~/utils/inversify.config'
import { IParserFullText,
         IRenderCleanText,
         IStringify,
         TYPES
        } from '~/utils/interfaces'
@Component({
  components: {
    footerBarPost,
    editorComponent
  }
})
class postDetail extends Vue {
  parser = componentsContainer.get<IParserFullText>(TYPES.IParserFullText)
  sanitizer = componentsContainer.get<IRenderCleanText>(TYPES.IRenderCleanText)
  stringifier =  componentsContainer.get<IStringify>(TYPES.IStringify)
  editorOptions = {
        toolbar: false,
        disableEditing: true
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
