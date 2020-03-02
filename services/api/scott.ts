import axios from "axios"
import {IDiscussionService} from "../../utils/interfaces"
import postModel from "../../models/postModel"
import { injectable } from "inversify"
import { dict_constructor } from "../../utils/decorators"

@injectable()
export default class scott_api_service implements IDiscussionService {
    get_discussion_by_filter: { trending: Function; new: Function; promoted: Function; hot: Function }
    
    
    
    urlAPI: string
    get_discussions(filter: string, query: string): any {
        let return_info;
        axios.get(this.urlAPI + '/get_dicussions_by_' + filter + '?' + query )
        .then(
            response => {
                return_info = response.data;
            }
        )
        return return_info;
    }

    @dict_constructor
    public get_discussion_by_trending(token = 'BLQ' , limit = '20', tag = 'bloque64'): postModel[] 
    {
        const params = ['token=' +token, 'limit=' + limit, 'tag=' + tag];
        const query =  params.join('&') + Array.prototype.slice.call(arguments, 3).join('&');
        const discussion_info = this.get_discussions('trending', query);        
        return discussion_info;
    }
    /**
     *
     */    
    constructor() {
        this.urlAPI = 'https://scot-api.steem-engine.com/';
        this.get_discussion_by_filter = { 
            trending : this.get_discussion_by_trending,
            new : this.get_discussion_by_trending,
            hot : this.get_discussion_by_trending,
            promoted: this.get_discussion_by_trending
        }        
    }        
}

