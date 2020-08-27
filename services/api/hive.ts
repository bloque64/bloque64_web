import 'reflect-metadata'
import { injectable } from 'inversify'
import { IDetailPostService } from '../../utils/interfaces'
const dhive = require('@hivechain/dhive')
// import { dict_constructor } from "../../utils/decorators"

const urlApi = 'https://api.hive.blog'

@injectable()
class hiveApiService implements IDetailPostService {
    urlApi: string
    client: any
    getDiscussions (filter: string, query: string): Promise<any> {
      throw new Error('Method not implemented.')
    }

    async get_detail_post (author: string, permlink: string) {
      console.log('en el get_detail_post ', author, ' ', permlink)
      return await this.client.database
        .call('get_content', [author, permlink])
        .then( (result : any) => { 
          return { body: result.body }
        })
        .catch((err: string) => {
          console.log('Error en get_detail_post in hive service \n' + err)
        })
    }
    /**
     *
     */
    constructor () {
      this.urlApi = urlApi
      this.client = new dhive.Client(urlApi)
      console.log("Alguna vez se llama al constructor de hive.ts ", this.client.database)
    }
}

export default hiveApiService
