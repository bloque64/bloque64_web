
import { Middleware } from '@nuxt/types'
import discussionStore from '../store/modules/discussions_store'

const discussion_load: Middleware = async ({}) => {
    console.log("Inside middleware")
    await discussionStore.get_by_trending()    
}

export default discussion_load
