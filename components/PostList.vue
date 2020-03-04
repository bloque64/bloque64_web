<template>
  <div>
    <h1>{{ category }}</h1>

    <div v-for="post in posts" :key="post.authorperm">
      <!-- {{ post.authorperm }} /> -->
      <post-summary :title="post.title" :authorperm="post.authorperm" :author="post.author" />
    </div>
  </div>
</template>

<script lang = "ts">

// import ScottApi from '@/services/api/scott'

// https://scot-api.steem-engine.com/get_discussions_by_trending?token=BLQ&limit=20&tag=bloque64

// import axios from 'axios'

import { mapState } from 'vuex'
// import postModel from '~/models/postModel'
import PostSummary from '~/components/PostSummary.vue'

export default {
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
  } */
}
</script>

<style>
</style>
