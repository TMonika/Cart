'use strict';

// Declare app level module which depends on views, and components
angular.module('preFood', []).controller('FoodCtrl', ['$scope', function ($scope) {
  $scope.categories = [{'id':1,'name':'Pizza'},
                      {'id':2,'name':'Donuts'}];
  $scope.items = [{'id':1,'name':'Spicy Triple Tango', 'price':300, 'category': 'Pizza'},
                  {'id':2,'name':'Veg Feast', 'price':350, 'category': 'Pizza'},
                  {'id':3,'name':'Nutty', 'price':70, 'category': 'Donuts'},
                  {'id':4,'name':'Breakup-Party', 'price':80, 'category': 'Donuts'}];
  $scope.currentCategory = null;
  function setCurrentCategory(category) {
    $scope.currentCategory = category;
  }
  function isCurrentCategory(category) {
    return category && category.name == $scope.currentCategory;
  }
  $scope.setCurrentCategory = setCurrentCategory;
  $scope.isCurrentCategory = isCurrentCategory;
}]);
