<template>
  <div id="container">
    <medium-editor
      class="flex-item"
      :options="editorOptionsTitle"
      :prefill="'<h1><i>Título</i></h1>'"
    />
    <medium-editor
      class="flex-item"
      :options="editorOptions1"
      :prefill="'<i>Escriba aquí la entradilla</i>'"
    />
    <medium-editor
      class="flex-item"
      :options="editorOptions2"
      :prefill="'<i>Escriba aquí la entradilla</i>'"
    />
    <medium-editor
      class="flex-item"
      :options="editorOptions3"
      :prefill="'<i>Escriba aquí la entradilla</i>'"
    />
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component({
  data () {
    return {
      editorOptionsTitle: {
        toolbar: false,
        disableReturn: true
      },
      editorOptions1: {
        toolbar: {
          buttons: ['bold', 'justifyFull']
        },
        disableReturn: true
      },
      editorOptions2: {
        toolbar: {
          buttons: ['bold', 'italic', 'underline', 'anchor', 'justifyFull']
        }
      },
      editorOptions3: {
        toolbar: {
          buttons: ['bold', 'italic', 'underline', 'anchor', 'justifyFull']
        },
        disableReturn: true
      }
    }
  }
})
class BulletinEditor extends Vue {
}
export default BulletinEditor
</script>

<style>
.title {
  font-size:40px;
}
.flex-item {
  justify-content: space-between;
  text-align: center;
  align-items: center;
}
</style>
