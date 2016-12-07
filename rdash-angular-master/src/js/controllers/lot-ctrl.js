/**
 * Created by lulifei on 16/12/4.
 */
angular.module('RDash')
    .controller('LotCtrl', ['$scope', '$cookieStore', LotCtrl]);

function LotCtrl($scope,$state,$location) {
    $scope.listshow = false;
    $scope.listMessage = '显示';

    $scope.changeView = function(){
        $scope.listshow = ! $scope.listshow;
        if($scope.listshow ){
            $scope.listMessage = '收起';
        }
        else{
            $scope.listMessage = '显示';
        }

    };

    $scope.search = function () {
        $scope.listshow = true;
        $scope.listMessage = '收起';
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

    $scope.deleteLot = function(row){
        $.ajax({
            url: 'http://112.74.62.114:8080/Entity/Udb7fe87147e10/SZLKD/Parklot/'+ row.id,
            method: 'DELETE',
            async: false,
            success: function (data) {
                alert(' delete success');
                if (data.message) {
                    console.log(data);
                    alert('success!');
                }
            }
        }).done(function () {
            // $state.reload();
            var index = $scope.rowCollection.indexOf(row);
            if (index !== -1) {
                $scope.rowCollection.splice(index, 1);
            }
          //刷新页面  window.location.reload();
        })
    }

}

