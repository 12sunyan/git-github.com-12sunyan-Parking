angular.module('parking').controller('MainCtrl', function ($cacheFactory,$location,$scope,$http,$state) {
  $scope.user = $scope.currentUser;
  //console.log($scope.currentUser.account.headURL);
});
