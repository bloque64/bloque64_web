import axios from "axios"
import 'reflect-metadata'
import {IDiscussionService} from "../../utils/interfaces"
import postModel from "../../models/postModel"
import { injectable } from "inversify"
import { dict_constructor } from "../../utils/decorators"


@injectable()
export default class scott_api_service implements IDiscussionService {
    get_discussion_by_filter: { trending: Function; new: Function; promoted: Function; hot: Function }
    discussion : postModel[]        
    urlAPI: string
    get_discussions(filter: string, query: string): Promise<any> {    
        
        return axios.get(this.urlAPI + '/get_discussions_by_' + filter + '?' + query )                
    }

    
    public get_discussion_by_trending(token = 'BLQ' , limit = '20', tag = 'bloque64') 
    {
        const params = ['token=' +token, 'limit=' + limit, 'tag=' + tag];
        const query =  params.join('&') + Array.prototype.slice.call(arguments, 3).join('&');
        
        this.get_discussions('trending', query).then( response => this.discussion = dict_constructor(response.data) ).catch( (err) => console.log(err.message) );        
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
         this.discussion = Array<postModel>()       
    }        
}

