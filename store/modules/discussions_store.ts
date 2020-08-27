import 'reflect-metadata'
import container from '~/utils/inversify.config'
import { Module, VuexModule, Mutation, Action, getModule } from 'vuex-module-decorators'
import postModel from '~/models/postModel'
import { IDiscussionService, TYPES } from '~/utils/interfaces'
import { Store} from '../index'
// import { injectable } from "inversify"


const service: IDiscussionService = 
container.get<IDiscussionService>(TYPES.IDiscussionService)
@Module({
    name: 'discussion_store',
    stateFactory: true,
    namespaced: true,
    store: Store,
    dynamic: true
  })
export class discussion_store extends VuexModule
{
    discussionList: postModel[] = []
    @Mutation
    setList ( discussionList : postModel[])
    {
        this.discussionList =  discussionList;        
    }
    
    @Action ({commit : 'setList'})
    async get_by_trending () {
        console.log('En el get_by_trending')
        const bval = await service.get_discussion_by_filter['trending']
        console.log(bval)
        return bval
    }

    get discussion() : postModel[] {
        return this.discussionList
    }

}

export const discussionStore = getModule(discussion_store);
