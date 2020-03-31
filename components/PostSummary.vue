<template>
  <div class="post-summary">
    <b-head>
      <b-card-title>
        <nuxt-link to="/post_view">
          {{ post.title }}
        </nuxt-link>
      </b-card-title>
      <b-card-subtitle>
        {{ post.date }} - by @{{ post.author }} - {{ post.main_tag }}
      </b-card-subtitle>
    </b-head>
    <b-card class="mb-3">
      <b-row>
        <b-col md="3">
          <b-card-img :src="mainPicture" img-alt="Card image" img-left width="250px" />
        </b-col>
        <b-col md="9">
          <b-card-text>
            {{ post.introductory_text }}...
          </b-card-text>
        </b-col>
      </b-row>
      <b-card-footer>
        <b-card-img src="../assets/mockups/arrow_up.png" style="max-width:10px" />  {{ post.pending_token }} BLQ  {{ post.upvotes }} votos  <b-card-img src="../assets/mockups/talk_globe.png" style="max-width:20px" /> {{ post.comments_number }}
      </b-card-footer>
    </b-card>
  </div>
</template>

<script lang = 'ts'>
import 'reflect-metadata'
import { Vue, Component, Prop } from 'vue-property-decorator'
import postModel from '../models/postModel'

// Component that summarizes a post
@Component
class PostSummary extends Vue {
  @Prop() post: postModel | undefined
  mainPicture: String | undefined
  created () {
    if (this.post) {
      this.mainPicture = this.post.url_img_list[0]
    }
  }
}

export default PostSummary
</script>
<style>

.post-summary {
  font-family: "../assets/fonts/ufonts.com_american-typewriter.woff";
}

.summary_title {

  margin: 2px;
  padding: 10px;
  background-color:gray;
  font-family: '../assets/fonts/ufonts.com_american-typewriter-bold.woff';
  font-size:25px
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
  font-family: "../assets/fonts/ufonts.com_american-typewriter.woff";
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
