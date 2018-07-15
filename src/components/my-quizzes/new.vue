<template>
  <div id="NewQuizComponent">
    <h1>{{ $t('components.myQuizzes.newQuiz') }}</h1>
    <quiz-form @submit="onSubmit" @cancel="onCancel" />
  </div>
</template>

<script>
  import { mapActions } from 'vuex';
  import QuizForm from './quiz-form';

  export default {
    data: () => ({
      newQuiz: {},
    }),
    methods: {
      ...mapActions(['createQuiz']),
      onSubmit({ quiz }) {
        this.createQuiz({ quiz }).then(() => {
          this.$router.go(-1);
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
  h1 {
    padding-top: 5px;
  }
</style>
