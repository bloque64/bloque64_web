<template>
  <div>
    <b-form @submit.stop.prevent="onSubmit">
      <b-col sm="6">
        <b-form-group
          id="example-input-group-2"
          label="Escoja el tipo de noticia"
          label-for="example-input-2"
        >
          <b-form-select
            id="example-input-2"
            v-model="$v.selectedNoticeType.$model"
            name="example-input-2"
            :options="options"
            :state="validateState('selectedNoticeType')"
            aria-describedby="input-2-live-feedback"
            size="lg"
            class="mb-3"
          />
          <b-form-invalid-feedback id="input-2-live-feedback">
            El tipo de noticia es obligatorio.
          </b-form-invalid-feedback>
        </b-form-group>
      </b-col>
      <b-col sm="6">
        <b-form-textarea
          id="textarea"
          rows="3"
          debounce
          plaintext
          :value="$v.selectedNoticeType.$model"
          no-resize
        />
        <b-form-group
          id="example-input-group-3"
          label="Escoja el tema de noticia"
          label-for="example-input-3"
        >
          <b-form-select
            id="example-input-3"
            v-model="$v.selectedTag.$model"
            name="example-input-3"
            :options="tagNotice"
            :state="validateState('selectedTag')"
            aria-describedby="input-3-live-feedback"
            size="lg"
            class="mb-3"
          />
          <b-form-invalid-feedback id="input-3-live-feedback">
            El tema de la noticia es obligatorio.
          </b-form-invalid-feedback>
        </b-form-group>
        <b-button
          :to="validateState('selectedNoticeType') && validateState('selectedTag') ? '/create_a_post/write_bulletin' : ''"
          type="submit"
          variant="primary"
        >
          Escribir noticia
        </b-button>
      </b-col>
    </b-form>
  </div>
</template>

<script lang="ts">
import 'reflect-metadata'
import { Vue, Component } from 'nuxt-property-decorator'
import { validationMixin } from 'vuelidate'
const { required } = require('vuelidate/lib/validators')

@Component({
  mixins: [validationMixin],
  validations: {
    selectedNoticeType: {
      required
    },
    selectedTag: {
      required
    }
  }
})
class createPost extends Vue {
  selectedNoticeType :string = ''
  selectedTag: string = ''
  submitted :boolean = false
  checkbox1 :boolean = false
  checkbox2 :boolean = false
  tagNotice = [
    'Política',
    'Blockchain',
    'Salud',
    'Economía',
    'Cultura',
    'Sociedad',
    'Deportes',
    'Tecnología',
    'Ciencia']

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

  validateState (name :string) {
    const { $dirty, $error } = this.$v[name]
    return $dirty ? !$error : null
  }

  onSubmit () {
    console.log('I enter to the submit')
    this.$v.$touch()
    this.submitted = !this.$v.$anyError
  }

  coso () {
    console.log('aaaaaa')
  }
}
export default createPost
</script>

<style>

</style>
