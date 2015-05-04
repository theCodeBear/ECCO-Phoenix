var myApp = angular.module('ecco');

myApp.controller('event', ['$scope', '$stateParams', '$http', '$location', function($scope, $stateParams, $http, $location) {
  $http.get('/event/'+$stateParams.id).success(function(data, status, headers, config) {
    $scope.event = data.event;
    $scope.user = data.user;
    $scope.attending = searchEventForUser($scope.event, $scope.user._id);
  }).error(function(data, status, headers, config) {
    console.log("ERROR");
  });

  $scope.attend = function() {
    $http.post('/event/' + $scope.event._id).success(function(data, status, headers, config) {
      // window.location = '/';
      $scope.user = data.user;
      $scope.event = data.event;
      $scope.attending = searchEventForUser($scope.event, $scope.user._id);
    }).error(function(data, status, headers, config) {
      console.log('Error', status);
    });
  }
}]);

function searchEventForUser(event, userId) {
  var result= false;
  event.attendees.forEach(function(person) {
    if (person._id === userId)
      result = true;
  });
  return result;
}
