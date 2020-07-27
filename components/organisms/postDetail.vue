<template>
  <div>
    {{ postInfo }}
  </div>
</template>

<script lang="ts">
import 'reflect-metadata'
import { Vue, Component, Prop } from 'vue-property-decorator'
import detailPostStore from '~/store/modules/detail_post_store'
// import { Remarkable} from 'remarkable'

@Component({
})
class postDetail extends Vue {
  @Prop() postInfo = detailPostStore.post
}

export default postDetail
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
