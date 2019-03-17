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
  marker = new google.maps.Marker(
  {
      map:map,
      draggable:true,
      animation: google.maps.Animation.DROP,
      position: results[0].geometry.location
  });
  google.maps.event.addListener(marker, 'dragend', function()
  {
      geocodePosition(marker.getPosition());
  });

  function geocodePosition(pos)
  {
     geocoder = new google.maps.Geocoder();
     geocoder.geocode
      ({
          latLng: pos
      },
          function(results, status)
          {
              if (status == google.maps.GeocoderStatus.OK)
              {
                  $("#mapSearchInput").val(results[0].formatted_address);
                  $("#mapErrorMsg").hide(100);
              }
              else
              {
                  $("#mapErrorMsg").html('Cannot determine address at this location.'+status).show(100);
              }
          }
      );
  }
  </script>
