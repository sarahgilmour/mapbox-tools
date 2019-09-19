export default class Map {

	static set Token(value) { mapboxgl.accessToken = value; }
	
	static get Token() { return mapboxgl.accessToken; }
	
	static InfoPopup(map, lngLat, html) {	
		var popup = new mapboxgl.Popup({ closeOnClick: true })
								.setLngLat(lngLat)
								.setHTML(html)
								.addTo(map);
	}
	
	static Choropleth(map, layers, classes) {
		layers.forEach(function(l) {
			map.setPaintProperty(l, 'fill-color', classes);
		});
	}
	
	static ReorderLayers(map, layers) {
		layers.forEach(function(l) { map.moveLayer(l); });
	}
}

/*
	tileset = 'staubibr.2ipbn29t';

	map.on('click', function(ev) {
		var lat = ev.lngLat.lat;
		var lng = ev.lngLat.lng;
		var url = "https://api.mapbox.com/v4/" + tileset + "/tilequery/" + lng + "," + lat + ".json?radius=10&access_token=" + mapboxgl.accessToken + "&layers=" + layers.join(",").replace(/-/g, "_");
		
		Request(url, function(ev) {
			var coll = JSON.parse(ev);
			
			if (coll.features.length == 0) return;
			
			var json = coll.features[0].properties;
			
			var popup = new mapboxgl.Popup({closeOnClick: true})
				.setLngLat([lng, lat])
				.setHTML(HTMLize(json))
				.addTo(map);
		}, function(ev) {
			alert(JSON.stringify(ev));
		});
	});
*/