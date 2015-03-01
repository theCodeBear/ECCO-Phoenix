var myApp = angular.module('ecco');

myApp.controller('event', ['$scope', '$stateParams', '$http', function($scope, $stateParams, $http) {
  console.log($stateParams.id);
  $http.get('/event/'+$stateParams.id).success(function(data, status, headers, config) {
    // console.log(data);
    $scope.event = data;
  }).error(function(data, status, headers, config) {
    console.log("ERROR");
  });
}]);