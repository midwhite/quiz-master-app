<template>
  <div id="quizzes-component">
    <div v-if="loaded">
      <router-view />
    </div>
  </div>
</template>

<script>
  import { mapState, mapActions } from 'vuex';

  export default {
    data: () => ({
      loaded: false,
    }),
    computed: {
      ...mapState(['quizzes']),
    },
    methods: {
      ...mapActions(['getQuizzes']),
    },
    created() {
      // display children components after quizzes loaded
      this.getQuizzes().then(() => {
        this.loaded = true;
      });
    },
  };
</script>
