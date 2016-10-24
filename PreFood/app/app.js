'use strict';

// Declare app level module which depends on views, and components
angular.module('preFoodModule', ['ngRoute', 'PizzaModule', 'CartModule'])
        .controller('FoodCtrl', ['$scope', '$http', function ($scope, $http) {
            $scope.categories = [{'id': 1, 'name': 'Pizza'},
                {'id':2, 'name': 'Donuts'}];
            $scope.currentCategory = null;
            $scope.cartItems = [];
            function getItems(category) {
                $scope.currentCategory = category;
                var url = './json/' + category.name + '.json';
                $http.get(url).then(function (response) {
                    $scope.items = response.data.items;
                    if(category.name === 'Pizza')
                        $scope.Pizzas = $scope.items;
                    else
                        $scope.Donuts = $scope.items;
                });
            }
            function isCurrentCategory(category) {
                return category && category.name == $scope.currentCategory;
            }
            $scope.getItems = getItems;
            $scope.isCurrentCategory = isCurrentCategory;
        }]);
