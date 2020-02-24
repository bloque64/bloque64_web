// All the discussion posts service have to implement this contract
import postModel from "~/models/postModel"

export interface IDiscussionService {
    
    get_discussions (filter: string, query: string): Promise<any>;
    
}
export interface IOnlineServiceAPI {

    urlAPI: string;
}


export interface IDiscussionFilters {
    [filterOption : string] : string; 
}

