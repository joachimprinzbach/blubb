(function () {
	'use strict';
	angular
		.module('blog')

		.factory('blog', blog)

		.$inject = ['$resource'];

	/* @ngInject */
	function blog($resource) {

		var service = {
			getBlog: getBlog,
			subscribe: subscribe
		};

		return service;

		function getBlog() {
			var BlogPosts = $resource('http://blog.joachimprinzbach.de/wp-json/posts?filter[orderby]=date&filter[posts_per_page]=8');
			return BlogPosts.query().$promise.then(
				function (results) {
					return results;
				}, function (error) {
					console.log(error);
			});
		}


		function subscribe(email) {
			var BlogSubscribe = $resource('http://blog.joachimprinzbach.de/wp-json/users');
			var ab1 = new BlogSubscribe();
			ab1.username = email;
			ab1.name = email;
			ab1.password = email;
			ab1.email = email;
			ab1.$save();
		}

	}
})();