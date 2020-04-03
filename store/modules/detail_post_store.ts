import 'reflect-metadata'
import container from '../../utils/inversify.config'
import { VuexModule, Mutation, Action, getModule, Module } from 'vuex-module-decorators'
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
    dynamic: true,
    namespaced: true,
})
class detail_post_store extends VuexModule{
    post_info: postModel | undefined
    @Mutation
    set_post_values(post: postModel){
        console.log('Muerto de risa en el set_post_mutation')
        console.log(post.body)
        this.post_info = post
    }
    @Action({ commit : 'set_post_values' })
    async get_aditional_post_details (post: postModel){
        console.log(' En el action get_aditional del store before')
        await service.get_detail_post_params(post).then(result => post = result)
        console.log(' En el action get_aditional del store before ')
        return post
    }
    get post(): postModel | undefined{
        console.log('En el get post del store')
        console.log(this.post_info)
        return this.post_info
    }
}

export default getModule(detail_post_store)