import 'reflect-metadata'
import postModel from "~/models/postModel"
import { injectable } from "inversify"
import scott_api_service from '~/services/api/scott'
import hive_service from '~/services/api/hive'
import { IContentReplier } from '~/utils/interfaces'

const hiveServ = new hive_service()
@injectable()
class compoundHiveAndScott extends scott_api_service implements IContentReplier {
    async get_content_replies(author: string, permlink: string): Promise<postModel[]> {
        return await hiveServ.get_content_replies(author, permlink)
        .then( (result: postModel[]) => result.map((post: postModel) => <postModel> {
           ...post,
           ...super.get_detail_post('@' + author, permlink)
        }) )
        .catch( (err: any) => {console.log(err); return []} )
    }
    async get_detail_post(author: string, permlink: string): Promise <postModel> {
        return <postModel> {
            ...await super.get_detail_post('@'+ author, permlink),
            ...await hiveServ.get_detail_post(author, permlink)
        }
    }
        
}

export default compoundHiveAndScott
