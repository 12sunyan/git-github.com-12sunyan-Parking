angular.module('parking')
    .controller('HomeCtrl',
        function ($scope, $http, $state, $timeout,$ionicPopup) {
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
                    $scope.save = function () {
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
                    */
                    /*$ionicModal.fromTemplateUrl('templates/charge.html', {
                        scope: $scope,
                        controller: 'ChargeCtrl',
                        resolve: {
                            user: function () {
                                return $scope.currentUser;
                            },

                        },
                        animation: 'slide-in-up'
                    }).then(function(modal) {
                        $scope.modal = modal
                    }); 
                    $scope.openModal = function() {
                        $scope.modal.show()
                    }
                    $scope.closeModal = function() {
                        $scope.modal.hide();
                    };
                    $scope.$on('$destroy', function() {
                        $scope.modal.remove();
                    });*/
                    $scope.charge = function($event){
                        $event.stopPropagation();
                        $scope.data = {};
                        /*var myPopup = $ionicPopup.show({
                            templateUrl: 'templates/charge.html',
                            //scope:$scope,
                            buttons: [{ //Array[Object] (可选)。放在弹窗footer内的按钮。
                                text: '取消',
                                type: 'button-default',
                            }, {
                                text: '确定',
                                type: 'button-positive',
                                onTap: function(e) {
                                // 返回的值会导致处理给定的值。
                                console.log($scope.data.chargemoney);
                                return $scope.data.chargemoney;
                                }
                            }],
                            animation: 'slide-in-up'
                        });
                        myPopup.then(function(res) {
                            console.log('Tapped!', res);
                            console.log($scope.data.chargemoney);
                        });*/
                           var myPopup = $ionicPopup.show({
                             template: '<input type="number" ng-model="data.money">',
                             title: '请输入充值金额',
                             scope: $scope,
                             buttons: [
                               { text: '取消' },
                               {
                                 text: '<b>确定</b>',
                                 type: 'button-positive',
                                 onTap: function(e) {
                                   if (!$scope.data.money) {
                                     //不允许用户关闭，除非他键入wifi密码
                                     e.preventDefault();
                                   } else {
                                     return $scope.data.money;
                                   }
                                 }
                               },
                             ]
                           });
                           myPopup.then(function(res) {
                             console.log('Tapped!', res);
                           });
                    }
                /*}
            })*/
        });

