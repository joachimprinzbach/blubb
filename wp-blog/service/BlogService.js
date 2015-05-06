/// <reference path="../../typings/jquery/jquery.d.ts" />
var Post_1 = require("wp-blog/Post");
var BlogService = (function () {
    function BlogService() {
    }
    BlogService.prototype.getPosts = function () {
        var api = "http://blog.joachimprinzbach.de/wp-json/posts";
        var posts = [];
        $.getJSON(api, function (data) {
            data.forEach(function (post) {
                posts.push(new Post_1.Post(post.title, post.content, post.ID));
            });
        });
        return posts;
    };
    return BlogService;
})();
exports.BlogService = BlogService;
