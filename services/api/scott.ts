import axios from "axios"
import 'reflect-metadata'
import postModel from "~/models/postModel"
import { injectable } from "inversify"
import { dict_constructor, postModelConst } from "~/utils/decorators"
import { IDiscussionService, IDetailPostService } from "~/utils/interfaces"


@injectable()
class scott_api_service implements IDiscussionService, IDetailPostService {
    get_discussion_by_filter: { 
        trending: Promise<postModel[]>
        new: Promise<postModel[]> 
        promoted: Promise<postModel[]>
        hot: Promise<postModel[]>
    }
    discussion : postModel[]
    urlAPI: string
    async get_discussions(filter: string, query: string): Promise<any> {
        return await axios.get(this.urlAPI + '/get_discussions_by_' + filter + '?' + query )
    }    
    async connect_to_api_for_get_discussion_by_trending(token = 'BLQ' , limit = '20', tag = 'bloque64') : Promise<postModel[]>
    {
        const params = ['token=' +token, 'limit=' + limit, 'tag=' + tag];
        const query =  params.join('&') + Array.prototype.slice.call(arguments, 3).join('&');
        return await this.get_discussions('trending', query).
        then( response =>
            { console.log('En el scott ', response); return dict_constructor(response.data) }).
            catch( (err) => { console.log("que pasoo "); console.log(Error (err.message) ); return [] } );
    }
    /**
     *
     */
    async get_discussion_by_trending() : Promise<postModel[]> {
        return await this.connect_to_api_for_get_discussion_by_trending()         
    }
    
    constructor() {
        this.urlAPI = 'https://scot-api.steem-engine.com/';
        this.get_discussion_by_filter = { 
            trending : this.get_discussion_by_trending(),
            new : this.get_discussion_by_trending(),
            hot : this.get_discussion_by_trending(),
            promoted: this.get_discussion_by_trending()
        }
         this.discussion = []
    }
    get_detail_post_params(post: postModel): Promise<postModel> {
        throw new Error("Method not implemented.")
    }
    async get_detail_post(author: string, permlink: string): Promise <postModel> {
        return await axios.get(this.urlAPI + '/' + author + '/' + permlink + '?hive=1').
            then(response => { console.log('En el scott api', response.data.BLQ); return postModelConst(response.data.BLQ)} ).
            catch((err) => { console.log("que pasoo "); console.log(Error(err.message)); return null })
    }
}

export default scott_api_service
