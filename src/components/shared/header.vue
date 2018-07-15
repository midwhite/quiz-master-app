<template>
  <header id="header">
    <img :src="require('@/assets/images/shared/logo.png')" id="logo" />
    <div class="main-btn sign-out" @click="signOut">{{ $t('components.welcome.signOut') }}</div>
  </header>
</template>

<script>
  import { mapActions } from 'vuex';

  export default {
    methods: {
      ...mapActions(['signOut']),
    },
  };
</script>

<style lang="scss" scoped>
  @import '@/assets/css/variables.scss';

  #header {
    position: fixed;
    top: 0px;
    left: 0px;
    right: 0px;
    height: $HeaderHight;
    background: #FFF;
    box-shadow: 0 0 10px rgba(0,0,0,.5);
  }
  #logo {
    height: 40px;
    margin: 5px;
  }
  .sign-out {
    position: absolute;
    width: 100px;
    top: 0px;
    right: 0px;
  }
</style>