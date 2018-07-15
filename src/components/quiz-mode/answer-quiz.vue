<template>
  <div id="AnswerQuizComponent" v-if="quiz">
    <h1>Quiz!</h1>
    <h2>{{ quiz.title }}</h2>
  </div>
</template>

<script>
  import { mapState, mapActions } from 'vuex';

  export default {
    computed: {
      ...mapState(['myQuizzes']),
      quiz() {
        const quizId = Number(this.$route.params.id);
        return this.myQuizzes.find(quiz => quiz.id === quizId);
      },
    },
    methods: {
      ...mapActions(['answerQuiz']),
    },
  };
</script>

<style scoped>
  
</style>
