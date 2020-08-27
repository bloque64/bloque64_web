import 'reflect-metadata'
import postModel from "~/models/postModel"
import { injectable } from "inversify"
import scott_api_service from '~/services/api/scott'
import hive_service from '~/services/api/hive'

const hiveServ = new hive_service()
@injectable()
class compoundHiveAndScott extends scott_api_service {
    async get_detail_post(author: string, permlink: string): Promise <postModel> {
        return <postModel> {
            ...await super.get_detail_post('@'+ author, permlink),
            ...await hiveServ.get_detail_post(author, permlink)
        }
    }
}

export default compoundHiveAndScott
