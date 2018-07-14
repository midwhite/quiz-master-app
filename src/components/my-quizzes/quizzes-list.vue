<template>
  <div id="QuizzesListComponent">
    <h1>QuizzesListComponent</h1>
    <div class="quizzes-list">
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
    },
    components: {
      Quiz,
    },
  };
</script>
