const url_api = "https://api.steemit.com"

import 'reflect-metadata'
import postModel from "../../models/postModel"
import { injectable } from "inversify"
import { IDetailPostService } from "../../utils/interfaces"
// import { dict_constructor } from "../../utils/decorators"
import {Client} from 'dsteem'

@injectable()
export default class hive_api_service implements IDetailPostService{
    url_api: string
    client: Client
    get_discussions(filter: string, query: string): Promise<any> {
        throw new Error("Method not implemented.")
    }
    get_detail_post(author: string, permlink: string): Promise <postModel> {        
        throw new Error("Method not implemented.")
    }
    async get_detail_post_params(post: postModel) : Promise <postModel> {
        console.log("get_datail before promise")
        return await this.client.database.call('get_content', [post.author, post.permlink]).then( result => {
            post.body = result.body
            console.log(post)
            console.log("get_datail inside promise")
            return post;
        }).catch( err => 
            {console.log('Error man \n' + err); 
            post.body = err;
            return post } )
    }
    /**
     *
     */
    constructor() {
        this.url_api = url_api;
        this.client = new Client(this.url_api)
    }
}