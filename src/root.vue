<template>
  <welcome-component v-if="!isSignedIn" />
  <div id="app" v-else>
    <header-component />
    <main id="main" class="container-fluid">
      <router-view />
    </main>
    <footer-component />
    <snackbar-component v-if="message" />
  </div>
</template>

<script>
  import { mapState, mapActions } from 'vuex';
  import StorageService from '@/services/storage.service';
  import SnackbarComponent from '@/components/shared/snackbar';
  import HeaderComponent from '@/components/shared/header';
  import FooterComponent from '@/components/shared/footer';
  import WelcomeComponent from '@/components/welcome';

  export default {
    computed: {
      ...mapState(['isSignedIn', 'message']),
    },
    methods: {
      ...mapActions(['getMe']),
    },
    components: {
      WelcomeComponent,
      SnackbarComponent,
      HeaderComponent,
      FooterComponent,
    },
    created() {
      // Auto Login
      if (StorageService.getToken()) {
        this.getMe();
      }
    },
  };
</script>

<style lang="scss" scoped>
  @import '@/assets/css/variables.scss';

  #main {
    margin-top: $HeaderHight;
  }
</style>
