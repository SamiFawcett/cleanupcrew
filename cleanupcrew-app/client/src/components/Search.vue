<template>
  <ion-app>
    <ion-page class="show-page">
      <ion-header>
        <ion-toolbar>
          <ion-title>Search Cleanups</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content class="content" padding>
        <ion-searchbar placeholder="Cleanups"></ion-searchbar>
      </ion-content>
    </ion-page>
  </ion-app>
</template>

<script>
export default {
  name: 'App',
  methods: {
    goTo () {
      this.$router.push('/search')
    },
    goToDash () {
      this.$router.push('/dash')
    }
  }
}
</script>
