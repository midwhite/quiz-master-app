<template>
  <div id="QuizModeComponent">
    <div v-if="loaded">
      <router-view />
    </div>
  </div>
</template>

<script>
  import { mapActions } from 'vuex';

  export default {
    data: () => ({
      loaded: false,
    }),
    methods: {
      ...mapActions(['getQuizzes']),
    },
    created() {
      this.getQuizzes().then(() => {
        this.loaded = true;
      });
    },
  };
</script>

<style scoped>
  h1 {
    padding: 10px 0px;
    margin: 0px;
  }
  .menu-list {
    padding-top: 10px;
  }
</style>
