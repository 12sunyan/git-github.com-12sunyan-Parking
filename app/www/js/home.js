angular.module('parking')
    .controller('HomeCtrl',
        function ($scope, $http, $state, $timeout) {
            /*$scope.$watch('currentUser', function () {
                if ($scope.currentUser) {
                    $scope.user = {
                        nickname: $scope.currentUser.nickname,
                        tel: $scope.currentUser.tel,
                        zip: $scope.currentUser.zip,
                        address: $scope.currentUser.address,
                        money:$scope.currentUser.account.money
                    };
                    var address = $scope.currentUser.address;
                    var addstrs = address.split(" ");
                    if(addstrs.length!=0){
                        if(addstrs.length==1){
                            $scope.p = addstrs[0];
                        }
                        else{
                            if(addstrs.length==2){
                                $scope.p = addstrs[0];
                                $scope.c = addstrs[1];
                            }
                            else{
                                if(addstrs.length==3){
                                    $scope.p = addstrs[0];
                                    $scope.c = addstrs[1];
                                    $scope.a = addstrs[2];
                                }
                                else{
                                    $scope.p = addstrs[0];
                                    $scope.c = addstrs[1];
                                    $scope.a = addstrs[2];
                                    $scope.d = addstrs[3];                                    
                                }
                            }
                        }
                    }
                    $scope.submit = function () {
                            var data = {
                                "nickname": $scope.user.nickname,
                                "zip": $scope.user.zip,
                                "address": $scope.user.address,
                                "tel":$scope.user.tel,
                            };
                            var reqAdd = {
                                method: 'PUT',
                                url: '/api/customer/update',
                                data: data
                            };
                            $http(reqAdd).then(function (res) {
                                alert('修改成功');
                                $scope.currentUser=res.data.data;
                                console.log($scope.currentUser);
                                coverAuth.setCurrentUser($scope.currentUser);
                                localStorage['user'] = JSON.stringify($scope.currentUser);
                                location.reload();

                            })
                    };
                    $scope.giveup = function () {
                        $scope.user = {
                            nickname: $scope.currentUser.nickname,
                            zip: $scope.currentUser.zip,
                            tel: $scope.currentUser.tel,
                            address: $scope.currentUser.address,
                            money:$scope.currentUser.account.money
                        }
                    };
                    $scope.charge = function($event){
                            $event.stopPropagation();
                            $modal.open({
                              animation:true,
                              size:'lg',
                              templateUrl: 'partials/user/charge.html',
                              controller: 'ChargeCtrl',
                              resolve: {
                                user: function () {
                                  return $scope.currentUser;
                                },

                              },
                            });
                    }
                }
            })*/
        });

