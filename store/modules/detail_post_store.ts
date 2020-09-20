import 'reflect-metadata'
import { VuexModule, Mutation, Action, getModule, Module } from 'vuex-module-decorators'
import container from '~/utils/inversify.config'
import { IDetailPostService, IContentReplier, TYPES } from '~/utils/interfaces'
import { Store } from '@/store'
import postModel from '~/models/postModel'

const service: IDetailPostService = container.get<IDetailPostService>(TYPES.IDetailPostService)
const serviceReplier: IContentReplier = container.get<IContentReplier>(TYPES.IContentReplier)
/* console.log(service)
console.log('Aquí muy casual en el detail post store') */
@Module({
  name: 'detail_post_store',
  stateFactory: true,
  store: Store,
  namespaced: true,
  dynamic: true,
})
class detail_post_store extends VuexModule {
    post_info: postModel = null
    postReplies: postModel[] = []
    @Mutation
    set_post_values (postInf: postModel) {
      this.post_info = postInf
    }

    @Mutation
    set_post_replies_values(postReplies: postModel[]){
      this.postReplies = postReplies
    }

    @Action({ commit: 'set_post_values' })
    async get_aditional_post_details ( dict:{author: string, permlink: string}) : Promise<postModel> {
      return await service.get_detail_post(dict.author, dict.permlink)
      .catch( (err : string) => {console.log('error in get_aditional_post_details: ', err); return null } )
    }

    @Action({ commit: 'set_post_replies_values' })
    async get_content_replies(author: string, permlink: string): Promise<postModel[]> {
      return await serviceReplier.get_content_replies(author, permlink)
      .catch(() => [])
    }

    get postInfo (): postModel {
      return this.post_info
    }
}

export default getModule(detail_post_store)
