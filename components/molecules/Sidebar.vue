<template>
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
</template>

<script lang="ts">
import 'reflect-metadata'
import { Vue, Component, Prop } from 'vue-property-decorator'
import container from '~/utils/inversify.config'
import {TYPES, ILogginDispatcher} from '~/utils/interfaces'
import { transactionStore } from '~/store/modules/transaction_store'

const logginDispatcherService: ILogginDispatcher = container.get<ILogginDispatcher>(TYPES.ILogginDispatcher)
@Component({
  name: 'SideBar'
})
class SideBar extends Vue {
  id : string = 'my-sidebar'
  loginURL () {
    logginDispatcherService.dispatchLogin(window.location.href)
  }
}
export default SideBar
</script>

<style>

</style>
