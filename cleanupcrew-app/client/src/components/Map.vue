<template>
  <ion-app>
    <ion-page class="show-page">
      <ion-header>
        <ion-toolbar>
          <ion-title>Select the location of your cleanup:</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content class="content" padding>
        <ion-content>
          <div id="map" style="width:50%; height:50%; margin:0 auto">
            <GmapMap v-bind:center="center" v-bind:zoom="7" style="height: 225px">
              <GMapMarker v-bind:key="index" v-for="(m, index) in markers" v-bind:position="m.position" v-bind:clickable="true" v-bind:draggable="true">
              </GMapMarker>
            </GMapMap>
            <div style="padding-top: 2em;">
              <ion-button size="large" margin="30px">Submit</ion-button>
            </div>
          </div>
        </ion-content>
      </ion-content>
    </ion-page>
  </ion-app>
</template>


<script>
  export default {
    data() {
      return {
        center: { lat: 42.721, lng: -73.581 },
        markers: [
          {
            position: { lat: 44, lng: -75.0 }
          },
          {
            position: { lat: 61.75, lng: 11.0 }
          },
        ]
      };
    }
  };
</script>
