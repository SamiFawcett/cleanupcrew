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
                <ion-label style="font-size:20px; font-weight:bold">Troy Cleanup Day</ion-label>
              </ion-item>
              <ion-item>
                <ion-label>Troy, New York</ion-label>
              </ion-item>
            </ion-list>
        </ion-item>
        <ion-row style="height:100px"/>
        <ion-button type="submit" @click="toggleJoin()" full>{{buttonDisplay}}</ion-button>
      </ion-content>
    </ion-page>
  </ion-app>
</template>

<script>
export default {
  name: 'EventDisplay',
  props: ['eventID'],
  methods: {
    data() {
      return {
        buttonDisplay: "Start Cleanup",
        joined: false
      }
    },
    toggleJoin() {
      if(this.joined){
        this.joined = false;
        this.buttonDisplay = "Start Cleanup";
      }else {
        this.joined = true;
        this.buttonDisplay = "Leave Cleanup";
      }
    }
  }
}
</script>

<style>

</style>
