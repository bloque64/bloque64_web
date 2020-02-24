import postModel from "~/models/postModel";

export function dict_constructor (target : any, propertype : string, descriptor : PropertyDescriptor)
{
    const originalMethod  = descriptor.value;
    descriptor.value = function (...args : any[]): postModel[]{
        const discussion_info = originalMethod.apply(this, args);
        const discussion_posts = discussion_info.map((post: { [x: string]: any }) => <postModel> { 
            comments_number: post['children'],
            upvotes: post['active_votes'].length,
            title: post['title'],
            authorperm: post['authorperm'],    
            introductory_text: post['desc'],
            permlink : post['permlink'],
            url_img_list: post['json_metadata']['image'],
            author : post['author'],
            tags : post['tags'],
            external_links: post['json_metadata']['links'] ,
            mentioned_users: post['json_metadata']['users'],
            main_tag : post['tags'][0],
             })
        return discussion_posts;                 
    }        
}
