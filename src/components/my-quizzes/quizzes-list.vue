<template>
  <div id="QuizzesListComponent">
    <div class="menu-list row">
      <div class="col">
        <router-link :to="{ name: 'NewQuiz' }" class="menu-item main-btn">{{ $t('components.myQuizzes.newQuiz') }}</router-link>
      </div>
      <div class="col">
        <router-link :to="{ name: 'QuizMode' }" class="menu-item main-btn">{{ $t('components.quizMode.title') }}</router-link>
      </div>
    </div>
    <h1>{{ $t('components.myQuizzes.title') }}</h1>
    <div class="no-quiz" v-if="hasNoQuiz">
      <p><router-link :to="{ name: 'NewQuiz' }">{{ $t('components.myQuizzes.noQuizFound') }}</router-link></p>
    </div>
    <div class="quizzes-list" v-else>
      <quiz :quiz="quiz" :key="'my-quiz-thumbnail-' + quiz.id" v-for="quiz of myQuizzes" />
    </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex';
  import Quiz from './quiz';

  export default {
    computed: {
      ...mapState(['myQuizzes']),
      hasNoQuiz() {
        return this.myQuizzes.length === 0;
      },
    },
    components: {
      Quiz,
    },
  };
</script>

<style lang="scss" scoped>
  @import '@/assets/css/variables.scss';

  h1 {
    padding: 10px 0px;
    margin: 0px;
  }
  .menu-list {
    padding-top: 10px;
  }
</style>
