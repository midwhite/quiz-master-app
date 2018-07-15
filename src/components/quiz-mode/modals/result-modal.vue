<template>
  <modal @close="$emit('close')">
    <h3 slot="header">{{ $t('components.quizMode.result') }}</h3>
    <div slot="body">
      <div class="result-wrapper">
        <img :src="iconUrl" class="result-icon" />
        <p class="result-message">{{ $t('models.quiz.result.' + resultName) }}</p>
      </div>
      <p class="title">{{ $t('components.quizMode.yourAnswer') }}</p>
      <div class="content">{{ answer.content }}</div>
      <p class="title">{{ $t('components.quizMode.correctAnswer') }}</p>
      <div class="content">{{ correctAnswer }}</div>
      <p class="title">{{ $t('models.quiz.attributes.explanation') }}</p>
      <div v-html="explanation" v-if="explanation"></div>
      <div class="no-explanation" v-else>{{ $t('components.myQuizzes.noExplanation') }}</div>
    </div>
    <div slot="footer">
      <div class="main-btn submit-btn" id="quiz-mode-result-ok-button" @click="onClick">
        {{ $t('buttons.ok') }}
      </div>
    </div>
  </modal>
</template>

<script>
  import Modal from '@/components/shared/modal';

  export default {
    props: ['answer', 'correct-answer', 'explanation'],
    computed: {
      resultName() {
        return this.answer.result ? 'correct' : 'incorrect';
      },
      iconUrl() {
        return `/static/img/quizzes/${this.resultName}.png`;
      },
    },
    methods: {
      onClick() {
        this.$emit('close');
      },
    },
    components: {
      Modal,
    },
  };
</script>

<style scoped>
  .result-wrapper {
    text-align: center;
  }
  .result-message {
    margin: 10px 0px;
    font-size: 18px;
  }
  .result-icon {
    width: 100px;
  }
  .title {
    font-size: 18px;
    font-weight: bold;
  }
  .content {
    margin: 0px 0px 30px;
  }
  .submit-btn {
    width: 100px;
    margin: 0px auto;
  }
</style>
