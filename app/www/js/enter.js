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
			    url:baseUrl+port+entity+'Parkspace/?Parkspace.parkid='+$scope.parklot.id,
			    headers: {'Content-Type': 'application/json'},
			    crossDomain: true
			};
			$http(getspace).then(function(data){
				console.log(data);
				$scope.parkspaces = data.data.Parkspace;
				$scope.parkspace = $scope.parkspaces[0];
			})
	    });
  	});
  	$scope.confirm = function(){
  		var now = new Date();
  		var mytime = now.toString();
  		console.log(mytime);
	  	var data = {
	  		"entertime": mytime,
	  		"userid":$scope.user.id,
	  		"parkid":$scope.parklot.id,
	  		"parkspaceid":$scope.parkspace.id,
	  		"isleave":0
	  	}
	  	console.log(data);
	  	var reqAdd = {
	  	  method: 'POST',
	      url: baseUrl+port+entity+'Parkrecord/',
	      headers: {'Content-Type': 'application/json'},
	      crossDomain: true,
	      data: data
	  	}
	  	$http(reqAdd).then(function(res){
	  		$scope.parkspace.isfull = 1;
	  		var reqPUT = {
		  	  method: 'PUT',
		      url: baseUrl+port+entity+'Parkspace/'+$scope.parkspace.id,
		      headers: {'Content-Type': 'application/json'},
		      crossDomain: true,
		      data: JSON.stringify($scope.parkspace)
		  	}
		  	$http(reqPUT).then(function(res2){
		  	});
	  	})
  	}
  	$scope.returnback = function(){
    	$state.go('main.parking');
    };
});