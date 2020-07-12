import 'reflect-metadata'
import { injectable } from 'inversify'
import { ILogger, 
    IPostService, 
    IVoteService, 
    ILogginDispatcher,
    IUserDetails 
    } from '~/utils/interfaces'
@injectable()
export default class hivesignerService  implements 
ILogger, 
IPostService, 
IVoteService,
ILogginDispatcher,
IUserDetails{
    hivesigner : any = require('hivesigner')
    client : any
    /**
     *
     */
    constructor(callbackURL:string = 'http://localhost:3000') {
        this.client = new this.hivesigner.Client({
            app: 'bloque64',
            callbackURL: callbackURL,
            accessToken: 'access_token',
            scope: ['vote', 
                    'comment',
                    ]
        });
    }

    login(dict : {userName : string, access_token : string}) {
        this.client.setAccessToken(dict.access_token)
        /* const self = this
        return new Promise<any> (() => 
        (function(logOjb: {userName : string}) {
            console.log('AAAAAAAAAA')
            self.client.login(logOjb, function (err : any, res : any) {
              if (err) { return err}
              return res
            })
        } )({ userName: dict.userName }) ) */
    }

    async userProfile  () : Promise<any> {
        const self = this
        console.log('En userProfile ', this.client)
        return self.client.me().then( (response: any) => response ).catch(
            (err : any) => err
        )
    }

    logout() {
        this.client.revokeToken(function ( err: any,  res: any  )
        {
            return err || res
        })
    }

    vote(voter: string,
        votedAuthor: string,
        permlink: string,
        weight: string) {

        this.client.vote(voter, 
            votedAuthor, 
            permlink, 
            weight, 
            function (err: string, res: string){
             console.log(err, res)   
            })
    }
    post(parentAuthor: string, 
        parentPermlink: string, 
        author: string, 
        permlink: string, 
        title: string, 
        body: string, 
        jsonMetadata: any) {
            this.client.comment({
                parentAuthor, 
                parentPermlink, 
                author, 
                permlink, 
                title, 
                body,
                jsonMetadata,
                function(err: any, res: any) {
                    console.log(err, res)
                }
            })
    }

    dispatchLogin (callbackURL : string) {
        this.client.callbackURL = callbackURL
        window.location.replace(this.client.getLoginURL())
    }

}

/* Utils */
const handleLogin = (hivesigner: hivesignerService) =>
function (err: any, token: any) {
    if (err) {
        console.log(err)
        return err
    }
    hivesigner.client.setAccess(token)
    return token
}
