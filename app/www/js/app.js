// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('parking', ['ionic','ngCordova'])
.constant('baseUrl', 'http://115.28.28.219:')

.constant('port', '8080')

.constant('entity','/Entity/U645b6e6328a4/SZLKD/')

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider.state('main', {
      url: '/main',
      controller: 'MainCtrl',
      templateUrl: 'templates/main.html',
  }).state('main.home', {
      url: '/home',
      views: {
      'home': {
        controller: 'HomeCtrl',
        templateUrl: 'templates/home.html'
      }
    }
  }).state('main.list', {
      url: '/list',
      views: {
        'list': {
          controller: 'ListCtrl',
          templateUrl: 'templates/list.html'
        }
      }
  }).state('main.parking', {
      url: '/parking',
      views:{
        'parking':{
          controller: 'ParkingCtrl',
          templateUrl: 'templates/parking.html'
        }
      }
  }).state('login', {
      url: '/login',
      controller: 'LoginCtrl',
      templateUrl: 'templates/login.html',
  }).state('register', {
      url: '/register',
      controller: 'RegisterCtrl',
      templateUrl: 'templates/register.html',
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/login');

});
