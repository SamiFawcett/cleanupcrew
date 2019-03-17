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
        <ion-list>
          <ion-item v-for="item of items" v-bind:key="item.id">
            <ion-label full>{{item.name}}</ion-label>
          </ion-item>
        </ion-list>
      </ion-content>
    </ion-page>
  </ion-app>
</template>

<script>
export default {
  data() {
    return {
      items: [{id: 0, name: "test1"},{id: 1, name: "test2"}]
    }
  },
  name: 'App',
  methods: {
    goToCleanup () {
      this.$router.push('/search')
    }
  }
}
</script>
