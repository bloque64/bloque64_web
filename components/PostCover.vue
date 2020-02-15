<template>
  <div class="main">
    <div class="main_post">
      Text
    </div>
    <div class="main2_post" />
    <div class="main3_post" />
  </div>
</template>

<script>

// import ScottApi from '@/services/api/scott'

// https://scot-api.steem-engine.com/get_discussions_by_trending?token=BLQ&limit=20&tag=bloque64

import axios from 'axios'
import PostSummary from '~/components/PostSummary.vue'

export default {
  name: 'PostCover',
  components: {
    // eslint-disable-next-line vue/no-unused-components
    'post-summary': PostSummary

  },
  props: ['category', 'sort_by'],

  data () {
    return {
      loading: true,
      posts: []

    }
  },

  created () {
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

}
</script>
<style>

.main {
  width: 1000px;
  margin: 10px auto;
  border: 2px solid black;
}
.main_post {
  width: 600px;
  height: 300px;
  border: 1px solid blue;
  box-sizing: border-box;
  margin: 10px auto;
}
.main2_post {
  width: 300px;
  height: 150px;
  padding: 50px;
  border: 1px solid red;
  box-sizing: border-box;
}
.main3_post {
  width: 300px;
  height: 150px;
  padding: 50px;
  border: 1px solid red;
  box-sizing: border-box;
}
</style>

</script>
<style>
</style>
