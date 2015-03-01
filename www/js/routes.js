var myApp = angular.module('app', ['ui.router']);

myApp.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/');

  $stateProvider
  .state('home', {
    url: '/',
    templateUrl: '../templates/home.html',
    controller: 'home'
  })
  .state('myEvents', {
    url: '/myEvents',
    templateUrl: '../templates/myEvents.html',
    // controller: 'myEvents'
  })
  .state('event', {
    url: '/event/:id',
    templateUrl: '../templates/event.html',
    // controller: 'event'
  })
  .state('createEvent', {
    url: '/createEvent',
    templateUrl: '../templates/createEvent.html',
    // controller: 'createEvent'
  })
  .state('matches', {
    url: '/matches',
    templateUrl: '../templates/matches.html',
    // controller: 'matches'
  })
  .state('chat', {
    url: '/chat',
    templateUrl: '../templates/chat.html',
    // controller: 'chat'
  })
  .state('matching', {
    url: '/matching',
    templateUrl: '../templates/matching.html',
    // controller: 'matching'
  })
  .state('search', {
    url: '/search',
    templateUrl: '../templates/search.html',
    // controller: 'search'
  })
  .state('editEvent', {
    url: '/editEvent',
    templateUrl: '../templates/editEvent.html',
    // controller: 'editEvent'
  })
  .state('profile', {
    url: '/profile',
    templateUrl: '../templates/profile.html',
    // controller: 'profile'
  });

}]);
