var map = L.map('mapid').setView([45.4632, 9.1886], 12);

			

			var owsrootUrl = 'http://localhost:8080/geoserver/BIopen/ows';
			var defaultParameters = {

		          service: 'WFS',

		          version: '1.0.0',

		          request: 'GetFeature',

		          typeName: 'BIopen:grandi_strutt_vendita',

		          maxFeatures: '50',

		          outputFormat: 'json',

				};

			var parameters = L.Util.extend(defaultParameters);
			var URL = owsrootUrl + L.Util.getParamString(parameters);
			// var URL = 'http://localhost:8080/geoserver/BIopen/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=BIopen%3Agrandi_strutt_vendita&maxFeatures=50&outputformat=GML2';
			// var geojson = new L.geoJSON();
			// var geojsonMarkerOptions = {
			// 			    radius: 8,
			// 			    fillColor: "#ff7800",
			// 			    color: "#000",
			// 			    weight: 1,
			// 			    opacity: 1,
			// 			    fillOpacity: 0.8
			// 			};
		
			// $.getJSON(URL, function(data){
			// 	L.geoJson(data);})
			// 	pointToLayer: function (feature, latlng){
			// 	return L.circleMarker(latlng, geojsonMarkerOptions);
			// }.addTo(map);
			

			console.log(URL);

			$.getJSON(URL, function(data){
				console.log(data);
				L.geoJson(data).addTo(map);
			});


			// function addDataToMap(data, map){
			// 	var dataLayer = L.geoJson(data);
			// 	dataLayer.addTo(map);
			// }

			// $.getJSON(URL, function(data){addDataToMap(data, map);});

			// geojson.addTo(map);

			// $.ajax({
			// 	dataType: 'jsonp',
			// 	url: URL,
			// 	success: function(data){
			// 		console.log("sono qui");
			// 		(data.features).each(function(key, data){
			// 			geojson.addData(data);
			// 		});
			// 	}
			// });

			// $.getJSON(URL2, function(data){
			// 	geojson.addData(data);
			// 	geojson.addTo(map);
			// });
			// console.log(geojson);
			// geojson.addData();
			// geojson.addTo(map);

			// function loadGeoJson(data){

			// 	console.log(data);
			// 	geojson.addData(data);
			// };

			// $.ajax({
			// 	url: URL,
			// 	dataType: 'jsonp',
			// 	success: loadGeoJson
			// 	});

			// function loadGeoJson(data) {
			// 	console.log(data);
			// 	geojson.addData(data);
			// 	geojson.addTo(map);

				
			// };
				
			
			

			

			L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoicmljaDE5ODAiLCJhIjoiY2l2a3BxMnluMDA2bjJ5bXFteWY1OThrdyJ9.bATpcaenkUFMFOzaxc678w'
}).addTo(map);
