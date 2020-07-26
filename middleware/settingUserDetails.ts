import { Middleware } from '@nuxt/types'
import  { transactionStore } from '~/store/modules/transaction_store'

const transactionLoad: Middleware = ({}) => {
  console.log('Aquí middleware antes de la promise.')
  if (transactionStore.UserName !== '') {
      transactionStore.setUserDetails().then(() => console.log('En el middleware madafacarrr!!!'))
    }
  }

export default transactionLoad
