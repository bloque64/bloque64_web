import axios from "axios"
import {IDiscussionService, IOnlineServiceAPI} from "./interfaces"
import postModel from "~/models/postModel"
import { injectable } from "inversify"

@injectable()
export default class scott_api_service implements IDiscussionService, IOnlineServiceAPI {
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
    }        
}

function dict_constructor (target : any, propertype : string, descriptor : PropertyDescriptor)
{
    const originalMethod  = descriptor.value;
    descriptor.value = function (...args : any[]): postModel[]{
        const discussion_info = originalMethod.apply(this, args);
        const discussion_posts = discussion_info.map((post: { [x: string]: any }) => <postModel> { 
            comments_number: post['children'],
            upvotes: post['active_votes'].length,
            title: post['title'],
            authorperm: post['authorperm'],    
            introductory_text: post['desc'],
            permlink : post['permlink'],
            url_img_list: post['json_metadata']['image'],
            author : post['author'],
            tags : post['tags'],
            external_links: post['json_metadata']['links'] ,
            mentioned_users: post['json_metadata']['users'],
            main_tag : post['tags'][0],
             })
        return discussion_posts;                 
    }        
}