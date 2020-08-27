type postModel =
{
    comments_number: number,
    pending_token: number,
    upvotes: number,
    title: string,
    authorperm: string,
    introductory_text: string,
    permlink : string,
    url_img_list: string[],
    author : string,
    tags : string[],
    external_links: string[],
    mentioned_users: string[],
    main_tag : string,
    date: Date,
    body: string | undefined
} | null

export default postModel
