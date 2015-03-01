var myApp = angular.module('app');

myApp.controller('home', ['$scope', '$http', function($scope, $http) {
  $scope.working = "Angular is working!";

  $http.get('/events').success(function(data, status, headers, config) {
    console.log('data ', data);
    $scope.events = data;
  });
}]);
