<template>
  <div>
    <h1>Category</h1>

    <div v-for="post in posts" :key="post.authorperm">
      <!-- {{ post.authorperm }} /> -->
      <PostSummary />
    </div>
  </div>
</template>

<script lang = "ts">

import { Vue, Component } from 'vue-property-decorator'
import discussionStore from '../store/modules/discussions_store'
import PostSummary from '~/components/PostSummary.vue'
import postModel from '~/models/postModel'

@Component({
  components: {
    PostSummary
  },
  middleware: 'discussion_load'
})
class PostList extends Vue {
  storeService = discussionStore
  posts : postModel[] = []
  setDiscussionPost () {
    this.posts = this.storeService.context.getters.discussion
  }
}

/* export default {
  name: 'PostList',
  components: {
    'post-summary': PostSummary
  },
  props: ['category', 'sort_by'],

  async fetch ({ store }: any) {
    await store.dispatch('get_by_trending', {})
  },

  data () {
    return {
      loading: true,
      posts: []

    }
  },

  computed: {
    ...mapState(['discussionList']),
    get_posts () {
      // eslint-disable-next-line no-console
      console.log('discussion_list ' + this.discussionList)
      return this.discussionList
    }
  }

  /* created () {
     axios
      .get('https://scot-api.steem-engine.com/get_discussions_by_trending?token=BLQ&limit=20&tag=bloque64')
      .then((response) => {
        this.posts = response.data
      })
      .catch((error) => {
        console.log(error)
        this.errored = true
      })
      // eslint-disable-next-line no-return-assign
      .finally(() => this.loading = false)
  }
} */
export default PostList
</script>

<style>
</style>
