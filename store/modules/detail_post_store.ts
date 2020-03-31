import 'reflect-metadata'
import container from '../../utils/inversify.config'
import { VuexModule, Mutation, Action, getModule, Module } from 'vuex-module-decorators'
import postModel from '../../models/postModel'
import { IDetailPostService, TYPES } from '../../utils/interfaces'
import {Store} from "../index"

const service: IDetailPostService = container.get<IDetailPostService>(TYPES.IDetailPostService)
@Module({
    name: 'detail_post_store',
    stateFactory: true,
    store : Store,
    dynamic: true,
    namespaced: true,
})
class detail_post_store extends VuexModule{
    post_info: postModel | undefined
    @Mutation
    set_post_values(post: postModel){
        this.post_info = post
    }
    @Action({ commit : 'set_post_values' })
    async get_aditional_post_details (post: postModel){
        return await service.get_detail_post_params(post)
    }
    get post(): postModel | undefined{
        return this.post_info
    }
}

export default getModule(detail_post_store)