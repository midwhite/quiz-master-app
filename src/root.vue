<template>
  <div id="app">
    <header-component />
    <main id="main" class="container-fluid">
      <router-view />
    </main>
    <footer-component />
  </div>
</template>

<script>
  import HeaderComponent from '@/components/shared/header';
  import FooterComponent from '@/components/shared/footer';

  export default {
    components: {
      HeaderComponent,
      FooterComponent,
    },
  };
</script>

<style lang="scss" scoped>
  @import '@/assets/css/variables.scss';

  #main {
    margin-top: $HeaderHight;
  }
</style>
