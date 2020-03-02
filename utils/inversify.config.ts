import 'reflect-metadata'

import {Container} from "inversify"

import {TYPES, IDiscussionService} from "../utils/interfaces"

import scott_api from "../services/api/scott"

let container = new Container();

console.log(container)
container.bind<IDiscussionService>(TYPES.IDiscussionService).to(scott_api);

export default container;

