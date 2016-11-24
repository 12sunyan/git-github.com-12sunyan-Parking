angular.module('parking').controller('RegisterCtrl', function ($location,$state, $scope, $http,baseUrl, port, entity) {
  $scope.user = {};
  $scope.register = function() {
    console.log($scope.user);
    $scope.user.money = 0;
    var reqAdd = {
      method: 'POST',
      url: baseUrl+port+entity+'user/',
      headers: {'Content-Type': 'application/json'},
      crossDomain: true,
      data: JSON.stringify($scope.user)
    };
    $http(reqAdd).then(function(res){
      console.log(res);
    	alert("注册成功");
      $state.go('login');
    });
  }
  /*function isphone(obj){
    var reg=/^1[0-9]{10}/;
      // if(!reg.test(obj.value)){
      //   return false;
      // }
      if(obj == null || obj.length!=11 || !obj.match(reg)){
        return false;
      }
      return true;
  }*/
});