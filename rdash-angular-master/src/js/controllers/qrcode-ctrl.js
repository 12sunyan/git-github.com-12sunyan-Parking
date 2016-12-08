/**
 * Created by lulifei on 16/12/4.
 */

angular.module('RDash')
    .controller('QRCtrl', ['$scope','$stateParams',QRCtrl]);



function QRCtrl($scope,$stateParams) {

    var id = $stateParams.id;
    console.log(id);


    $scope.init = function () {

        var qrcode = new QRCode(document.getElementById("qrcode"));
        qrcode.makeCode(id.toString());
    };

}



