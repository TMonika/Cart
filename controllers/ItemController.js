(function () {
	angular.module("firstApp")
		.config(function($routeProvider) {
			$routeProvider.when('/dresses/:id', {
				templateUrl: 'templates/dress.html',
				controller: 'ItemController'
			}).when('/cart', {
				templateUrl: 'templates/cart.html',
				controller: 'CartController'
			});
		}).controller('ItemController', ['$scope', '$http', '$routeParams', function ($scope, $http, $routeParams) {
			$scope.dId = $routeParams.id;
			$scope.add = function (dressId) {
				var dress = $scope.dresses[dressId-1];
				var kart = $scope.cartItems;
				var exists;
				kart.forEach(function (data) {
					if (data.id == dressId) {
						var i = $scope.cartItems.indexOf(data);
						$scope.cartItems.splice(i,1);
						$scope.dresses[dressId-1]['quantity']++;
						dress = $scope.dresses[dressId-1];
					}
				});
				$scope.cartItems.push(dress);
				console.log($scope.cartItems);
			}
			$scope.remove = function (dress) {
				$scope.message = 'Product successfully removed from cart';
				var index = $scope.cartItems.indexOf(dress);
				if (index>=0) {
					$scope.cartItems.splice(index, 1);
					$('#product_' + dress.id).text($scope.message);
					$('#product_' + dress.id).addClass("text-warning");
				}
				console.log($scope.cartItems);
			}
		}]);
})();