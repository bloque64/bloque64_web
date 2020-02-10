export default class postModel{
    postId: Number;
    upvotes: Number;
    title: String;
    authorperm: String;
    headline: String;
    text: String;
    url_img_list: Array<String>

    constructor(postId : Number, upvotes: Number, 
        title: String, authorperm: String, headline: String, 
        text: String, url_img_list: Array <String>)
        {
            this.postId = postId;
            this.upvotes = upvotes;
            this.title = title;
            this.authorperm = authorperm;
            this.headline = headline;
            this.text = text;
            this.url_img_list = url_img_list
        }
    
        
}