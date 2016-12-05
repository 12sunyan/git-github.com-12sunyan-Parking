/**
 * Created by lulifei on 16/12/4.
 */

angular.module('RDash')
    .controller('UserCtrl', ['$scope', '$cookieStore', UserCtrl]);


function UserCtrl($scope,baseUrl) {

    $scope.showAlert = true;
    $scope.closeAlert = function() {
       $scope.showAlert = false;
    };
    // var baseUrl = 'http://112.74.62.114:8080/Entity/Udb7fe87147e10/SZLKD';
    //can't identify http as a function
    $scope.searchUser = function() {
        $scope.rowCollection = [];
        var reqAdd = {
            method: 'GET',
            url: baseUrl+ '/User/'
        };
        $http(reqAdd)
            .success(function (data, config, status) {
                if (data.User) {
                    $scope.rowCollection = data.User;
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

    $scope.searchTest = function () {
        // alert(baseUrl);
        $.ajax({
            // url: baseUrl +'/User/',
            url: 'http://112.74.62.114:8080/Entity/Udb7fe87147e10/SZLKD/User/',
            method: 'GET',
            async: false,
            success: function (data) {
                    if (data.User) {
                        $scope.rowCollection = data.User;
                        console.log($scope.rowCollection);
                        alert('success!');
                }
            }
        });
    }



}