<template>
  <!--
      <div class="post-picture-thumbnail"></div>
      <div class="summary_title">{{ title }}</div>
      <div class="summary_headlines">{{ headline }} </div>
      -->

  <div class="grid-container">
    <div class="item1">
      {{ post.date }} - by @{{ post.author }} - {{ post.main_tag }}
    </div>
    <div class="item2" />
    <div class="item3">
      <img src={{ url_img_list[0] }}>
    </div>
    <div class="item4">
      {{ post.title }} <br><br> {{ post.introductory_text }}
    </div>
    <div class="item5">
      up | down / {{ post.upvotes }} BLQ   / {{ post.upvotes }} votos / {{ post.comments_number }} comments
    </div>
    <div class="item6" />
  </div>
</template>

<script lang = 'ts'>
import 'reflect-metadata'
import { Vue, Component, Prop } from 'vue-property-decorator'
import postModel from '~/models/postModel'

// Component that summarizes a post
@Component
class PostSummary extends Vue {
  @Prop() post: postModel | undefined
}
export default PostSummary
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
