<template>
  <b-container>
    <b-form-group>
      <b-form-text tag="medium">
        Escoja el tipo de noticia que desee publicar
      </b-form-text>
      <br>
      <b-form-radio-group
        id="radio-group-1"
        v-model="selected"
        :options="options"
        name="radio-options"
      />
      <b-col sm="6">
        <b-form-textarea
          id="textarea"
          rows="6"
          debounce
          plaintext
          :value="selected"
          no-resize
        />
      </b-col>
      <b-row>
        <b-button variant="outline-primary" class="mt-5">
          Aceptar
        </b-button>
      </b-row>
    </b-form-group>
  </b-container>
</template>

<script lang = "ts">
import 'reflect-metadata'
import { Vue, Component } from 'nuxt-property-decorator'

@Component({
})
class createPost extends Vue {
  selected : String = ''

  options = [
    {
      text: 'Noticia corta',
      value: 'Las noticias se caracterizan por exponer la  información de una forma clara y concisa; con frases breves y un vocabulario sencillo para que todo el mundo pueda entenderlas'
    },
    {
      text: 'Artículo de opinión',
      value: 'Aquí ponemos una sugerencia sobre cómo debe ser una noticia de este tipo2'
    },
    {
      text: 'Entrevista',
      value: 'Aquí ponemos una sugerencia sobre cómo debe ser una noticia de este tipo3'
    }
  ]
}
export default createPost
</script>

<style>

</style>
