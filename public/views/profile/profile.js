var myApp = angular.module('ecco');

myApp.controller('profile', ['$scope', '$http', '$stateParams', function($scope, $http, $stateParams) {

  $http.get('/user/'+$stateParams.id).success(function(data, status, headers, config) {
    $scope.user = data;
    console.log('data', data);
  }).error(function(data, status, headers, config) {
    console.log('ERROR');
  });

  $scope.logout = function() {
    $http.post('/logout').success(function(data, status, headers, config) {
      console.log('Success', status);
    }).error(function(data, status, headers, config) {
      console.log('Error', status);
    });
  }
}]);
