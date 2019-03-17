<template>
  <ion-app>
    <ion-page class="show-page">
      <ion-header>
        <ion-toolbar>
          <ion-title>Search Cleanups</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content class="content" padding>
        <ion-searchbar showCancelButton placeholder="Cleanups"></ion-searchbar>
        <ion-list @onLo>
          <ion-item v-for="item of items" v-bind:key="item['public_id']">
            <ion-label @click="goToCleanup(item['event_name'], item['public_id'], item['address'])" full>{{item['event_name']}}</ion-label>
          </ion-item>
        </ion-list>
      </ion-content>
    </ion-page>
  </ion-app>
</template>
<script>
import axios from "axios";
export default {
  name: 'Search',
  data() {
    return {
      items: [],
      thing: "Troy, New York"
    }
  },
  beforeCreate: function () {
    if (!this.$session.exists()) {
      this.$session.destroy()
      this.$router.push("/");
    }
    axios.get("/api/all_events")
      .then((response) => {
        console.log(response.data);
        if(response.data == ""){
          console.log("No events populated")
        } else {
          this.items = response.data['event_arr'];
        }
      })
      .catch((errors) => {
        console.log("Database Error: Getting Event")
        console.log(errors)
      })
  },
  methods: {
    goToCleanup: function(eventName, publicID, eventLoc) {
      this.$router.push('/event/'+eventName+'/'+publicID+'/'+eventLoc)
    }
  }
}
</script>
