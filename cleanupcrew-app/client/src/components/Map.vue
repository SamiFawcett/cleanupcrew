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
            <ion-label @click="goToCleanup(item.id)" full>{{item.name}}</ion-label>
          </ion-item>
        </ion-list>
      </ion-content>
    </ion-page>
  </ion-app>
</template>

<script>
export default {
  name: 'Search',
  data() {
    return {
      items: [{id: 0, name: "test1"},{id: 1, name: "test2"},{id: 2, name: "test1"},
              {id: 3, name: "test2"},{id: 4, name: "test1"},{id: 5, name: "test2"},
              {id: 6, name: "test1"},{id: 7, name: "test2"},{id: 8, name: "test1"},
              {id: 9, name: "test2"},{id: 10, name: "test1"},{id: 11, name: "test2"}]
    }
  },
  methods: {
    goToCleanup: function(eventID) {
      this.$router.push('/event/'+eventID)
    }
  }
}
</script>
