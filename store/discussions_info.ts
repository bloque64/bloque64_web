import Vuex from 'vuex'
import container from '~/utils/inversify.config'
import postModel from '~/models/postModel'
import { IDiscussionService, TYPES } from '~/utils/interfaces'

let service = container.get<IDiscussionService>(TYPES.IDiscussionService)

export const state = () =>  ({
    discussionList: [],    
})


export const mutations = {
    setList (state: { discussionList: postModel[] }, discussionList : postModel[])
    {
        state.discussionList =  discussionList;
    },    
}

export const actions = {
    async get_by_trending ({commit} : any) {
        const new_info = service.get_discussion_by_filter['trending']()
        commit('setList', new_info)
    }

}
