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
  ILogginDispatcher,
  IParserSummaryText,
  IParserFullText,
  IRenderCleanText,
  IStringify,
  IContentReplier
} from '~/utils/interfaces'
import scottApi from '~/services/api/scott'
import compoundHiveAndScott from '~/services/api/compoundHiveAndScott'
import hivesignerService from '~/services/api/hivesigner'
import { parserSummary } from "~/utils/postVisualizeTools/markdownParser";


const container = new Container()
const hiveConnector = new hivesignerService()
container.bind<IDiscussionService>(TYPES.IDiscussionService).to(scottApi).inTransientScope()
container.bind<IDetailPostService>(TYPES.IDetailPostService).to(compoundHiveAndScott)
container.bind<IContentReplier>(TYPES.IContentReplier).to(compoundHiveAndScott)
container.bind<ILogger>(TYPES.ILogger).toConstantValue(hiveConnector)
container.bind<IPostService>(TYPES.IPostService).toConstantValue(hiveConnector)
container.bind<IVoteService>(TYPES.IVoteService).toConstantValue(hiveConnector)
container.bind<IUserDetails>(TYPES.IUserDetails).toConstantValue(hiveConnector)
container.bind<ILogginDispatcher>(TYPES.ILogginDispatcher).toConstantValue(hiveConnector)

export default container

export const componentsContainer = new Container()
const p = new parserSummary()
componentsContainer.bind<IParserSummaryText>(TYPES.IParserSummaryText).toConstantValue(p)
componentsContainer.bind<IParserFullText>(TYPES.IParserFullText).toConstantValue(p)
componentsContainer.bind<IRenderCleanText>(TYPES.IRenderCleanText).toConstantValue(p)
componentsContainer.bind<IStringify>(TYPES.IStringify).toConstantValue(p)
