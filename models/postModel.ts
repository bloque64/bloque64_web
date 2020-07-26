type postModel =
{
    comments_number: Number,
    upvotes: Number,
    title: String,
    authorperm: String,
    introductory_text: String,
    permlink : String,
    url_img_list: String[],
    author : String,
    tags : String[],
    external_links: String[],
    mentioned_users: String[],
    main_tag : String,
    date: Date,
    body: string | undefined
}

export default postModel
