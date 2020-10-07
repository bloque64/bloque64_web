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
        </b-col>
        <b-col offset="8" class="buttons-right">
          <font-awesome-icon :icon="{ prefix: 'fas', iconName: 'pen-square' }" />
          <b-img
          thumbnail  
          rounded="circle"
          v-if="hasUserName()"
          :src="peekUrlImg()"
          class= "top-bar-element top-img" 
          />
          <toogleA class= "top-bar-element" />
          <sideBar class= "top-bar-element" />
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
import toogleA from '~/components/molecules/toogle.vue'
import sideBar  from '~/components/molecules/Sidebar.vue'

const logginDispatcherService: ILogginDispatcher = container.get<ILogginDispatcher>(TYPES.ILogginDispatcher)
@Component({
  name: 'TopBar',
  components: {
    toogleA,
    sideBar
  }
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

.top-bar-element {
  display: inline-block;
}

.buttons-right {
  text-align: right;
}

.top-img {
  max-width: 50%;
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
