import 'reflect-metadata'
import { injectable } from 'inversify'
import postModel from '../../models/postModel'
import { IDetailPostService } from '../../utils/interfaces'
// import { dict_constructor } from "../../utils/decorators"

const urlApi = 'https://api.hive.blog'

@injectable()
class hiveApiService implements IDetailPostService {
    urlApi: string
    client: any
    getDiscussions (filter: string, query: string): Promise<any> {
      throw new Error('Method not implemented.')
    }

    get_detail_post (author: string, permlink: string): any {
      console.log('en el get_detail_post')
      return this.client.database
        .call('get_content', [author, permlink])
        .catch((err: string) => {
          console.log('Error man \n' + err)
        })
    }

    /**
     *
     */
    constructor () {
      this.urlApi = urlApi
      this.client = require('@hiveio/hive-js')
      this.client.api.setOptions({ url: this.urlApi })
    }
}

export default hiveApiService
