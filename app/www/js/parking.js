angular.module('parking').controller('ParkingCtrl',function ($scope, $http, $state, $timeout,$cordovaBarcodeScanner) {
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
});