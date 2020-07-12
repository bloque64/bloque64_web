<template>
  <div class="top-bar">
    <b-navbar toggleable="md" variant="light">
      <b-container fluid>
        <b-col class="ml-n4">
          <b-nav-text style="letter-spacing: -0.113em;">
            {{ peekDate() }}
          </b-nav-text>
        </b-col>
        <b-col>
          <!-- <b-nav-form>
            Cosas se verán mateo
          </b-nav-form> -->
        </b-col>
        <b-col offset="8" class="buttons-right">
          <font-awesome-icon :icon="{ prefix: 'fas', iconName: 'pen-square' }" />
          <img
          v-if="hasUserName()"
          :src="peekUrlImg()"
          >
          <font-awesome-icon
            v-b-toggle.my-sidebar
            :icon="{ prefix: 'fas', iconName: 'list' }"
            class="list"
          />
          <b-sidebar
            id="my-sidebar"
            aria-label="Sidebar with custom footer"
            right
            shadow
          >
            <template v-slot:footer="{ hide }">
              <div class="d-flex text-light align-items-center px-3 py-2">
                <strong class="mr-auto">Bloque64</strong>
                <b-button size="sm" @click="hide">
                  Cerrar
                </b-button>
              </div>
            </template>
            <div class="px-3 py-2">
              <nav class="mb-3">
                <b-nav
                  tabs
                  vertical
                  class="nav-wrapper"
                >
                  <b-nav-item @click="loginURL()">
                    Iniciar sesión
                  </b-nav-item>
                  <b-nav-item>
                    Registrarse
                  </b-nav-item>
                </b-nav>
              </nav>
            </div>
          </b-sidebar>
        </b-col>
      </b-container>
    </b-navbar>
  </div>
</template>

<script lang="ts">
import 'reflect-metadata'
import { Vue, Component, Prop } from 'vue-property-decorator'
import { transactionStore } from '~/store/modules/transaction_store'
import {TYPES, ILogginDispatcher} from '~/utils/interfaces'
import container from '~/utils/inversify.config'

const logginDispatcherService: ILogginDispatcher = container.get<ILogginDispatcher>(TYPES.ILogginDispatcher)
@Component({
  name: 'TopBar'
})
class TopBar extends Vue {
  URLprofile: string = ''
  loginURL () {
    logginDispatcherService.dispatchLogin(window.location.href)
  }

  hasUserName () :boolean {
    console.log('En el TopBar ', transactionStore.userName, transactionStore.userDetails)
    return transactionStore.userName !== ''
  }

  mounted () {
    console.log('En el TopBar en el mounted', transactionStore.userName, transactionStore)
  }
  peekUrlImg () : string {
    return 'http://images.hive.blog/u/' + transactionStore.userName + '/avatar'
  }

  peekDate () {
    const dt = new Date()
    const dtf = new Intl.DateTimeFormat('sp', { year: 'numeric', month: 'short', day: '2-digit' })
    const [{ value: mo },, { value: da },, { value: ye }] = dtf.formatToParts(dt)
    return `${da} ${mo} ${ye}`
  }
}
export default TopBar
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.top-bar {

  margin: 0px;
  padding: 0px;
  overflow: hidden;
  background-color: white;
  font: normal 20px American Typewriter;
  border-style: solid;
  border-left: 0px;
  border-right: 0px;
  border-top: 0px;
  border-width: 1px;

}

.buttons-right {
  text-align: right;
}

.list {
  cursor:pointer;
}

.nav-wrapper {
  border-bottom: none;
}

.nav-element a {
  color: black;
}

.nav-element {
  border: cadetblue;
}
</style>
