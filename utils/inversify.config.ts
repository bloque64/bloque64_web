import 'reflect-metadata'
import {Container} from "inversify"
import {TYPES, IDiscussionService, IDiscussionStore} from "../utils/interfaces"
import scott_api from "../services/api/scott"


let container = new Container()
container.bind<IDiscussionService>(TYPES.IDiscussionService).to(scott_api).inTransientScope()

export default container




