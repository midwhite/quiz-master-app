<template>
  <div id="EditQuizComponent">
    <div class="quiz-form">
      <quiz-form :target-quiz="quiz" @submit="onSubmit" @cancel="onCancel" />
    </div>
  </div>
</template>

<script>
  import { mapState, mapActions } from 'vuex';
  import QuizForm from './quiz-form';

  export default {
    computed: {
      ...mapState(['myQuizzes']),
      quiz() {
        const quizId = Number(this.$route.params.id);
        return this.myQuizzes.find(quiz => quiz.id === quizId);
      },
    },
    methods: {
      ...mapActions(['updateQuiz']),
      onSubmit({ quiz }) {
        const message = this.$t('messages.saved', [this.$t('models.quiz.name')]);
        this.updateQuiz({ quiz }).then(() => {
          this.$store.commit('setMessage', message);
        });
      },
      onCancel() {
        this.$router.go(-1);
      },
    },
    components: {
      QuizForm,
    },
  };
</script>

<style scoped>
  .quiz-form {
    padding: 15px 0px;
  }
</style>
