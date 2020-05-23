<template>
  <div class="post-summary">
    <b-card class="mb-3" style="border: none;">
      <strong v-if="renderForPosition === 'first_view'">
        <b-card-title class="summary_title">
          <nuxt-link :to="'/post_view/' + post.permlink" class="link">
            <div @click="peekPost">
              <b>{{ post.title }}</b>
            </div>
          </nuxt-link>
        </b-card-title>
      </strong>
      <b-card-sub-title class="summary_headlines">
        {{ post.date }} - by @{{ post.author }} - {{ post.main_tag }}
      </b-card-sub-title>
      <b-row>
        <b-col :md="renderInfo[renderForPosition][0]">
          <b-card
            :img-src="mainPicture"
            img-alt="Card image"
            img-bottom
            :img-width="renderInfo[renderForPosition][2]"
          />
          <span v-if="renderForPosition === 'second_view'">
            <strong>
              <b-card-title class="summary_title">
                <nuxt-link :to="'/post_view/' + post.permlink" class="link">
                  <div @click="peekPost">
                    {{ post.title }}
                  </div>
                </nuxt-link>
              </b-card-title>
            </strong>
            <b-card-text
              :class="renderInfo[renderForPosition][3]"
            >
              {{ renderedIntroductoryText }}...
            </b-card-text>
          </span>
        </b-col>
        <b-col :md="renderInfo[renderForPosition][1]">
          <strong v-if="renderForPosition === 'third_view'">
            <b-card-title class="summary_title">
              <nuxt-link :to="'/post_view/' + post.permlink" class="link">
                <div @click="peekPost">
                  {{ post.title }}
                </div>
              </nuxt-link>
            </b-card-title>
          </strong>
          <b-card-text
            v-if="renderForPosition !== 'second_view'"
            :class="renderInfo[renderForPosition][3]"
          >
            {{ renderedIntroductoryText }}...
          </b-card-text>
        </b-col>
      </b-row>
      <b-card-footer>
        <span>
          <font-awesome-layers>
            <font-awesome-icon :icon="{ prefix: 'fas', iconName: 'circle-notch' }" />
            <font-awesome-icon :icon="{ prefix: 'fas', iconName: 'chevron-up' }" />
          </font-awesome-layers>
          <font-awesome-layers>
            <font-awesome-icon :icon="{ prefix: 'fas', iconName: 'circle-notch' }" />
            <font-awesome-icon :icon="{ prefix: 'fas', iconName: 'chevron-down' }" />
          </font-awesome-layers>
        </span>
        <span>
          {{ post.pending_token }} BLQ <font-awesome-icon :icon="{ prefix: 'fas', iconName: 'chevron-down' }" />
        </span>
        <span>
          {{ post.upvotes }} votos <font-awesome-icon :icon="{ prefix: 'fas', iconName: 'chevron-down' }" />
        </span>
        <span>
          <b-card-img src="../assets/mockups/talk_globe.png" style="max-width:20px" /> {{ post.comments_number }}
        </span>
      </b-card-footer>
    </b-card>
  </div>
</template>

<script lang = 'ts'>
import 'reflect-metadata'
import { Vue, Component, Prop, Emit } from 'nuxt-property-decorator'
import { Marked, Renderer } from '@ts-stack/markdown'
import postModel from '~/models/postModel'
import detailPostStore from '~/store/modules/detail_post_store'

Marked.setOptions({
  renderer: new Renderer(),
  gfm: true,
  tables: true,
  breaks: false,
  pedantic: false,
  sanitize: false,
  smartLists: true,
  smartypants: false
})
// Component that summarizes a post
@Component({
})
class PostSummary extends Vue {
  @Prop() post: postModel | undefined
  @Prop() renderForPosition: string | undefined
  renderedIntroductoryText: string | null = ''
  mainPicture: String | undefined
  renderInfo = {
    first_view: [9, 3, '600px', 'first-introductory-text', ''],
    second_view: [12, 0, '300px', 'second-introductory-text', 'second-view-container'],
    third_view: [3, 9, '250px', 'third-introductory-text', '']
  }

  created () {
    if (this.post) {
      this.mainPicture = this.post.url_img_list[0]
      const markdownToHtml = Marked.parse(this.post.introductory_text.toString())
      const parser = new DOMParser()
      const parsedHtml = parser.parseFromString(markdownToHtml, 'text/html')
      const links = parsedHtml.getElementsByTagName('a')
      if (!this.mainPicture) {
        this.mainPicture = parsedHtml.images[0].src
      }
      while (links[0]) {
        if (links[0].parentNode) {
          links[0].parentNode.removeChild(links[0])
        }
      }
      this.renderedIntroductoryText = parsedHtml.body.textContent
    }
  }

  @Emit()
  peekPost () {
    if (this.post) {
      detailPostStore.get_aditional_post_details(this.post)
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
  font-weight: bold;
  margin: 2px;
  padding: 10px;
  background-color:white;
  font-family: '../assets/fonts/ufonts.com_american-typewriter-bold.woff';
  text-decoration: none;
}

.summary_title a {
  color: black;
}

.summary_title a:link {
  text-decoration: none;
}

/* .summary_title a:visited {
}

.summary_title a:focus {
}

.summary_title a:hover {
}
 */
.summary_headlines {
  margin: 2px;
  padding: 2px;
  background-color: white;

}

.card {
  border: none;
}
.card-footer{
  background-color: white;
  border: none;
}

span + span {
    margin-left: 20px;
}

.first-introductory-text {
  margin-top: 35px;
  font: normal 23px American Typewriter;
}

.second-introductory-text {
  font: normal 20px American Typewriter;
}

.third-introductory-text {
  font: normal 20px American Typewriter;
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

.grid-container {
  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 2px;
  background-color: white;
  padding-bottom: 10px;
  padding-top: 10px;
  width: 1000px;
  margin: 0px auto;
  border-width: 1px;
}

.second-view-container {
  display: inline-flex;
}
</style>
