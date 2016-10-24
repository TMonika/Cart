angular.module('PizzaModule', ['ngRoute'])
        .config(function ($routeProvider) {
            $routeProvider.when('/Pizza/:id', {
                templateUrl: './view/Pizza.html',
                controller: 'PizzaCtrl'
            });
            $routeProvider.when('/Donuts/:name', {
                templateUrl: './view/Donuts.html',
                controller: 'DonutsCtrl'
            });
        })
        .controller('PizzaCtrl', ['$scope', '$routeParams', '$controller', function (scope, routeParams, controller) {
            var FoodScope = scope.$new();
            controller('FoodCtrl', {$scope: FoodScope});
            scope.id = routeParams.id;
            console.log("Pizza : ", scope.id, FoodScope.Pizzas);
            scope.item = FoodScope.Pizzas[scope.id - 1];
        }]);