<template>
  <div id="AnswerQuizComponent" v-if="quiz">
    <h1>{{ $t('components.quizMode.letsAnswer') }}</h1>
    <h2>{{ quiz.title }}</h2>
    <div v-html="quiz.question"></div>
    <div class="answer-wrapper">
      <form @submit="onSubmit" class="answer-form">
        <label for="quiz-mode-answer">{{ $t('models.quiz.attributes.answer') }}</label>
        <input type="text" name="answer" v-model="answer.content" id="quiz-mode-answer" class="form-control" :placeholder="$t('models.quiz.attributes.answer')" />
        <input type="submit" :value="$t('buttons.submit')" id="quiz-mode-answer-submit" class="main-btn submit-btn" />
      </form>
    </div>
  </div>
</template>

<script>
  import { mapState, mapActions } from 'vuex';

  export default {
    data: () => ({
      answer: {},
    }),
    computed: {
      ...mapState(['myQuizzes']),
      quiz() {
        const quizId = Number(this.$route.params.id);
        return this.myQuizzes.find(quiz => quiz.id === quizId);
      },
    },
    methods: {
      ...mapActions(['answerQuiz']),
      onSubmit(event) {
        event.preventDefault();
        if (this.answer.content) {
          this.answerQuiz({ answer: this.answer, quiz: this.quiz }).then(() => {
            this.$router.go(-1);
          });
        }
      },
    },
  };
</script>

<style scoped>
  .answer-wrapper {
    width: 80%;
    min-width: 300px;
    padding: 15px;
    margin: 0px auto;
    background: #EEE;
    box-shadow: 0px 0px 10px rgba(0,0,0,.5);
  }
  .submit-btn {
    width: 100px;
    margin: 15px auto 0px;
  }
</style>
