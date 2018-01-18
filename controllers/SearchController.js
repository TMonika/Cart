(function () {
	angular.module("firstApp")
		.controller('SearchController', function($scope, $http, $routeParams) {
			$scope.results = [
        { id: 1, name: "One" },
        { id: 2, name: "Two" }
      ];
			$scope.search = function () {
        $http.get('./json/dresses.json').then(function (response) {
          $scope.results = response.data;
        });
			}
		});
})();
