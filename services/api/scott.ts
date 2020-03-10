import axios from "axios"
import 'reflect-metadata'
import postModel from "../../models/postModel"
import { injectable } from "inversify"
import { dict_constructor } from "../../utils/decorators"
import { IDiscussionService } from "../../utils/interfaces"


@injectable()
export default class scott_api_service implements IDiscussionService {
    get_discussion_by_filter: { trending: Promise<postModel[]>; new: Promise<postModel[]>; promoted: Promise<postModel[]>; hot: Promise<postModel[]> }
    discussion : postModel[]        
    urlAPI: string
    async get_discussions(filter: string, query: string): Promise<any> {
        return axios.get(this.urlAPI + '/get_discussions_by_' + filter + '?' + query )
    }    
    async connect_to_api_for_get_discussion_by_trending(token = 'BLQ' , limit = '20', tag = 'bloque64') 
    {
        const params = ['token=' +token, 'limit=' + limit, 'tag=' + tag];
        const query =  params.join('&') + Array.prototype.slice.call(arguments, 3).join('&');        
        await this.get_discussions('trending', query).then( response => { this.discussion = dict_constructor(response.data); console.log('Inside the get_discussion') } ).catch( (err) => console.log(Error (err.message) ) );
    }
    /**
     *
     */    
    async get_discussion_by_trending() : Promise<postModel[]> {
        return this.connect_to_api_for_get_discussion_by_trending().
        then( () => this.discussion )         
    }
    
    constructor() {
        this.urlAPI = 'https://scot-api.steem-engine.com/';
        this.get_discussion_by_filter = { 
            trending : this.get_discussion_by_trending(),
            new : this.get_discussion_by_trending(),
            hot : this.get_discussion_by_trending(),
            promoted: this.get_discussion_by_trending()
        }
         this.discussion = Array<postModel>()
    }
}

