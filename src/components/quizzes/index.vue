<template>
  <div id="quizzes-component">
    <h1>QuizzesComponent</h1>
  </div>
</template>

<script>
  import { mapState, mapActions } from 'vuex';

  export default {
    computed: {
      ...mapState(['quizzes']),
    },
    methods: {
      ...mapActions(['getQuizzes']),
    },
    created() {
      this.getQuizzes();
    },
  };
</script>
