<template>
  <header id="header">
    <router-link to="/">
      <img :src="require('@/assets/images/shared/logo.png')" id="logo" />
    </router-link>
    <div class="menu-icon-wrapper" @click="toggleMenu">
      <img :src="require('@/assets/images/shared/menu.png')" id="menu-icon" />
    </div>
    <div class="header-menu-wrapper" :class="{ show: showDropdownMenu }" :style="headerMenuStyle" @click="toggleMenu">
      <div class="header-menu-item" @click="onSwitchLanguage">{{ $t('components.config.language') }}</div>
      <div class="header-menu-item" @click="onSignOut">{{ $t('components.welcome.signOut') }}</div>
    </div>
  </header>
</template>

<script>
  import { mapActions } from 'vuex';
  import StorageService from '@/services/storage.service';

  export default {
    data: () => ({
      showDropdownMenu: false,
    }),
    computed: {
      headerMenuStyle() {
        return {
          height: `${window.innerHeight}px`,
        };
      },
    },
    methods: {
      ...mapActions(['signOut']),
      toggleMenu() { this.showDropdownMenu = !this.showDropdownMenu; },
      onSwitchLanguage() {
        const currentLocale = this.$i18n.locale;
        const nextLocale = (currentLocale === 'ja') ? 'en' : 'ja';
        this.$i18n.locale = nextLocale;
        StorageService.setLocale(nextLocale);
      },
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
  .menu-icon-wrapper {
    position: absolute;
    top: 0px;
    right: 0px;
    width: 30px;
    margin: 10px;
    cursor: pointer;
  }
  #menu-icon {
    width: 100%;
  }
  .header-menu-wrapper {
    position: absolute;
    width: 50%;
    right: -53%;
    top: 0px;
    background: #FFF;
    box-shadow: 0px 0px 10px rgba(0,0,0,.5);
    transition: all .3s 0s ease;
  }
  .header-menu-wrapper.show {
    right: 0%;
  }
  .header-menu-item {
    padding: 10px;
    cursor: pointer;
  }
  .header-menu-item:hover {
    background: #424242;
    color: #FFF;
  }
</style>