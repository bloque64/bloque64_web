import postModel from "../models/postModel";

/* export function dict_constructor_dec (target : any, propertype : string, descriptor : PropertyDescriptor)
{
    const originalMethod  = descriptor.value;
    descriptor.value = function (...args : any[]): postModel[]{
        const discussion_info = originalMethod.apply(this, args);
        const metadata = JSON.parse(discussion_info['json_metadata'])
        const discussion_posts = discussion_info.map((post: { [x: string]: any }) => <postModel> { 
            comments_number: post['children'],
            upvotes: post['active_votes'].length,
            title: post['title'],
            authorperm: post['authorperm'],    
            introductory_text: post['desc'],
            permlink : post['permlink'],
            url_img_list: metadata['image'],
            author : post['author'],
            tags : post['tags'],
            external_links: metadata['links'] ,
            mentioned_users: metadata['users'],
            main_tag : metadata['tags'][0],
            date: post['created'].split('T')[0]
             })
        return discussion_posts;                 
    }        
} */

export function dict_constructor (response_data: any)
{        
        
    const discussion_posts = response_data.map(( post: { [x: string]: any }) => <postModel> {
        comments_number: post['children'],
        upvotes: post['active_votes'].length,
        title: post['title'],
        authorperm: post['authorperm'],
        introductory_text: post['desc'],
        permlink : post['permlink'],
        url_img_list: JSON.parse(post['json_metadata'])['image'],
        author : post['author'],
        tags : JSON.parse(post['json_metadata'])['tags'],
        external_links: JSON.parse(post['json_metadata'])['links'],
        mentioned_users: JSON.parse(post['json_metadata'])['users'],
        main_tag : JSON.parse(post['json_metadata'])['tags'][0],
        date: post['created'].split('T')[0],
        pending_token: Number (post['pending_token'].toString().slice(0, post['pending_token'].toString().length -8) + "." + post['pending_token'].toString().slice(post['pending_token'].toString().length - 8, post['pending_token'].toString().length -6)),
        body: undefined
         })
    return discussion_posts;
}
