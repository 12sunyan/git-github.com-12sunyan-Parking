/**
 * Created by lulifei on 16/12/1.
 */
angular.module('RDash')
    .controller('baiduMapCtrl', ['$scope', '$cookieStore','ngBaiduMap', baiduMapCtrl]);
function baiduMapCtrl($scope) {

// 百度地图API功能
    $scope.map = new BMap.Map("allmap");
    var point = new BMap.Point(121.4428690000, 31.0320340000);
    map.centerAndZoom(point, 16);

//单击获取点击的经纬度，并在图上添加标注
    map.addEventListener("click", function (e) {
        alert(e.point.lng + "," + e.point.lat);
        add_point(e.point.lng, e.point.lat);
    });


// 添加带有定位的导航控件
    var navigationControl = new BMap.NavigationControl({
        // 靠左上角位置
        anchor: BMAP_ANCHOR_TOP_LEFT,
        // LARGE类型
        type: BMAP_NAVIGATION_CONTROL_LARGE,
        // 启用显示定位
        enableGeolocation: true
    });

// 添加定位控件
    var geolocationControl = new BMap.GeolocationControl();
    geolocationControl.addEventListener("locationSuccess", function (e) {
        // 定位成功事件
        var address = '';
        address += e.addressComponent.province;
        address += e.addressComponent.city;
        address += e.addressComponent.district;
        address += e.addressComponent.street;
        address += e.addressComponent.streetNumber;
        alert("当前定位地址为：" + address);
    });
    geolocationControl.addEventListener("locationError", function (e) {
        // 定位失败事件
        alert(e.message);
    });


//添加控件和比例尺
    function add_control() {
        map.addControl(navigationControl);
        map.addControl(geolocationControl);
    }

//移除控件和比例尺
    function delete_control() {
        map.removeControl(navigationControl);
        map.removeControl(geolocationControl);
    }


    var marker = new BMap.Marker(new BMap.Point(121.4428690000, 31.0320340000)); // 创建点
    var polyline = new BMap.Polyline([
        new BMap.Point(116.399, 39.910),
        new BMap.Point(116.405, 39.920),
        new BMap.Point(116.425, 39.900)
    ], {strokeColor: "blue", strokeWeight: 2, strokeOpacity: 0.5});   //创建折线

    var circle = new BMap.Circle(point, 200, {strokeColor: "blue", strokeWeight: 2, strokeOpacity: 0.5}); //创建圆

    var polygon = new BMap.Polygon([
        new BMap.Point(116.387112, 39.920977),
        new BMap.Point(116.385243, 39.913063),
        new BMap.Point(116.394226, 39.917988),
        new BMap.Point(116.401772, 39.921364),
        new BMap.Point(116.41248, 39.927893)
    ], {strokeColor: "blue", strokeWeight: 2, strokeOpacity: 0.5});  //创建多边形

    var pStart = new BMap.Point(116.392214, 39.918985);
    var pEnd = new BMap.Point(116.41478, 39.911901);
    var rectangle = new BMap.Polygon([
        new BMap.Point(pStart.lng, pStart.lat),
        new BMap.Point(pEnd.lng, pStart.lat),
        new BMap.Point(pEnd.lng, pEnd.lat),
        new BMap.Point(pStart.lng, pEnd.lat)
    ], {strokeColor: "blue", strokeWeight: 2, strokeOpacity: 0.5});  //创建矩形

//添加覆盖物
    function add_overlay() {
        map.addOverlay(marker);               // 将标注添加到地图中
        marker.disableDragging();
//        marker.setAnimation(BMAP_ANIMATION_BOUNCE); //跳动的动画
//        map.addOverlay(polyline);          //增加折线
//        map.addOverlay(circle);            //增加圆
//        map.addOverlay(polygon);           //增加多边形
//        map.addOverlay(rectangle);         //增加矩形
    }

//根据经纬度创建点
    function add_point(x, y) {
        // var point = new BMap.Point(121.4428690000, 31.0320340000);
        var marker = new BMap.Marker(new BMap.Point(x, y)); // 创建点
        map.addOverlay(marker);               // 将标注添加到地图中
        marker.disableDragging();
    }

    function add_label() {
        var label = new BMap.Label("上海交通大学闵行校区", {offset: new BMap.Size(20, -10)});
        marker.setLabel(label);
    }


//清除覆盖物
    function remove_overlay() {
        map.clearOverlays();
    }

}