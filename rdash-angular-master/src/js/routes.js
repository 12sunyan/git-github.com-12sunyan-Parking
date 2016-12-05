'use strict';

/**
 * Route configuration for the RDash module.
 */
angular.module('RDash').config(['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {

        // For unmatched routes
        $urlRouterProvider.otherwise('/');

        // Application routes
        $stateProvider
            .state('index',{
                url: '/',
                templateUrl: 'templates/dashboard.html'
            })
            .state('tables',{
                url: '/tables',
                templateUrl: 'templates/tables.html'
            })
            .state('user', {
                url: '/user',
                templateUrl: 'templates/user-manager.html'
            })
            .state('lot',{
                url: '/lot',
                templateUrl: 'templates/park-lot.html'
            })
            .state('space',{
                url: '/space',
                templateUrl: 'templates/park-space.html'
            })
            .state('order',{
                url: '/order',
                templateUrl: 'templates/park-order.html'
            })
            .state('qrCode',{
                url: '/qrCode',
                templateUrl: 'templates/qrcode.html'
            })
            .state('map',{
                url:'/map',
                templateUrl: 'templates/baiduMap.html'
            });
    }
]);