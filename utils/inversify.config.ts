import 'reflect-metadata'
import {Container} from "inversify"
import {TYPES, IDiscussionService, IDetailPostService} from "../utils/interfaces"
import scott_api from "../services/api/scott"
import hive_api from "../services/api/hive"

let container = new Container()
container.bind<IDiscussionService>(TYPES.IDiscussionService).to(scott_api).inTransientScope()
container.bind<IDetailPostService>(TYPES.IDetailPostService).to(hive_api)
export default container




