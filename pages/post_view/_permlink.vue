<template>
  <postDetail />
</template>

<script lang = "ts">
import 'reflect-metadata'
import { Vue, Component, Prop } from 'vue-property-decorator'
import postDetail from '~/components/postDetail.vue'

@Component({
  components: {
    postDetail
  }
})
class postView extends Vue {}
export default postView
</script>

<style>

</style>
