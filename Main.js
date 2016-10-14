(function () {
	angular.module("firstApp", ["ngRoute"])
		.config(function($routeProvider) {
			$routeProvider.when('/dashboard', {
				templateUrl: 'templates/dashboard.html',
				controller: 'ItemController'
			}).when('/register', {
				templateUrl: 'templates/register.html'
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