// All the discussion posts service have to implement this contract
// import postModel from "~/models/postModel"

export interface IDiscussionService {
    
    get_discussion_by_filter: {
        trending: Function,
        new: Function,
        promoted: Function,
        hot: Function
    };
    get_discussions (filter: string, query: string): Promise<any>
    
};


export const TYPES =
{
    IDiscussionService: Symbol("IDiscussionService"),
    
}