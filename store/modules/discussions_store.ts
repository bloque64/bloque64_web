import 'reflect-metadata'
import container from '../../utils/inversify.config'
import { Module, VuexModule, Mutation, Action, getModule } from 'vuex-module-decorators'
import postModel from '../../models/postModel'
import { IDiscussionService, IDiscussionStore, TYPES } from '../../utils/interfaces'
import {Store} from "../index"

// import { injectable } from "inversify"


const service: IDiscussionService = container.get<IDiscussionService>(TYPES.IDiscussionService)
@Module({
    name: 'discussion_store',
    stateFactory: true,
    store : Store,
    dynamic: true,
    namespaced: true,
  })
export class discussion_store extends VuexModule implements IDiscussionStore
{
    discussionList: postModel[] = []
    @Mutation
    setList ( discussionList : postModel[])
    {
        this.discussionList =  discussionList;        
    }
    @Action ({commit : 'setList'})
    async get_by_trending () {
        return await service.get_discussion_by_filter['trending']        
    }    
    get discussion() : postModel[] {        
        return this.discussionList || null
    }
}

export default getModule(discussion_store)
