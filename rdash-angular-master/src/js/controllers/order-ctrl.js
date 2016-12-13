/**
 * Created by lulifei on 16/12/4.
 */
angular.module('RDash')
    .controller('OrderCtrl', ['$scope', '$cookieStore', OrderCtrl]);

function OrderCtrl($scope) {
    $scope.listshow = true;
    $scope.listMessage = '收起';
    $.ajax({
        // url: baseUrl +'/User/',
        url: 'http://112.74.62.114:8080/Entity/Udb7fe87147e10/SZLKD/Parkrecord/',
        method: 'GET',
        async: false,
        success: function (data) {
            if (data.Parkrecord) {
                $scope.rowCollection = data.Parkrecord;
                console.log($scope.rowCollection);
                // alert('success!');
            }
        }
    });


    $scope.changeView = function () {
        $scope.listshow = !$scope.listshow;
        if ($scope.listshow) {
            $scope.listMessage = '收起';
        }
        else {
            $scope.listMessage = '显示';
        }

    };


    $scope.search = function () {
        // alert(baseUrl);
        $.ajax({
            // url: baseUrl +'/User/',
            url: 'http://112.74.62.114:8080/Entity/Udb7fe87147e10/SZLKD/Parkrecord/',
            method: 'GET',
            async: false,
            success: function (data) {
                if (data.Parkrecord) {
                    $scope.rowCollection = data.Parkrecord;
                    console.log($scope.rowCollection);
                    alert('success!');
                }
            }
        });
    };
}