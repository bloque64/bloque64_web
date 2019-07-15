<template>
  <div>
    <h1>{{ category }}</h1>
    {{ posts }}
></post-summary>
  </div>
</template>

<script>

//import ScottApi from '@/services/api/scott' 

// https://scot-api.steem-engine.com/get_discussions_by_trending?token=BLQ&limit=20&tag=bloque64

import axios from "axios"

export default {
  name: 'PostList', 
  props: ["category", "sort_by"],

  data() {

    return {
      loading: true,
      posts: []

    }
  },

  created() {

    axios
      .get('https://scot-api.steem-engine.com/get_discussions_by_trending?token=BLQ&limit=20&tag=bloque64')
      .then(response => {
        this.posts = response.data
      })
      .catch(error => {
        console.log(error)
        this.errored = true
      })
      .finally(() => this.loading = false)
  
  }

}
</script>
<style>
</style>