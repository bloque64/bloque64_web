<template>
  <div>
    <b-container fluid>
      <div v-if="state === 'SUCCESS'"> 
        <post-detail />
      </div>
      <div v-else-if="state === 'FAIL'"> 
        ERROR
      </div>
      <div v-else-if="state === 'PENDING'"> 
        <loading-component />
      </div>
    </b-container>
    <br />
    <br />
  </div>
</template>

<script lang = "ts">
import 'reflect-metadata'
import { Vue, Component, Prop } from 'vue-property-decorator'
import detailPostStore from '~/store/modules/detail_post_store'
import postDetail from '~/components/organisms/postDetail.vue'
import loadingComponent from '~/components/molecules/loadingComponent.vue'
import postModel from '~/models/postModel'

@Component({
  components: {
    postDetail,
    loadingComponent
  }
})
class postView extends Vue {
  state : 'SUCCESS' | 'FAIL' | 'PENDING' = 'PENDING'

  created () {
    detailPostStore.get_aditional_post_details({
        author: this.$route.params.author.
        slice(1, this.$route.params.author.length),
        permlink: this.$route.params.permlink})
        .then(() => this.state= 'SUCCESS')
        .catch((err:any) => {console.log(err); this.state= 'FAIL'})
  }
}
export default postView
</script>

<style>

</style>
