<template>
  <ion-app>
    <ion-page class="show-page">
      <ion-header>
        <ion-toolbar>
          <ion-title>Dashboard</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content class="content" padding>
        <ion-button @click="startWorker()" full>Create Event</ion-button>
        <ion-row style="height:100px"/>
      </ion-content>
    </ion-page>
  </ion-app>
</template>
<script>

export default {
  name: 'Dash',
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
