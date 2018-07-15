<template>
  <div class="quiz-detail-component">
    <h3>{{ quiz.title }}</h3>
    <p class="title">{{ $t('models.quiz.attributes.question') }}</p>
    <div class="question-wrapper" v-html="quiz.question"></div>

    <div class="answer-wrapper" v-if="quiz.correctAnswer">
      <p class="title">{{ $t('models.quiz.attributes.answer') }}</p>
      <div>{{ quiz.correctAnswer }}</div>
    </div>

    <div class="answer-wrapper" v-if="quiz.correctAnswer">
      <p class="title">{{ $t('models.quiz.attributes.explanation') }}</p>
      <div v-if="!quiz.explanation">{{ $t('components.myQuizzes.noExplanation') }}</div>
      <div v-html="quiz.explanation" v-else></div>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['quiz'],
  };
</script>

<style scoped>
  .title {
    font-size: 18px;
    font-weight: bold;
    text-decoration: underline;
  }
  .answer-wrapper {
    margin: 30px 0px 10px;
  }
</style>
