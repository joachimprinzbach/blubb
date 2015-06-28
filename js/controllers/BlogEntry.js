(function () {

	'use strict';

	angular
		.module('blog')

		.controller('BlogEntry', BlogEntry);

	BlogEntry.$inject = ['blog', 'localStorageService'];
	/* @ngInject */
	function BlogEntry(blog, localStorageService) {
		var vm = this;

		vm.blogentries = [];
		vm.email = '';
		vm.page = 1;
		vm.subscribeStatus = '';
		//vm.subscribed = localStorageService.get('subscribed');
		vm.subscribed = false;

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
			blog.subscribe(vm.email).then(function (result) {
				vm.subscribeStatus = 'Subscription erfolgreich! Du wirst ab sofort per Mail benachrichtigt, wenn es Neuigkeiten gibt!';
				localStorageService.set('subscribed', true);
				vm.subscribed = true;
			}, function (error) {
				vm.subscribeStatus = 'Es ist ein Fehler aufgetreten. Bitte pruefe die E-Mail Adresse und versuche es erneut.';
			});
		}

	}
})();