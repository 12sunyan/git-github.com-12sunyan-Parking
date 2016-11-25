/**
 * Created by lulifei on 16/11/24.
 */

'use strict';

angular.module('myParking')
.controller('HomeCtrl',function () {

})
.controller('OrderCtrl',function () {

})
.controller('LotCtrl',function () {

})
.controller('SpaceCtrl',function () {

})
.controller('UserCtrl',function () {

})
.controller('QRCtrl',function ($scope,$http) {
    $scope.getCodeImg = function () {
        if($scope.myCode){
            //二维码生成可以采用jQuery插件直接生成，中间加入字符串就行
            jQuery('#qrcode').qrcode($scope.myCode);
            console.log( $scope.myCode);
        }
        else
            alert("输入不能为空");
    };

    // var getCode = {
    //     method: 'GET',
    //     url: '/api/clazzs/' + $scope.currentClass.$id + '/invitationCode ',
    //     headers: {
    //         'Access-Token': localStorage['accessToken']
    //     }
    // };
    // $http(getCode).then(function(res) {
    //     $scope.currentSet.qrcode = res.data.data;
    //     $scope.currentSet.qrimg='http://qr.liantu.com/api.php?text='+res.data.data;
    //     //console.log( $scope.currentClass.qrcode);
    // });
});