function initialize() {
		var position1 = new google.maps.LatLng(53.229000, -0.549300);
		var position2 = new google.maps.LatLng(53.2194604, -0.5448559);
		var mapCanvas = document.getElementById('map-canvas');
        var mapOptions = {
          center: new google.maps.LatLng(53.228338, -0.550204),
          zoom: 14,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        }
        var map = new google.maps.Map(mapCanvas, mapOptions)
		var marker = new google.maps.Marker({
		  position: position1,
		  map: map,
		  title:"Store 1"
		});
		var marker = new google.maps.Marker({
		  position: position2,
		  map: map,
		  title:"Store 2"
		});
      }
      google.maps.event.addDomListener(window, 'load', initialize);	 