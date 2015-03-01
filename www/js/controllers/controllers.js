var myApp = angular.module('app');

myApp.controller('home', ['$scope', function($scope) {
  $scope.working = "Angular is working!";
}]);
