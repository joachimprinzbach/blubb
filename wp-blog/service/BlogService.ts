/// <reference path="../../typings/jquery/jquery.d.ts" />

import {Post} from "wp-blog/Post";

export class BlogService {
	constructor() {
	}

	getPosts() {
        var api: string = "http://blog.joachimprinzbach.de/wp-json/posts";
        var posts: Array<Post> = [];
        $.getJSON(api, function(data: any[]){
            data.forEach((post) => {
                posts.push(new Post(post.title, post.content, post.ID));
            })
        });
        return posts;
	}
}