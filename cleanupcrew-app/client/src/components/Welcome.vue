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
        <ion-button @click="goToLoginAsOrganizer" full>Organizer</ion-button>
        <ion-row style="height:10px"/>
        <ion-button @click="goToLogin" full>Volunteer</ion-button>
      </ion-content>
    </ion-page>
  </ion-app>
</template>

<script>
import Logo from "@/img/logo.png"

export default {
  name: 'Welcome',
  data () {
    return {
      logo: Logo,
    }
  },
  beforeCreate: function () {
    if (this.$session.exists()) {
      if(this.$session.has('session_id') == true){
        this.$session.destroy()
      }
    }
    if (!this.$session.exists()) {
      this.$router.push("/");
    }
  },
  methods: {
    goToLogin () {
      this.$session.start()
      this.$session.set('is_organizer', false)

      this.$router.push('/googlesignin')
    },
    goToLoginAsOrganizer () {
      this.$session.start()
      this.$session.set('is_organizer', true)

      this.$router.push('/googlesignin')
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
