<template>
  <ion-app>
    <ion-page class="show-page">
      <ion-header>
        <ion-toolbar>
          <ion-title>Sign in with Google</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content class="content" padding>
        <ion-row style="height: 30%"></ion-row>
        <ion-title>
          Sign in with Google
        </ion-title>
        <ion-item-divider>
          <div style="width: 100%; text-align: center;">to continue with Clean Up Crew</div>
        </ion-item-divider>
        <g-signin-button
          :params="googleSignInParams"
          @success="onSignInSuccess"
          @error="onSignInError">
          <i class="fab fa-google"></i>
          Sign in with Google
        </g-signin-button>
      </ion-content>
    </ion-page>
  </ion-app>
</template>

<script>
export default {
  data () {
    return {
      googleSignInParams: {
        client_id: '889061426778-8stvujmooeeuduncj5f3ouiep7iplt1r.apps.googleusercontent.com'
      }
    }
  },
  methods: {
    onSignInSuccess (googleUser) {
      const profile = googleUser.getBasicProfile() // etc etc
      console.log(profile);
      this.goToSearch();
    },
    onSignInError (error) {
      console.log('Big problem', error)
    },
    goToSearch () {
      this.$router.push('/search')
    }
  }
}
</script>

<style>
  .g-signin-button {
    /* This is where you control how the button looks. Be creative! */
    display: inline-block;
    padding: 15px 15px;
    border-radius: 50px;
    background-color: #3c82f7;
    color: #fff;
    margin-top: 10px;
    /* box-shadow: 0 3px 0 #0f69ff; */
    font-size: 16px;
  }
  .fa-google{
    padding-right:10px;
  }
</style>
