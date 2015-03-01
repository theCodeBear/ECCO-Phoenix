var myApp = angular.module('ecco');

myApp.controller('home', ['$scope', '$http', function($scope, $http) {
  $scope.working = "Angular is working!";

  $http.get('/events').success(function(data, status, headers, config) {
    // console.log('data ', data);
    data.forEach(function(event) {
      event.summary = event.description.substring(0,150) + '...';
    });
    $scope.events = data;
    // console.log('data ', data);
  }).error(function(data, status, headers, config) {
    console.log("ERROR");
  });
}]);
