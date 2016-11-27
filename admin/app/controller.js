/**
 * Created by lulifei on 16/11/24.
 */

'use strict';

angular.module('myParking')
    .filter("unique", function() {
        return function (arr, field) {
            var o = {}, i, l = arr.length, r = [];
            for(i=0; i<l;i+=1) {
                o[arr[i][field]] = arr[i];
            }
            for(i in o) {
                r.push(o[i]);
            }
            return r;
        };
    })
.controller('HomeCtrl',function () {

})
.controller('OrderCtrl',function () {

})
.controller('LotCtrl',function ($scope,$http,baiduUrl) {

    //该函数获取指定经纬度的可读地址，跨域访问错
    $scope.getAddr = function () {
        if (!$scope.longitude || !$scope.latitude)
            alert("经度和纬度需要指定");
        else {
            var reqAdd = {
                method: 'GET',
                url: baiduUrl + '&location=' + $scope.longitude + ',' + $scope.latitude
                // header: 'Content-Type:text/javascript;charset=utf-8'
            };
            $http(reqAdd)
                .success(function (data, config, status) {

                    if (data.result.formatted_address) {
                        $scope.address = data.result.formatted_address;
                        // console.log($scope.rowCollection);
                        alert('success!');
                    }
                    else {
                        alert('error');
                    }
                }).error(function (res) {
                alert('网络错误');
            });
        }
    }

})
.controller('SpaceCtrl',function () {

    // function initialize() {
        var mp = new BMap.Map('map');
        mp.centerAndZoom(new BMap.Point(121.491, 31.233), 11);
    // }

    // function loadScript() {
    //     var script = document.createElement("script");
    //     script.src = "http://api.map.baidu.com/api?v=2.0&ak=nhB87EF7jEp0diMOOTjHkXYyHQwGKojT&callback=initialize";//此为v2.0版本的引用方式
    //     document.body.appendChild(script);
    // }
    //
    // window.onload = loadScript;


})
.controller('UserCtrl',function ($scope,$filter,$http,baseUrl) {
    $scope.search = function(){
        $scope.rowCollection = [];
        var reqAdd = {
            method: 'GET',
            url: baseUrl + '/User/'
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
            alert('网络错误' );
        });
    };
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