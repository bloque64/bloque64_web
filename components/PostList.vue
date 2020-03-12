<template>
  <div>
    <div v-for="post in posts" :key="post.authorperm">
      {{ post.title }}
      <PostSummary :post="post" />
    </div>
  </div>
</template>

<script lang = "ts">
import 'reflect-metadata'
import { Vue, Component } from 'vue-property-decorator'
import discussionStore from '../store/modules/discussions_store'
import postModel from '../models/postModel'
import PostSummary from '~/components/PostSummary.vue'

@Component({
  components: {
    PostSummary
  }
})
class PostList extends Vue {
  get posts () : postModel[] {
    return discussionStore.discussionList
  }
}

export default PostList
</script>

<style>
</style>
