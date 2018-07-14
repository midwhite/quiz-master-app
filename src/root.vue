<template>
  <welcome-component v-if="!isSignedIn" />
  <div id="app" v-else>
    <header-component />
    <main id="main" class="container-fluid">
      <router-view />
    </main>
    <footer-component />
  </div>
</template>

<script>
  import { mapState } from 'vuex';
  import HeaderComponent from '@/components/shared/header';
  import FooterComponent from '@/components/shared/footer';
  import WelcomeComponent from '@/components/welcome';

  export default {
    computed: {
      ...mapState(['isSignedIn']),
    },
    components: {
      HeaderComponent,
      FooterComponent,
      WelcomeComponent,
    },
  };
</script>

<style lang="scss" scoped>
  @import '@/assets/css/variables.scss';

  #main {
    margin-top: $HeaderHight;
  }
</style>
