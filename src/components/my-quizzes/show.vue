<template>
  <div id="ShowQuizComponent">
    <h1>ShowQuizComponent</h1>
    <quiz-detail :quiz="quiz" />
  </div>
</template>

<script>
  import { mapState } from 'vuex';
  import QuizDetail from './quiz-detail';

  export default {
    computed: {
      ...mapState(['myQuizzes']),
      quiz() {
        const quizId = Number(this.$route.params.id);
        return this.myQuizzes.find(quiz => quiz.id === quizId);
      },
    },
    components: {
      QuizDetail,
    },
  };
</script>
