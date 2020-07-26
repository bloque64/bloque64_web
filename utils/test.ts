import axios from 'axios'
import { dict_constructor } from './decorators'
import postModel from '~/models/postModel'

const execute = async function () {
  let variable : postModel[] | Array<any> = ['Solo tristeza hay por acá']
  await axios.get('https://scot-api.steem-engine.com/get_discussions_by_trending?token=BLQ&limit=20&tag=bloque64').then((response: { data: any }) => { variable = dict_constructor(response.data) })
  console.log(variable)
  console.log("I'm here, in test.ts")
  return variable
}

export default execute
