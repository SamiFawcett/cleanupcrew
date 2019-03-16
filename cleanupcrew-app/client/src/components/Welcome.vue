<template>
  <ion-app>
    <ion-page class="show-page">
      <ion-header>
        <ion-toolbar>
          <ion-title>Welcome</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content class="content" padding>
        <template>
          <ion-list>
            <ion-thumbnail slot="start">
              <img class='big-logo' :src='logo'></img>
            </ion-thumbnail>
          </ion-list>
        </template>
        <ion-button @click="goToLogin" full>Organizer</ion-button>
        <ion-row style="height:10px"/>
        <ion-button @click="goToLogin" full>Volunteer</ion-button>
      </ion-content>
    </ion-page>
  </ion-app>
</template>

<script>
import Logo from "@/img/logo.png"

export default {
  name: 'App',
  data () {
    return {
      logo: Logo,
    }
  },
  methods: {
    goToLogin () {
      this.$router.push('/Login')
    }
  }
}
</script>

<style>
.big-logo{
  width:50%;
  margin-top: 20px;
  margin-bottom: 20px;
}
</style>
