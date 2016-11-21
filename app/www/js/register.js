angular.module('parking').controller('RegisterCtrl', function ($location,$state, $scope, $http) {
  $scope.register = function() {
  	alert("注册成功");
    $state.go('login');
  }
});