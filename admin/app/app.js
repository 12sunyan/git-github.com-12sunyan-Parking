'use strict';

// Declare app level module which depends on views, and components
angular.module('myParking', [
    'ngRoute'
    // , 'ngBaiduMap'
])
    .constant('baseUrl','http://112.74.62.114:8080/Entity/Udb7fe87147e10/SZLKD')
    .constant('baiduUrl','http://api.map.baidu.com/geocoder/v2/?callback=renderReverse&output=json&ak=nhB87EF7jEp0diMOOTjHkXYyHQwGKojT')
    .constant('bmapUrl','http://api.map.baidu.com/staticimage/v2?ak=nhB87EF7jEp0diMOOTjHkXYyHQwGKojT')
    .filter("myImageUrl", function(bmapUrl){
        return function(input){
            // var words = input.split(' ');
            return bmapUrl  + '&center=' + input.uu +','+ input.ii;
            // return bmapUrl  + '&center=' + input;
        }
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
            .when('/space',{
                templateUrl: 'templates/park-space.html',
                controller: 'SpaceCtrl'
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
