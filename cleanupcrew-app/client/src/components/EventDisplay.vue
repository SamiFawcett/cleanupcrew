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
          <div>
            <ion-title>Test</ion-title>
          </div>
        </ion-item>
      </ion-content>
    </ion-page>
  </ion-app>
</template>

<script>
export default {
  name: 'EventDisplay',
  props: ['eventID'],
  methods: {

  }
}
</script>
