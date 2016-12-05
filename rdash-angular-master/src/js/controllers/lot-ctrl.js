/**
 * Created by lulifei on 16/12/4.
 */
angular.module('RDash')
    .controller('LotCtrl', ['$scope', '$cookieStore', LotCtrl]);

function LotCtrl($scope) {
    $scope.search = function () {
        // alert(baseUrl);
        $.ajax({
            // url: baseUrl +'/User/',
            url: 'http://112.74.62.114:8080/Entity/Udb7fe87147e10/SZLKD/Parklot/',
            method: 'GET',
            async: false,
            success: function (data) {
                if (data.Parklot) {
                    $scope.rowCollection = data.Parklot;
                    console.log($scope.rowCollection);
                    alert('success!');
                }
            }
        });
    };

    $scope.pre_search = function(){
        $scope.rowCollection = [];
        var reqAdd = {
            method: 'GET',
            url: baseUrl + '/Parklot/'
        };
        $http(reqAdd)
            .success(function (data, config, status) {
                if (data.Parklot) {
                    $scope.rowCollection = data.Parklot;
                    console.log($scope.rowCollection);
                    alert('success!');
                }
                else {
                    alert('error');
                }
            }).error(function (res) {
            alert('网络错误' );
        });
    };

}
