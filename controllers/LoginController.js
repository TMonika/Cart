(function () {
	angular.module("firstApp")
		.controller('LoginController', function($scope, $http, $routeParams) {
			$scope.cartItems = [];
			$http.get('./json/users.json').then(function(response) {
				$scope.users = response.data.users;
			});
			$scope.login = function () {
				var users = $scope.users;
				users.forEach(function(data) {
					if (data.email == $scope.email && data.password == $scope.password) {
						$scope.logged = true;
						$scope.cart = true;
						$http.get('./json/dresses.json').then(function (response) {
							$scope.dresses = response.data.dresses;
						});
						$('body').css({'background-image': ""});
					}
					else if (data.email != $scope.email || data.password != $scope.password) {
						$scope.loginMessage = "Email Id or password didn't match";
					}
				});
			}
			$scope.register = function () {
				$scope.email = '';
				$scope.password = '';
				$scope.loginMessage = "Yet to be implemented";
			}
		});
})();
