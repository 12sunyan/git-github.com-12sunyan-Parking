/**
 * Created by lulifei on 16/12/8.
 */
/**
 * Created by lulifei on 16/12/4.
 */

angular.module('RDash')
    .controller('EntryCtrl', ['$scope','$state','$stateParams', EntryCtrl]);

function EntryCtrl($scope,$state,$stateParams) {

    $scope.parkid = $stateParams.id;
    console.log($scope.parkid);
    console.log($scope.entryx);
    console.log($scope.entryy);

    $scope.createEntry = function () {
        alert('enter entry create function');
        if( !$scope.entryx || !$scope.entryy) {
            alert('输入数据不能为空');
        }
        else {
            var data = {
                "parkid": $scope.parkid,
                "x": $scope.entryx,
                "y": $scope.entryy

                // "x": parseInt($scope.newentry.x),
                // "y": parseInt($scope.newentry.y)
            };
            console.log(data);
            $.ajax({
                // url: baseUrl +'/User/',
                url: 'http://112.74.62.114:8080/Entity/Udb7fe87147e10/SZLKD/Parkentry/',
                method: 'POST',
                async: false,
                data: JSON.stringify(data),
                // headers: {'Content-Type': 'application/json'},
                contentType: 'application/json',
                success: function (data) {
                    if (data) {
                        console.log(data);
                        alert('create entry success!');
                    }
                }
            });
        }
    };


    $scope.search = function () {
        // alert(baseUrl);
        $.ajax({
            // url: baseUrl +'/User/',
            url: 'http://112.74.62.114:8080/Entity/Udb7fe87147e10/SZLKD/Parkentry/?Parkentry.parkid='+ $scope.parkid,
            method: 'GET',
            async: false,
            success: function (data) {
                if (data.Parkentry) {
                    $scope.rowCollection = data.Parkentry;
                    console.log($scope.rowCollection);
                    alert('success!');
                }
            }
        });
    };

    $scope.deleteEntry = function (row) {
        var txt;
        var r = confirm("确认删除？");
        if (r == true) {
            console.log('delete');

            $.ajax({
                url: 'http://112.74.62.114:8080/Entity/Udb7fe87147e10/SZLKD/Parkentry/' + row.id,
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
        else {
            console.log('cancel');
        }



    };

    $scope.entryCode =function(row){
        $state.go('qrCode',{id:row.id});
        console.log(row.id);
    }

}