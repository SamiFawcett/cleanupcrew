<template>
  <ion-app>
    <ion-page class="show-page">
      <ion-header>
        <ion-toolbar>
          <ion-title>Index</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content class="content" padding>
        <ion-button @click="goToDash" full>Organizer</ion-button>
        <ion-row style="height:10px"/>
        <ion-button @click="goToSearch" full>Volunteer</ion-button>
      </ion-content>
    </ion-page>
  </ion-app>
</template>

<script>
export default {
  name: 'App',
  methods: {
    goToSearch () {
      this.$router.push('/search')
    },
    goToDash () {
      this.$router.push('/dash')
    }
  }
}
</script>
