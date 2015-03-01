var myApp = angular.module('ecco');

myApp.controller('event', ['$scope', '$stateParams', '$http', function($scope, $stateParams, $http) {
  $http.get('/event/'+$stateParams.id).success(function(data, status, headers, config) {
    $scope.event = data;
  }).error(function(data, status, headers, config) {
    console.log("ERROR");
  });

  $scope.attend = function() {
    console.log($scope.event._id);
    $http.post('/event/' + $scope.event._id).success(function(data, status, headers, config) {
      console.log('Succeded', status);
      window.location = '/';
    }).error(function(data, status, headers, config) {
      console.log('Erro', status);
    });
  }
}]);
