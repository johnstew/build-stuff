function initMap(){
    var mapdiv = document.getElementById('mymap');
    var mapOptions = {
        center: new google.maps.LatLng (39.0457549, -76.64127119999999),
        zoom: 5,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(mapdiv, mapOptions);

    var locations = [];
    locations.push( {name:"Annapolis", latlng: new google.maps.LatLng(38.9784453, -76.4921829)} );
    locations.push( {name:"Baltimore", latlng: new google.maps.LatLng(39.2903848, -76.6121893)} );
    locations.push( {name:"Towson", latlng: new google.maps.LatLng(39.4014955, -76.6019125)} );

    for(var i = 0; i < locations.length; i++){
        var marker = new google.maps.Marker({position: locations[i].latlng, map:map, title:locations[i].name});
    }
}

window.onload = initMap;