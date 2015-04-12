{
    "moduleId" : "jamesbond002/fixTanken",
    "title" : "TankFix",
    "subtitle" : "www.tankfix.de",
    
    "backButton" : true,
    "enableGPS" : false,
    "zoomControl" : false,
    "screenLockRot" : false,
    "reload" : true,
    
    "shouldOverrideUrlLoading1" : "http://www.tankfix.de",
    "shouldOverrideUrlLoading2" : "https://www.tankfix.de",

    "loadUrl" : "http://www.tankfix.de",
       			
    "browserLaunchLink" : "http://www.tankfix.de", 
    
    "onPageFinishedLoadUrl" : "
javascript:
myCon = { locationType:'auto', currentGPS : {lat:#lat#,lon:#lng#} };
updateConfig(myCon);
submitIt();
gMapCenter();
$('.search').removeClass('active');
$('.map').addClass('active');
$('#map-canvas').addClass('active');
$('#searchboxwrap').removeClass('active');    
map.setZoom(#zoom#);
    "
}
