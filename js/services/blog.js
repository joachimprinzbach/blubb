(function () {
	'use strict';
	angular
		.module('blog')
		.factory('blog', blog);

	function blog($resource) {

		var Blog = $resource('http://blog.joachimprinzbach.de/wp-json/posts?filter[orderby]=date&filter[posts_per_page]=3');

		function getBlog() {
			return Blog.query().$promise.then(
				function (results) {
					return results;
				}, function (error) {
					console.log(error);
			});
		}

		return {
			getBlog: getBlog
		}

	}
})();