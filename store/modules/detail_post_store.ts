import 'reflect-metadata'
import { VuexModule, Mutation, Action, getModule, Module } from 'vuex-module-decorators'
import container from '../../utils/inversify.config'
import postModel from '../../models/postModel'
import { IDetailPostService, TYPES } from '../../utils/interfaces'
import { Store } from '@/store'

const service: IDetailPostService = container.get<IDetailPostService>(TYPES.IDetailPostService)
/* console.log(service)
console.log('Aquí muy casual en el detail post store') */
@Module({
  name: 'detail_post_store',
  stateFactory: true,
  store: Store,
  namespaced: true,
  dynamic: true
})
class detail_post_store extends VuexModule {
    post_info: postModel | undefined
    @Mutation
    set_post_values (post: postModel) {
      this.post_info = post
    }

    @Action({ commit: 'set_post_values' })
    async get_aditional_post_details (author: string, permlink : string) {
      console.log(' en el get_aditional_post_details antes de la llamada')
      const result = await service.get_detail_post(author, permlink)
      .catch( (err : string) => console.log('error chama, ', err) )
      console.log(result, ' en el get_aditional_post_details')
      return result
    }

    get post (): postModel | undefined {
      return this.post_info
    }
}

export default getModule(detail_post_store)
