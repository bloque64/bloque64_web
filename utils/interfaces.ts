// All the discussion posts service have to implement this contract

import { VuexModule } from 'vuex-module-decorators'
import postModel from '../models/postModel'

export interface IDiscussionService {
    
    get_discussion_by_filter: {
        trending: Promise<postModel[]>,
        new: Promise<postModel[]>,
        promoted: Promise<postModel[]>,
        hot: Promise<postModel[]>
    };
    get_discussions (filter: string, query: string): Promise<any>
    
};


export interface IDiscussionStore extends VuexModule {
    
}

export const TYPES =
{
    IDiscussionService: Symbol("IDiscussionService"),
    IDiscussionStore: Symbol("IDiscussionStore")
}