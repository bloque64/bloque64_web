<template>
  <div>
    <div v-for="(postShot, index) in postShots()" :key="index">
      <b-container :class="'grid-container'">
        <div v-for="(post, indexPost) in postShot[0]" :key="indexPost">
          <b-col>
            <PostSummary
              :post="post"
              :render-for-position="postShot[1]"
            />
          </b-col>
        </div>
      </b-container>
    </div>
  </div>
</template>

<script lang = "ts">
import 'reflect-metadata'
import { Vue, Component } from 'vue-property-decorator'
import { discussionStore } from '~/store/modules/discussions_store'
import postModel from '~/models/postModel'
import PostSummary from '~/components/organisms/PostSummary.vue'

@Component({
  components: {
    PostSummary
  }
})
class PostList extends Vue {
  get posts () : postModel[] {
    return discussionStore.discussionList
  }

  postShots (distributionByShot =
  [
    { countPerType: 1, renderForPos: 'first_view', postPerType: 1 },
    { countPerType: 1, renderForPos: 'second_view', postPerType: 2 },
    { countPerType: this.posts.length - 3, renderForPos: 'third_view', postPerType: 1 }
  ]) : any {
    // eslint-disable-next-line no-array-constructor
    const toReturn = new Array<{}>()
    let floorIndex = 0
    let topIndex = 0
    distributionByShot.forEach((viewType) => {
      for (let index = 0;
        index < viewType.countPerType;
        index++) {
        floorIndex = topIndex
        topIndex += viewType.postPerType
        toReturn.push([
          this.posts.slice(floorIndex, topIndex),
          viewType.renderForPos])
      }
    })
    return toReturn
  }

  renderForPos (index : any) {
    switch (index) {
      case 0 :
        return 'first_view'
      case 1 :
        return 'second_view'
      case 2 :
        return 'second_view'
      default :
        return 'third_view'
    }
  }
}

export default PostList
</script>

<style>
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
</style>
