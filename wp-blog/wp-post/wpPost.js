/// <reference path="../../typings/angular2/angular2.d.ts" />
/// <reference path="../../typings/jquery/jquery.d.ts" />
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
var angular2_1 = require("angular2/angular2");
var WpPost = (function () {
    function WpPost() {
    }
    Object.defineProperty(WpPost.prototype, "post2", {
        set: function (post2) {
            this.postRef = post2;
        },
        enumerable: true,
        configurable: true
    });
    WpPost.prototype.clearCompleted = function () {
        var id = '#' + this.postRef.id;
        $(id).html(this.postRef.text);
    };
    WpPost = __decorate([
        angular2_1.Component({
            selector: 'wp-post',
            properties: {
                'post': 'post-obj',
                'post2': 'post-obj2'
            }
        }),
        angular2_1.View({
            templateUrl: 'wp-blog/wp-post/view/wp-post.html'
        }), 
        __metadata('design:paramtypes', [])
    ], WpPost);
    return WpPost;
})();
exports.WpPost = WpPost;
