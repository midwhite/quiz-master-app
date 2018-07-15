<template>
  <div id="EditQuizComponent">
    <div class="menu-list">
      <router-link :to="{ name: 'ShowQuiz', params: quiz.id }">{{ $t('buttons.back') }}</router-link>
    </div>
    <quiz-form :quiz="quiz" />
  </div>
</template>

<script>
  import { mapState } from 'vuex';
  import QuizForm from './quiz-form';

  export default {
    computed: {
      ...mapState(['myQuizzes']),
      quiz() {
        const quizId = Number(this.$route.params.id);
        return this.myQuizzes.find(quiz => quiz.id === quizId);
      },
    },
    components: {
      QuizForm,
    },
  };
</script>
