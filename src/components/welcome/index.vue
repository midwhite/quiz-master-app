<template>
  <div id="WelcomeComponent">
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

<style scoped>
  .firstview-wrapper {
    position: relative;
    height: 500px;
    margin: 0px -15px;
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
