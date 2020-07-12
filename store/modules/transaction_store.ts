import 'reflect-metadata'
import { Module, VuexModule, Mutation, Action, getModule } from 'vuex-module-decorators'
import container from '~/utils/inversify.config'
import userModel from '~/models/userModel'
import { Store } from '../index'
import {
  ILogger,
  IPostService,
  IVoteService,
  IUserDetails,
  ILogginDispatcher,
  TYPES
} from '~/utils/interfaces'

const logger: ILogger = container.get<ILogger>(TYPES.ILogger)
const post_service: IPostService = container.get<IPostService>(TYPES.IPostService)
const vote_service: IVoteService = container.get<IVoteService>(TYPES.IVoteService)
const userDetails_service: IUserDetails = container.get<IUserDetails>(TYPES.IUserDetails)
const logginDispatcherService: ILogginDispatcher = container.get<ILogginDispatcher>(TYPES.ILogginDispatcher)
@Module({
  name: 'transactionModule',
  stateFactory: true,
  namespaced: true,
  store: Store,
  dynamic: true
})
class transactionModule extends VuexModule {
    userName: string = ''
    logToken : string = ''
    userDetails: any
    get UserName () {
      return this.userName
    }

    get token () {
      return this.logToken
    }

    get UserDetails () {
      return this.userDetails
    }

    @Mutation
    saveUserDetails(userDetails: any) {
      this.userDetails = userDetails
    }
    @Action({commit: 'saveUserDetails'})
    async setUserDetails(){
      console.log('En setUserDetails')
      return await userDetails_service.userProfile().
      then(response => response ).catch(
        error => console.log('Oops! \n', error)
      )
    }
    @Mutation
    savesession ({userName = '', access_token = ''}) {
      console.log('En la mutation de transactionStore ', 
      userName, ' ', access_token)
      this.userName = userName
      this.logToken = access_token
    }
    @Action
    setUserNameAndToken ({userName = '', access_token = ''}) {
      const that = this
      return new Promise(() => {
        (function(currentUserName: string, currentAccessToken : string) {
          logger.login({ userName : userName, access_token : access_token })
          that.context.commit('savesession',
          { userName : currentUserName, access_token : currentAccessToken })
        }(userName, access_token)),
         (error : string) => console.log(error)
      })
    }
}

export const transactionStore = getModule(transactionModule);
