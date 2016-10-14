(function () {
	angular.module("firstApp")
		.controller('CartController', function($scope, $http) {
			$scope.pay = function (item) {
			}
			$scope.cartRemove = function (item) {
				var index = $scope.cartItems.indexOf(item);
				if (index>=0) {
					$scope.cartItems.splice(index, 1);
				}
			}
			$scope.incrementQuantity =function (dressId) {
				var newQuantity = $('#quantity_' + dressId).val() + 1;
				$('#quantity_' + dressId).val(newQuantity);
			}
			$scope.binded = function (item1) {
				console.log("EX:", item1.quantity);
			}
		});
})();