(function () {

	'use strict';

	angular
		.module('blog')
		.controller('BlogEntry', BlogEntry);

	function BlogEntry(blog) {

		var vm = this;

		vm.blogentries = [];
		vm.email = '';

		blog.getBlog().then(function (results) {
			vm.blogentries = results;
			vm.showspinner = 'show';
		}, function (error) {
			console.log(error);
		});

		vm.go = function() {
			blog.subscribe(vm.email);
		}

	}
})();