<template>
  <div class="quiz-component">
    <router-link :to="{ name: 'AnswerQuiz', params: { id: quiz.id } }" class="quiz-card-link">
      <h3>{{ quiz.title }}</h3>
      <p class="created-at">{{ createdAt }}</p>
      <img :src="resultMark" class="result-mark" v-if="resultMark" />
    </router-link>
  </div>
</template>

<script>
  import Util from '@/util';

  export default {
    props: ['quiz', 'current-user'],
    computed: {
      resultMark() {
        if (!this.quiz.answered) {
          return null;
        }
        const result = this.quiz.result ? 'correct' : 'incorrect';
        return `/static/img/quizzes/${result}.png`;
      },
      createdAt() {
        return Util.timeWithZone(this.quiz.createdAt, this.currentUser.timezone).format('YYYY-MM-DD HH:mm');
      },
    },
  };
</script>

<style scoped>
  h3 {
    font-size: 14px;
  }
  .quiz-component {
    position: relative;
    height: 150px;
    margin-bottom: 20px;
    box-shadow: 0px 0px 10px rgba(0,0,0,.5);
    cursor: pointer;
    overflow: hidden;
  }
  .created-at {
    position: absolute;
    left: 15px;
    right: 15px;
    bottom: 0px;
    font-size: 12px;
    text-align: right;
  }
  .quiz-card-link {
    height: 150px;
    padding: 15px;
    color: #212121;
    display: block;
    transition: all .3s 0s ease;
  }
  .quiz-card-link:hover {
    background: #EEE;
    color: #212121;
  }
  .result-mark {
    position: absolute;
    top: 0px;
    bottom: 0px;
    left: 0px;
    right: 0px;
    width: 50px;
    height: 50px;
    margin: auto;
  }
</style>
