angular.module('parking').controller('ParkingCtrl',function ($scope, $http, $state, $timeout,$cordovaBarcodeScanner,baseUrl, port, entity) {
	$scope.getin = function(){
		$cordovaBarcodeScanner.scan().then(function(imageData) {
			alert(imageData.text);
			console.log("Barcode Format -> " + imageData.format);
			console.log("Cancelled -> " + imageData.cancelled);
		}, function(error) {
			console.log("An error happened -> " + error);
		});
	}
	$scope.leave = function(){

	}
	$scope.search = function(){
      alert("开始定位");
      var map = new BMap.Map("allmap");
      map.centerAndZoom(new BMap.Point(116.331398,39.897445),11);
      map.setCurrentCity("上海");
      map.enableScrollWheelZoom(true);
	  baidu_location.getCurrentPosition(function(data){
	       /*alert(data);*/
	    console.log(data);
	    alert(data);
	    $scope.data=data;
	    $rootScope.team=data;
	  }, function(err){
	    alert("错误："+err)
	  });
	}
	$scope.tirarFoto = function(){
      /*alert("开始定位");*/
      var map = new BMap.Map("allmap");
      map.centerAndZoom(new BMap.Point(116.331398,39.897445),11);
      map.enableScrollWheelZoom(true);

      baidu_location.getCurrentPosition(function(data){
       /*alert(data);*/
       console.log(data);
       $scope.data=data;
       //$rootScope.team=data;
    }, function(err){
      alert("错误："+err)
    });

    };
});