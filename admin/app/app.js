'use strict';

// Declare app level module which depends on views, and components
angular.module('myParking', [
  'ngRoute'
])
    .config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
        $locationProvider.hashPrefix('!');
        $routeProvider
            .when('/home',{
                templateUrl: 'templates/home-page.html',
                controller: 'HomeCtrl'
            })
            .when('/order',{
                templateUrl: 'templates/park-order.html',
                controller: 'OrderCtrl'
            })
            .when('/user',{
                templateUrl: 'templates/user-manager.html',
                controller:'UserCtrl'
            })
            .when('／space',{
                templateUrl: 'templates/park-space.html',
                controller: 'SetCtrl'
            })
            .when('/lot',{
                templateUrl: 'templates/park-lot.html',
                controller: 'LotCtrl'
            })
            .when('/qrCode',{
                templateUrl: 'templates/qrcode.html',
                controller: 'QRCtrl'
            })
        .otherwise({redirectTo: '/home'});
}]);
