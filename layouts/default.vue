<template>
  <div class="mt-0">
    <TopBar />
    <center><img src="~/assets/bloque64_iso_400.png"></center>
    <nuxt />
  </div>
</template>

<script lang="ts">
import 'reflect-metadata'
import { Vue, Component } from 'vue-property-decorator'
import TopBar from '~/components/organisms/TopBar.vue'
import { transactionStore } from '~/store/modules/transaction_store'

@Component({
  components: {
    TopBar
  }
  // middleware: 'settingUserDetails'
})
class layout extends Vue {

  created () {
  if (process.browser) {
    this.handleUrlInfo()
    }
  }

  handleUrlInfo () {
    const userName = new URLSearchParams(document.location.search).
    get('username') || ''
    const access_token = new URLSearchParams(document.location.search).get(
      'access_token'
    ) || ''
    if (userName !== '' && access_token !== '') {
      this.fetchInfo(userName, access_token)
      this.fetchUserDetails()
      this.$router.replace('/')
    }
  }

  async fetchInfo (userName: string, access_token: string ) {
    await transactionStore.setUserNameAndToken( {userName, access_token}).catch(
      (err:any) => console.log(err)
    )
  }

  async fetchUserDetails () {
    await transactionStore.setUserDetails()
  }
}
export default layout
</script>

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
