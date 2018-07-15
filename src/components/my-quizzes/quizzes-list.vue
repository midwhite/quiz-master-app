<template>
  <div id="QuizzesListComponent">
    <div class="menu-list clearfix">
      <router-link :to="{ name: 'NewQuiz' }" class="main-btn menu-item">{{ $t('buttons.create') }}</router-link>
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
    padding: 5px 0px;
    margin: 0px -15px;
  }
  .menu-item {
    width: 100px;
    float: left;
  }
</style>
