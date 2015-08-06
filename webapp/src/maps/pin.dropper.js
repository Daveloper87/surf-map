'use strict';

let markers = [];

export var PinDropper = {

  dropNewPin: function(data) {

    _clearCurrentMarkers();

    let infowindow = new google.maps.InfoWindow({
      content: data.surfcard
    });

    let position = new google.maps.LatLng('53.4722454', '-2.2235922');

    let marker = new google.maps.Marker({
      position: position,
      map: global.map,
      animation: google.maps.Animation.DROP
    });

    markers.push(marker);

    global.map.panTo(marker.getPosition());
    infowindow.open(global.map, marker);
  }
};

function _clearCurrentMarkers() {

  for (let marker of markers) {
    marker.setMap(null);
  }

}