/// <reference path="../../typings/angular2/angular2.d.ts" />
/// <reference path="../../typings/jquery/jquery.d.ts" />

import {Component,View} from "angular2/angular2";
import {Post} from "wp-blog/Post";

@Component({
    selector: 'wp-post',
    properties: {
        'post' : 'post-obj',
        'post2' : 'post-obj2'
    }
})

@View({
    templateUrl: 'wp-blog/wp-post/view/wp-post.html'
})

export class WpPost {

    postRef: Post;

    constructor() {
    }

    set post2(post2) {
        this.postRef = post2;
    }

    clearCompleted() {
        var id = '#' + this.postRef.id;
        $(id).html(this.postRef.text);
    }


}


