import axios from "axios"
import {IDiscussionService, IOnlineServiceAPI} from "./interfaces"
import postModel from "~/models/postModel"
import { injectable } from "inversify"

@injectable()
export default class scott_api_service implements IDiscussionService, IOnlineServiceAPI {
    urlAPI: string
    get_discussions(filter: string, query: string): Promise<any> {
        
        return axios.get(this.urlAPI + '/get_dicussions_by_' + filter + '?' + query )
        .then(
            response => {
                return (response.data)
            }
        )
    }

    get_discussion_by_Trending(query: string  = 'token=BLQ&limit=20&tag=bloque64') {

        return this.get_discussions('trending', query)
    }
    /**
     *
     */
    constructor() {
        this.urlAPI = 'https://scot-api.steem-engine.com/';
        
    }

}