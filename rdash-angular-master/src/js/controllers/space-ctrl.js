/**
 * Created by lulifei on 16/12/4.
 */

angular.module('RDash')
    .controller('SpaceCtrl', ['$scope','$state','$stateParams', SpaceCtrl]);

function SpaceCtrl($scope,$state,$stateParams) {

    $scope.parkid = $stateParams.id;
    $scope.num = $stateParams.num;
    $scope.xnum = $stateParams.x;
    $scope.ynum = $stateParams.y;

    $scope.codeShow = false;
    $scope.listshow = false;
    $scope.listMessage = '显示';

    $scope.changeView = function () {
        $scope.listshow = !$scope.listshow;
        if ($scope.listshow) {
            $scope.listMessage = '收起';
        }
        else {
            $scope.listMessage = '显示';
        }

    };


    $scope.createSpace = function () {
        var i = 1, j = 1;
        console.log($scope.xnum +','+ $scope.ynum);
        for (i=1; i <= $scope.xnum; i++) {
            for (j=1; j <= $scope.ynum; j++) {
                var data = {
                    "parkid": $scope.parkid,
                    "isfull": 0,
                    "xpos": i,
                    "ypos": j
                };
                console.log(data);
                $.ajax({
                    // url: baseUrl +'/User/',
                    url: 'http://112.74.62.114:8080/Entity/Udb7fe87147e10/SZLKD/Parkspace/',
                    method: 'POST',
                    async: false,
                    data: JSON.stringify(data),
                    // headers: {'Content-Type': 'application/json'},
                    contentType: 'application/json',
                    success: function (data) {
                        if (data) {
                            console.log(data);
                            // alert('create space success!');
                        }
                    }
                });
            }
         }
         alert('创建完成');
    };


    $scope.search = function () {
        $scope.listshow = true;
        $scope.listMessage = '收起';
        // alert(baseUrl);
        $.ajax({
            // url: baseUrl +'/User/',
            url: 'http://112.74.62.114:8080/Entity/Udb7fe87147e10/SZLKD/Parkspace/?Parkspace.parkid='+ $scope.parkid,
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



    $scope.spaceqrCode =function(row){
        $state.go('qrCode',{id:row.id});
        console.log(row.id);
    }

}