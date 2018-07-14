<template>
  <header id="header">
    <img :src="require('@/assets/images/shared/logo.png')" id="logo" />
    <div class="main-btn sign-in" @click="toggleSignInModal">{{ $t('components.welcome.signUp') }}</div>
    <sign-in-modal v-if="showSignInModal" @close="toggleSignInModal" />
  </header>
</template>

<script>
  import { mapState } from 'vuex';
  import SignInModal from '@/components/welcome/modals/sign-in-modal';

  export default {
    data: () => ({
      showSignInModal: false,
    }),
    computed: {
      ...mapState(['isSignedIn']),
    },
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
</style>