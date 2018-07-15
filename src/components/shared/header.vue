<template>
  <header id="header">
    <router-link to="/">
      <img :src="require('@/assets/images/shared/logo.png')" id="logo" />
    </router-link>
    <div class="main-btn sign-out" @click="onSignOut">{{ $t('components.welcome.signOut') }}</div>
  </header>
</template>

<script>
  import { mapActions } from 'vuex';

  export default {
    methods: {
      ...mapActions(['signOut']),
      onSignOut() {
        const message = this.$t('messages.thanksForSignOut');
        this.signOut().then(() => {
          this.$store.commit('setMessage', message);
        });
      },
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
    z-index: 1;
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