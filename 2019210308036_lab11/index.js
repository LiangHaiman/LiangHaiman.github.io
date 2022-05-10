window.onload = function(){
	//插件
    var map = new BMap.Map("container");
    var point = new BMap.Point(120.0242603,30.2992822);
    map.centerAndZoom(point, 19);//这里是将地图的中心移动到我们刚才创建的点；这里的12是地图的缩放界别；数值越大，地图看的越细
    map.enableScrollWheelZoom(true);
    var scaleCtrl = new BMap.ScaleControl();  // 添加比例尺控件
    map.addControl(scaleCtrl);
    var mk = new BMap.Marker(point);//创建一个覆盖物
    map.addOverlay(mk);//增加一个标示到地图上
    var opts = {
        width: 250,    //信息窗口宽度
        height: 10,   //信息窗口高度
        title: '杭州师范大学国际服务工程学院'   //信息窗口标题
    };
    var infoWindow = new BMap.InfoWindow("",opts);
    
    map.openInfoWindow(infoWindow, point); // 开启信息窗口

}