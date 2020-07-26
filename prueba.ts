import container from './utils/inversify.config'
import postModel from './models/postModel'
import { IDiscussionService, TYPES } from './utils/interfaces'

const service = container.get<IDiscussionService>(TYPES.IDiscussionService)

export default service
