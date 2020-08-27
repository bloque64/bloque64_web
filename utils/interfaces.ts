// All the discussion posts service have to implement this contract
import postModel from '../models/postModel'

export interface IDiscussionService {

    get_discussion_by_filter: {
        trending: Promise<postModel[]>,
        new: Promise<postModel[]>,
        promoted: Promise<postModel[]>,
        hot: Promise<postModel[]>
    };
    get_discussions (filter: string, query: string): Promise<any>

};

export interface IDetailPostService {
    get_detail_post (author:string, permlink: string) : Promise<postModel>,
}

export interface IVoteService {
    vote(voter: string,
        votedAuthor: string,
        permlink: string,
        weight: string) : any
}

export interface ILogger {
    login(dict : {userName : string, access_token : string}) : void,
    logout() : any
}

export interface IPostService {
    post(parentAuthor: string,
        parentPermlink: string,
        author: string,
        permlink: string,
        title: string,
        body: string,
        jsonMetadata: any) : any
}

export interface IUserDetails{
    userProfile() : Promise<any>
}

export interface ILogginDispatcher {
    dispatchLogin(callbackURL: string) : any
}

export interface IParserSummaryText {
    parseSummaryText(document: string): Document
}

export interface IStringify {
    stringifyContent(document: Document) : string
    stringifyFullContent(document: Document) : string
}

export interface IParserFullText {
    parseFullText(document: string): Document
}

export interface IRenderCleanText {
    renderCleanText(document: Document): string
}

export const TYPES =
{
  IDiscussionService: Symbol('IDiscussionService'),
  IDetailPostService: Symbol('IDetailPostService'),
  IDiscussionStore: Symbol('IDiscussionStore'),
  IVoteService: Symbol('IVoteService'),
  ILogger: Symbol('ILogger'),
  IPostService: Symbol('IPostService'),
  IUserDetails: Symbol('IUserDetails'),
  ILogginDispatcher: Symbol('ILogginDispatcher'),
  IParserSummaryText: Symbol('IParserSummaryText'),
  IParserFullText: Symbol('IParserFullText'),
  IRenderCleanText: Symbol('IRenderCleanText'),
  IStringify: Symbol('IStringify')
}
