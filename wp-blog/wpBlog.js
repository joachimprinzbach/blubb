/// <reference path="../typings/angular2/angular2.d.ts" />
if (typeof __decorate !== "function") __decorate = function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
if (typeof __metadata !== "function") __metadata = function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var annotations_1 = require('angular2/annotations');
var angular2_1 = require('angular2/angular2');
var directives_1 = require('angular2/directives');
var BlogService_1 = require("wp-blog/service/BlogService");
var wpPost_1 = require("wp-blog/wp-post/wpPost");
var WpBlog = (function () {
    function WpBlog(blogService) {
        this.blogService = blogService;
        this.posts = blogService.getPosts();
    }
    WpBlog = __decorate([
        annotations_1.Component({
            selector: 'wp-blog',
            injectables: [
                BlogService_1.BlogService
            ]
        }),
        annotations_1.View({
            templateUrl: 'wp-blog/view/wp-blog.html',
            directives: [wpPost_1.WpPost, directives_1.For]
        }), 
        __metadata('design:paramtypes', [BlogService_1.BlogService])
    ], WpBlog);
    return WpBlog;
})();
angular2_1.bootstrap(WpBlog);
