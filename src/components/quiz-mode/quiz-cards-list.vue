<template>
  <div class="quiz-cards-list-component">
    <div class="menu-list row">
      <div class="col">
        <router-link :to="{ name: 'QuizzesList' }" class="menu-item main-btn">{{ $t('components.myQuizzes.title') }}</router-link>
      </div>
      <div class="col">
        <router-link :to="{ name: 'NewQuiz' }" class="menu-item main-btn">{{ $t('components.myQuizzes.newQuiz') }}</router-link>
      </div>
    </div>
    <h1>{{ $t('components.quizMode.title') }}</h1>
    <div class="no-quiz" v-if="hasNoQuiz">
      <p><router-link :to="{ name: 'NewQuiz' }">{{ $t('components.myQuizzes.noQuizFound') }}</router-link></p>
    </div>
    <div class="row">
      <div :key="'quiz-mode-quiz-' + quiz.id" v-for="quiz of myQuizzes" class="col-4">
        <quiz-card :quiz="quiz" />
      </div>
    </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex';
  import QuizCard from './quiz-card';

  export default {
    computed: {
      ...mapState(['myQuizzes']),
      hasNoQuiz() {
        return this.myQuizzes.length === 0;
      },
    },
    components: {
      QuizCard,
    },
  };
</script>

<style scoped>
  h1 {
    padding: 10px 0px;
    margin: 0px;
  }
  .menu-list {
    padding-top: 10px;
  }
</style>
