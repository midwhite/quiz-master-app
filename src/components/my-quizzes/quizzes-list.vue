<template>
  <div id="QuizzesListComponent">
    <div class="menu-list row">
      <div class="col">
        <router-link :to="{ name: 'QuizMode' }" class="menu-item main-btn" v-if="!hasNoQuiz">{{ $t('components.quizMode.title') }}</router-link>
      </div>
      <div class="col">
        <router-link :to="{ name: 'NewQuiz' }" class="menu-item main-btn">{{ $t('components.myQuizzes.newQuiz') }}</router-link>
      </div>
    </div>
    <h1>{{ $t('components.myQuizzes.title') }}</h1>
    <div class="no-quiz" v-if="hasNoQuiz">
      <p><router-link :to="{ name: 'NewQuiz' }">{{ $t('components.myQuizzes.noQuizFound') }}</router-link></p>
    </div>
    <div class="quizzes-list" v-else>
      <quiz :quiz="quiz" :user="currentUser" :key="'my-quiz-thumbnail-' + quiz.id" v-for="quiz of quizzes" />
    </div>
    <div class="pagination-wrapper" v-if="hasNextPage">
      <div class="load-more" @click="goNextPage">{{ $t('components.myQuizzes.nextPage') }}</div>
    </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex';
  import Quiz from './quiz';

  export default {
    data: () => ({
      page: 1,
      size: 5,
    }),
    computed: {
      ...mapState(['myQuizzes', 'currentUser']),
      quizzes() {
        // pagination
        const position = [];
        position.push(this.size * (this.page - 1));
        position.push(this.size * this.page);
        return this.myQuizzes.slice(...position);
      },
      hasNoQuiz() {
        return this.myQuizzes.length === 0;
      },
      hasNextPage() {
        return this.myQuizzes.length > this.size;
      },
    },
    methods: {
      goNextPage() {
        if (this.hasNextPage) { this.size += 5; }
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
  .pagination-btn {
    padding: 20px;
    font-size: 20px;
    text-align: center;
  }
  .load-more {
    padding: 10px 0px;
    margin: 20px 0px;
    border: 1px solid $BaseColor;
    background: #FFF;
    color: $BaseColor;
    font-weight: bold;
    text-align: center;
    cursor: pointer;
    transition: all .3s 0s ease;
  }
  .load-more:hover {
    background: $BaseColorLight;
  }
</style>
