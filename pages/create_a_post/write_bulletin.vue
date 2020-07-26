<template>
  <editor />
</template>

<script lang = "ts">
import { Vue, Component } from 'vue-property-decorator'
import editor from '~/components/bulletin_editor.vue'

@Component({
  components: {
    editor
  }
})
class BulletinWritter extends Vue {
}
export default BulletinWritter
</script>

<style>

</style>
