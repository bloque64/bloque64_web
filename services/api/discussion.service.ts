// This is the service for the front component
import {IDiscussionService, IOnlineServiceAPI} from './interfaces'
import {injectable} from "inversify"
import postModel from '~/models/postModel';

@injectable()
export class discussionService implements IDiscussionService, IOnlineServiceAPI {
    urlAPI: string;
    
    get_discussions(filter: string, query: string): Array<postModel> {
        throw new Error("Method not implemented.");
    }
    
    constructor(urlAPI: string) {
        this.urlAPI = urlAPI;        
    }
    
}