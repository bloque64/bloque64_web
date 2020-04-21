<template>
  <div id="container">
    <b-card-body>
      <medium-editor
        class="flex-item"
        :options="editorOptions1"
      />
    </b-card-body>
    <medium-editor
      class="flex-item"
      :options="editorOptions2"
    />
    <medium-editor
      class="flex-item"
      :options="editorOptions3"
    />
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component({
  data () {
    return {
      editorOptions1: {
        placeholder: {
          text: 'Escriba aquí la entradilla',
          hideOnClick: false
        },
        disableReturn: true
      },
      editorOptions2: {
        placeholder: {
          text: 'Escriba aquí el cuerpo de la noticia',
          hideOnClick: false
        }
      },
      editorOptions3: {
        placeholder: {
          text: 'Escriba aquí el cierre',
          hideOnClick: false
        },
        disableReturn: true
      }
    }
  }
})
class EditorProof extends Vue {
}
export default EditorProof
</script>

<style>
.flex-item {
  justify-content: center;
  text-align: center;
  align-items: center;
}
</style>
