(function () {
	angular.module("firstApp", ["ngRoute"])
		.config(function($routeProvider) {
			$routeProvider.when('/results', {
				templateUrl: 'templates/results.html',
				controller: 'ListController'
			}).when('/', {
				templateUrl: 'templates/search.html',
				controller: 'SearchController'
			}).otherwise({
				redirectTo: '/'
			});
		}).directive('myForm', function () {
			return {
				restrict: 'E',
				templateUrl: 'templates/my-form.html'
			};
		});
})();