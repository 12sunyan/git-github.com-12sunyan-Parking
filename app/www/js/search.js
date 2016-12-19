/**
 * Created by lulifei on 16/12/13.
 */
angular.module('parking').filter("image", function(baseUrl, port,fileurl){
  return function(input){
    return baseUrl + port + fileurl + '/Parklot/' + input;
  }
}).controller('SearchCtrl', function ($cacheFactory,$location,$scope,$http,$state,baseUrl, port, entity) {
  console.log($scope.user);
  var getrecord = {
    method:'GET',
    url:baseUrl+port+entity+'Parkrecord/?Parkrecord.userid='+$scope.user.id+'&Parkrecord.isleave=1',
    headers: {'Content-Type': 'application/json'},
    crossDomain: true
  }
  $http(getrecord).then(function(res){
    console.log(res);
    $scope.lists = res.data.Parkrecord;
    var first=$scope.lists[0].entertime;
    var last = $scope.lists[0].leavetime;
    var total=0;
    console.log(first);
    console.log(last);
    console.log(total);
    if($scope.lists) {
      $scope.lists.forEach(function (list) {
        if (parseDate(new Date(Date.parse(list.entertime))) < parseDate(new Date(Date.parse(first))))
          first = list.entertime;
        if (parseDate(new Date(Date.parse(list.leavetime))) > parseDate(new Date(Date.parse(last))))
          last = list.leavetime;
        total = list.charge + total;
      });

      //可读性较差
      // $scope.first = first;
      // $scope.last = last;

      //调用parse有时候会解析错误
      // $scope.first = Date.parse(first);
      // $scope.last = Date.parse(last);

      $scope.first = parseDate(new Date(Date.parse(first)));
      $scope.last = parseDate(new Date(Date.parse(last)));

      $scope.total = total;
      $scope.times = $scope.lists.length;

    }
  });

  function parseDate(d) {
      // var   year=d.getYear();
      var   month = d.getMonth()+1;
      if(month<10){
        var monthstr = "0" + month.toString();
      }
      else{
        var monthstr = month.toString();
      }
      var   date = d.getDate();
      if(date<10){
        var datestr = "0" + date.toString();
      }
      else{
        var datestr = date.toString();
      }
      var   hour = d.getHours();
      if(hour<10){
        var hourstr = "0" + hour.toString();
      }
      else{
        var hourstr = hour.toString();
      }
      var   minute = d.getMinutes();
      if(minute<10){
        var minutestr = "0" + minute.toString();
      }
      else{
        var minutestr = minute.toString();
      }
      var   second = d.getSeconds();
      if(second<10){
        var secondstr = "0" + second.toString();
      }
      else{
        var secondstr = second.toString();
      }     
      return   "2016-"+ monthstr+"-"+ datestr + "   "+ hourstr+ ":" + minutestr+ ":" + secondstr;
    }



});
