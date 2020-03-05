import 'reflect-metadata'
import container from '../utils/inversify.config'
import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'
import postModel from '../models/postModel'
import { IDiscussionService, TYPES } from '../utils/interfaces'


let service = container.get<IDiscussionService>(TYPES.IDiscussionService)
console.log(service)

@Module({
    name: 'discussion_store',
    stateFactory: true,
    namespaced: true,
  })
class discussion_store extends VuexModule
{
    discussionList: postModel[] = []
    @Mutation
    setList ( discussionList : postModel[])
    {
        this.discussionList =  discussionList;
    }

    @Action
    get_by_trending ({commit} : any) {
        const new_info = service.get_discussion_by_filter['trending']()
        this.setList(new_info)
    }
    
    get disucssion() : postModel[] {
        return this.discussionList
    }
    

}

