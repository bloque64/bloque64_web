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
    post_info: any
    @Mutation
    set_post_values (post: any) {
      this.post_info = post
    }

    @Action({ commit: 'set_post_values' })
    async get_aditional_post_details ( dict:{author: string, permlink : string}) {
      const result = await service.get_detail_post(dict.author, dict.permlink)
      .catch( (err : string) => console.log('error chama, ', err) )
      return result
    }

    get post (): any {
      return this.post_info
    }
}

export default getModule(detail_post_store)
