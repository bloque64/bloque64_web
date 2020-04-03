// All the discussion posts service have to implement this contract
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

export interface IDetailPostService {
    get_detail_post (author:string, permlink: string) : any
    get_detail_post_params (post: postModel) : Promise <postModel>
}

export const TYPES =
{
    IDiscussionService: Symbol("IDiscussionService"),
    IDetailPostService: Symbol("IDetailPostService"),
    IDiscussionStore: Symbol("IDiscussionStore")
}