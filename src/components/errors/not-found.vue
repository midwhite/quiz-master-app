<template>
  <div id="NotFoundComponent">
    <h1>{{ $t('components.errors.notFound') }}</h1>
    <p class="message">{{ $t('components.errors.notFoundMessage') }}</p>
    <router-link :to="{ path: '/' }" class="main-btn back-link">{{ $t('buttons.back') }}</router-link>
  </div>
</template>

<style scoped>
  #NotFoundComponent {
    text-align: center;
  }
  h1 {
    margin-top: 30%;
    font-size: 30px;
  }
  .message {
    margin: 0px 30px;
  }
  .back-link {
    max-width: 250px;
    margin: 20px auto 30%;
    display: block;
  }
</style>
