(function () {

	'use strict';

	angular
		.module('blog')
		.controller('BlogEntry', BlogEntry);

	function BlogEntry(blog) {

		var vm = this;

		vm.blogentries = [];

		blog.getBlog().then(function (results) {
			vm.blogentries = results;
		}, function (error) {
			console.log(error);
		});

	}
})();