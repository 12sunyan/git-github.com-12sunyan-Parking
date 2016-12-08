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
                controller: 'LotCtrl',
                templateUrl: 'templates/park-lot.html'
            })
            .state('space',{
                url: '/space',
                controller: 'SpaceCtrl',
                templateUrl: 'templates/park-space.html',
                params: {'id':0,'num':0,'x':0,'y':0}
            })
            .state('order',{
                url: '/order',
                templateUrl: 'templates/park-order.html'
            })
            .state('qrCode',{
                url: '/qrCode',
                controller: 'QRCtrl',
                templateUrl: 'templates/qrcode.html',
                params: {'id':0}
            })
            .state('addlot',{
                url:'/addlot',
                controller: 'AddLotCtrl',
                templateUrl: 'templates/addlot.html'
            })
            .state('entry',{
                url:'/entry',
                controller: 'EntryCtrl',
                templateUrl: 'templates/park-entry.html',
                params:{'id':0}
            });
    }
]);