angular.module('parking').controller('RegisterCtrl', function ($location,$state, $scope, $http) {
  $scope.register = function() {
  	alert("注册成功");
    $state.go('login');
  }
  function isphone(obj){
    var reg=/^1[0-9]{10}/;
      // if(!reg.test(obj.value)){
      //   return false;
      // }
      if(obj == null || obj.length!=11 || !obj.match(reg)){
        return false;
      }
      return true;
  }
});