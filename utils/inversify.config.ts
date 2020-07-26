import 'reflect-metadata'
import { Container } from 'inversify'
import {
  TYPES,
  IDiscussionService,
  IDetailPostService,
  ILogger,
  IPostService,
  IVoteService,
  IUserDetails,
  ILogginDispatcher
} from '../utils/interfaces'
import scottApi from '../services/api/scott'
import hiveApi from '../services/api/hive'
import hivesignerService from '~/services/api/hivesigner'

const container = new Container()
const hiveConnector = new hivesignerService()
container.bind<IDiscussionService>(TYPES.IDiscussionService).to(scottApi).inTransientScope()
container.bind<IDetailPostService>(TYPES.IDetailPostService).to(hiveApi)
container.bind<ILogger>(TYPES.ILogger).toConstantValue(hiveConnector)
container.bind<IPostService>(TYPES.IPostService).toConstantValue(hiveConnector)
container.bind<IVoteService>(TYPES.IVoteService).toConstantValue(hiveConnector)
container.bind<IUserDetails>(TYPES.IUserDetails).toConstantValue(hiveConnector)
container.bind<ILogginDispatcher>(TYPES.ILogginDispatcher).toConstantValue(hiveConnector)

export default container
