<template>
  <ion-app>
    <ion-page class="show-page">
      <ion-header>
        <ion-toolbar>
          <ion-title>Specify Cleanup Location</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content class="content" padding>
        <div
      </ion-content>
    </ion-page>
  </ion-app>
</template>
<script>
  Vue.use(VueGoogleMaps, {
    load: {
      key: 'AIzaSyDs-DZDyN0p3S4O9V0K8b7X3GyxfeHaKis'
    },
    // Demonstrating how we can customize the name of the components
    installComponents: false,
  });

  document.addEventListener('DOMContentLoaded', function() {
    Vue.component('google-map', VueGoogleMaps.Map);
    Vue.component('google-marker', VueGoogleMaps.Marker);

    new Vue({
      el: '#root',
      data: {
        center: {
          lat: 10.0,
          lng: 10.0
        },
        markers: [{
          position: {
            lat: 10.0,
            lng: 10.0
          }
        }, {
          position: {
            lat: 11.0,
            lng: 11.0
          }
        }]
      },
    });
  });
</script>
