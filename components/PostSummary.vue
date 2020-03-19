<template>
  <div>
    <b-head>
      <b-card-title>
        {{ post.title }}
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
            {{ post.introductory_text }}
          </b-card-text>
        </b-col>
      </b-row>
      <b-card-footer>
        up | down / {{ post.upvotes }} BLQ   / {{ post.upvotes }} votos / {{ post.comments_number }} comments
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
  position: relative;
  text-align: right;
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
