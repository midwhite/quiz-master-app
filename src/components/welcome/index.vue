<template>
  <div id="WelcomeComponent" class="container-fluid">
    <header id="header">
      <img :src="require('@/assets/images/shared/logo.png')" id="logo" />
      <div class="main-btn sign-in" @click="toggleSignInModal">{{ $t('components.welcome.signUp') }}</div>
    </header>
    <div class="firstview-wrapper">
      <div class="firstview-cover">
        <h1>{{ $t('components.welcome.title') }}</h1>
        <div class="main-btn sign-up-btn" @click="toggleSignInModal">{{ $t('components.welcome.signIn') }}</div>
      </div>
    </div>
    <sign-in-modal v-if="showSignInModal" @close="toggleSignInModal" />
  </div>
</template>

<script>
  import SignInModal from '@/components/welcome/modals/sign-in-modal';

  export default {
    data: () => ({
      showSignInModal: false,
    }),
    methods: {
      toggleSignInModal() {
        this.showSignInModal = !this.showSignInModal;
      },
    },
    components: {
      SignInModal,
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
    box-shadow: 0 0 10px rgba(0,0,0,.5);
  }
  #logo {
    height: 40px;
    margin: 5px;
  }
  .sign-in {
    position: absolute;
    width: 100px;
    top: 0px;
    right: 0px;
  }
  .firstview-wrapper {
    position: relative;
    height: 500px;
    margin: 50px -15px 0px;
    background-image: url('/static/img/welcome/firstview-pc.jpg');
    background-position: center;
    background-size: cover;
  }
  .firstview-cover {
    position: absolute;
    top: 0px;
    bottom: 0px;
    left: 0px;
    right: 0px;
    background: rgba(255,255,255,.3);
  }
  h1 {
    position: absolute;
    left: 0px;
    right: 0px;
    top: 10%;
    text-align: center;
    text-shadow: 1px 1px 3px rgba(0,0,0,.5);
  }
  .sign-up-btn {
    position: absolute;
    left: 10px;
    right: 10px;
    bottom: 15%;
    max-width: 300px;
    margin: 0px auto;
    font-size: 30px;
  }
</style>
