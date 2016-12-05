/**
 * Created by lulifei on 16/12/4.
 */

angular.module('RDash')
    .controller('QRCtrl', ['$scope', '$cookieStore',QRCtrl]);

function QRCtrl($scope) {
    $scope.getCodeImg = function () {
        if ($scope.myCode) {
            //二维码生成可以采用jQuery插件直接生成，中间加入字符串就行
            jQuery('#qrcode').qrcode($scope.myCode);
            console.log($scope.myCode);
        }
        else
            alert("输入不能为空");
    };
}