<template>
  <!--
      <div class="post-picture-thumbnail"></div>
      <div class="summary_title">{{ title }}</div>
      <div class="summary_headlines">{{ headline }} </div>
      -->

  <div class="grid-container">
    <div class="item1">
      {{ date }} - by @{{ author }} - {{ main_tag }}
    </div>
    <div class="item2" />
    <div class="item3">
      <img src={{ url_img_list[0] }}>
    </div>
    <div class="item4">
      {{ title }} <br><br> {{ introductory_text }}
    </div>
    <div class="item5">
      up | down / {{ upvotes }} BLQ   / {{ upvotes }} votos / {{ comments_number }} comments
    </div>
    <div class="item6" />
  </div>
</template>

<script lang = 'ts'>
// import postModel from '~/models/postModel'

// Component that defines a post
export default {
  name: 'PostSummary', // this is the name of the component
  // props: ['author', 'title', 'authorperm', 'headline', 'text', ''] // The post properties.
  props: {
    comments_number: Number,
    upvotes: Number,
    title: String,
    authorperm: String,
    introductory_text: String,
    permlink: String,
    url_img_list: Array,
    author: String,
    tags: Array,
    external_links: Array,
    mentioned_users: Array,
    main_tag: String,
    date: Date
  }
}
</script>
<style>

.post-summary {

}

.summary_title {

  margin: 2px;
  padding: 10px;
  background-color:gray;

}

.summary_headlines {
  margin: 2px;
  padding: 2px;
  background-color: white;

}

.grid-container {
  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 2px;
  background-color: white;
  padding-bottom: 10px;
  padding-top: 10px;
  width: 1000px;
  margin: 0px auto;
  border-bottom-style: dotted;
  border-width: 1px;

}

.item1 {

  font: normal 12px American Typewriter;
  background-color: white;
}

.item2 {

  font: normal 12px American Typewriter;
  background-color: white;

}

.item3 {

  font: normal 12px American Typewriter;
  background-color: white;
  padding-top: 5px;

}

.item4 {

  font: normal 12px American Typewriter;
  background-color: white;

}

.item5 {

  font: normal 12px American Typewriter;
  background-color: white;

}

.item6 {

  font: normal 12px American Typewriter;
  background-color: white;

}

</style>
