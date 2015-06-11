(function () {
	'use strict';
	angular
		.module('blog')
		.factory('blog', blog);

	function blog($resource) {

		var BlogPosts = $resource('http://blog.joachimprinzbach.de/wp-json/posts?filter[orderby]=date&filter[posts_per_page]=3');

		function getBlog() {
			return BlogPosts.query().$promise.then(
				function (results) {
					return results;
				}, function (error) {
					console.log(error);
			});
		}

		var BlogSubscribe = $resource('http://blog.joachimprinzbach.de/wp-json/users');

		function subscribe(email) {
			var ab1 = new BlogSubscribe();
			ab1.username = email;
			ab1.name = email;
			ab1.password = email;
			ab1.email = email;
			ab1.$save();
		}

		return {
			getBlog: getBlog,
			subscribe: subscribe
		}

	}
})();