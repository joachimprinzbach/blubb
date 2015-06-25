(function () {

	'use strict';

	angular
		.module('blog')

		.controller('BlogEntry', BlogEntry)

		.$inject = ['blog'];

    /* @ngInject */
	function BlogEntry(blog) {
		var vm = this;

		vm.blogentries = [];
		vm.email = '';
		vm.page = 1;

		blog.getBlog(vm.page).then(function (results) {
			vm.blogentries = results;
			vm.showspinner = 'show';
		}, function (error) {
			console.log(error);
		});

		vm.loadMoreResults = function () {
			vm.page++;
			blog.getBlog(vm.page).then(function (results) {
				vm.blogentries = vm.blogentries.concat(results);
			}, function (error) {
				console.log(error);
			});

		};

		vm.go = function() {
			blog.subscribe(vm.email);
		}

	}
})();