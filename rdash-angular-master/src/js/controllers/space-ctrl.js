/**
 * Created by lulifei on 16/12/4.
 */

angular.module('RDash')
    .controller('SpaceCtrl', ['$scope', '$cookieStore', SpaceCtrl]);

function SpaceCtrl($scope) {
    $scope.search = function () {
        // alert(baseUrl);
        $.ajax({
            // url: baseUrl +'/User/',
            url: 'http://112.74.62.114:8080/Entity/Udb7fe87147e10/SZLKD/Parkspace/',
            method: 'GET',
            async: false,
            success: function (data) {
                if (data.Parkspace) {
                    $scope.rowCollection = data.Parkspace;
                    console.log($scope.rowCollection);
                    alert('success!');
                }
            }
        });
    };


    $scope.pre_search = function () {
        $scope.rowCollection = [];
        var reqAdd = {
            method: 'GET',
            url: baseUrl + '/Parkspace/'
        };
        $http(reqAdd)
            .success(function (data, config, status) {
                if (data.Parkspace) {
                    $scope.rowCollection = data.Parkspace;
                    console.log($scope.rowCollection);
                    alert('success!');
                }
                else {
                    alert('error');
                }
            }).error(function (res) {
            alert('网络错误');
        });
    };
}