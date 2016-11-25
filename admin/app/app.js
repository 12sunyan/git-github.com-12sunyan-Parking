'use strict';

// Declare app level module which depends on views, and components
angular.module('myParking', [
  'ngRoute'
])
    .filter('unique', function() {
        return function (arr, field) {
            var o = {}, i, l = arr.length, r = [];
            for(i=0; i<l;i+=1) {
                o[arr[i][field]] = arr[i];
            }
            for(i in o) {
                r.push(o[i]);
            }
            return r;
        };
    })
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
}])
    .constant(baseUrl,'http://112.74.62.114:8080/mngResource.html?userid=405418042935964&project=Udb7fe87147e10/SZLKD');
