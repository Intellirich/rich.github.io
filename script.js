var map = L.map('mapid').setView([45.4632, 9.1886], 12);

			

			var owsrootUrl = 'http://localhost:8080/geoserver/BIopen/ows';
			var defaultParameters = {

		          service: 'WFS',

		          version: '1.0.0',

		          request: 'GetFeature',

		          typeName: 'BIopen:grandi_strutt_vendita',

		          maxFeatures: '50',

		          outputFormat: 'text/javascript',

		          format_options: 'callback: getJson'

				};

			var parameters = L.Util.extend(defaultParameters);
			var URL = owsrootUrl + L.Util.getParamString(parameters);
			
			console.log(URL);

			// $.ajax({
			// 	url: URL,
			// 	dataType: 'jsonp',
			// 	jsonpCallback: 'getJson',
			// 	success: handleJson
			// });

			// function handleJson(data){
			// 	L.getJson(data, {
			// 		onEachFeature: onEachFeature,
			// 		pointToLayer: function(feature, latlng){
			// 			return L.circleMarker(latlng);
			// 		}
			// 	}).addTo(map);
			// }
				
			$.ajax('http://localhost:8080/geoserver/BIopen/wfs', {
				type: 'GET',
				data:{
					service: 'WFS',

		          version: '1.0.0',

		          request: 'GetFeature',

		          typeName: 'BIopen:grandi_strutt_vendita',

		          maxFeatures: '50',
		          srsname: 'EPSG:4326',

		          outputFormat: 'application/json',

				},
				dataType: 'jsonp',
				jsonpCallback: 'callback:loadFeatures',
				jsonp: 'format_options'
			});
			

			

			L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoicmljaDE5ODAiLCJhIjoiY2l2a3BxMnluMDA2bjJ5bXFteWY1OThrdyJ9.bATpcaenkUFMFOzaxc678w'
}).addTo(map);
