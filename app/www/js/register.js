angular.module('parking').controller('RegisterCtrl', function ($location,$state, $scope, $http) {
  $scope.register = function() {
    $state.go('main.home');
  }
});