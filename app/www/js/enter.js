angular.module('parking').controller('EnterCtrl',function ($scope, $http, $state, $timeout,baseUrl, port, entity,$stateParams) {
	$scope.parkid = $stateParams.data;
	var currentUser = localStorage['user'];
    if(currentUser){
      $scope.user = JSON.parse(currentUser);
    }
    /*检查停车场是否存在以及是否停车的权限*/
   	var getres = {
	    method:'GET',
	    url:baseUrl+port+entity+'Parklot/'+$scope.parkid,
	    headers: {'Content-Type': 'application/json'},
	    crossDomain: true
  	};
  	$http(getres).then(function(res){
	    console.log(res.data);
	    if(res.data==null){
	    	alert("停车场不存在");
	    	$state.go('main.parking');
	    }
	    $scope.parklot = res.data;
	    var getrecord = {
		    method:'GET',
		    url:baseUrl+port+entity+'Parkrecord/?Parkrecord.parkid='+$scope.parkid+'&Parkrecord.userid='+$scope.user.id+'&Parkrecord.isleave=0',
		    headers: {'Content-Type': 'application/json'},
		    crossDomain: true	    	
	    }
	    $http(getrecord).then(function(res2){
	    	if(res2.data.Parkrecord){
	    		alert("车辆已在停车场内");
	    		$state.go('main.parking');
	    	}
	    	var getspace = {
			    method:'GET',
			    url:baseUrl+port+entity+'Parkspace/?Parkspace.parkid='+$scope.parklot.id+'&Parkspace.isfull=0',
			    headers: {'Content-Type': 'application/json'},
			    crossDomain: true
			};
			$http(getspace).then(function(data){
				console.log(data);
				$scope.parkspaces = data.data.Parkspace;
				var min = 10000;
				if($scope.parkspaces){
					$scope.parkspaces.forEach(function(space){
						if(space.xpos+space.ypos < min){
							$scope.parkspace = space;
							min = space.xpos + space.ypos;
						}
					});
				}
				//$scope.parkspace = $scope.parkspaces[0];
			})
	    });
  	});
  	$scope.confirm = function(){
  		$state.go('spacenavi',{parkid:$scope.parklot.id,spaceid:$scope.parkspace.id});
  	};
  	$scope.returnback = function(){
    	$state.go('main.parking');
    };
});