<template>
  <ion-app>
    <ion-page class="show-page">
      <ion-header>
        <ion-toolbar>
          <ion-title>Select the location of your cleanup:</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content class="content" padding>
      </ion-content>
    </ion-page>
  </ion-app>
</template>

<script>
  showMap(10, 10, "Glassboro, NJ");

  function showMap(lat,lang,address) {
    var myLatLng = {lat: lat, lng: lang};

    var map = new google.maps.Map(document.getElementById('map_canvas'), {
      zoom: 17,
      center: myLatLng
    });

    var marker = new google.maps.Marker({
      position: myLatLng,
      map: map,
      title: address,
      draggable:true,
    });

    google.maps.event.addListener(marker, 'dragend', function(marker){
        var latLng = marker.latLng;
        currentLatitude = latLng.lat();
        currentLongitude = latLng.lng();
        jQ("#latitude").val(currentLatitude);
        jQ("#longitude").val(currentLongitude);
     });
  }
</script>
