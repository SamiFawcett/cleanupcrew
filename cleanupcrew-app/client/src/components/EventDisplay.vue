<template>
  <ion-app>
    <ion-page class="show-page">
      <ion-header>
        <ion-toolbar>
          <ion-title>Event</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content class="content" padding>
        <ion-item>
          <ion-thumbnail slot="start">
            <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y">
          </ion-thumbnail>
            <ion-list>
              <ion-item>
                <ion-label style="font-size:20px; font-weight:bold">{{eventName}}</ion-label>
              </ion-item>
              <ion-item>
                <ion-label>{{eventLoc}}</ion-label>
              </ion-item>
            </ion-list>
        </ion-item>
        <ion-row style="height:100px"/>
        <ion-button @click="startWorker()" full>Give me the data</ion-button>
      </ion-content>
    </ion-page>
  </ion-app>
</template>
<script>
import axios from "axios";
var w = null;
var pubID;
var userID;
function start() {
  if(typeof(Worker) !== "undefined") {
    if(w == null) {
      w = new Worker("worker.js");
      w.onmessage = function(event) {
        if(navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(this.postLoc)
        } else {
            console.log("geolocation not supported")
        }
      };
    } else {
      w.terminate();
      w = null;
      axios.post("/api/event_add_user?public_id=" + pubID + "&user_id="+ userID)
          .then((response) => {
              console.log(response)
          })
          .catch((errors) => {
              console.log("Database Error: Pushing User to Event")
              console.log(errors)
          })
    }
  } else {
    console.log("Browser does not support Web Workers");
  }
}
function postLoc(position) {
  axios.post("/api/loc?lat=" + position.coords.latitude + "&long=" + position.coords.longitude + "&event_id=" + pubID + "&user_id=" + userID + "&date=" + Date.now().toString())
      .then((response) => {
          console.log(response)
      })
      .catch((errors) => {
          console.log("Database Error: Pushing Location")
          console.log(errors)
      })
}
export default {
  name: 'EventDisplay',
  props: ['eventName','publicID','eventLoc'],
  methods: {
    data() {
      return {
        buttonDisplay: "Start Cleanup"
      }
    },
    beforeCreate: function () {
      if (!this.$session.exists()) {
        this.$session.destroy()
        this.$router.push("/");
      }
      pubID = this.publicID
      userID = this.$session.get("session_id")
    },
    startWorker() {
      start()
    }
  }
}
</script>
<style>
</style>
