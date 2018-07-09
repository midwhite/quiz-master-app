<template>
  <header id="header">
    <img :src="require('@/assets/images/shared/logo.png')" id="logo" />
    <div class="sign-in">Sign In</div>
  </header>
</template>

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
    margin: 5px;
    padding: 6px 0;
    border: 1px solid $BaseColor;
    background: #FFF;
    color: $BaseColor;
    font-size: 18px;
    font-weight: bold;
    text-align: center;
    cursor: pointer;
    box-shadow: 0 0 0 rgba(0,0,0,.5);
    transition: all .3s 0s ease;
  }
  .sign-in:hover {
    background: $BaseColor;
    color: #FFF;
    box-shadow: 0 0 5px rgba(0,0,0,.5);
  }
</style>