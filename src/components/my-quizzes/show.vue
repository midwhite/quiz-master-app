<template>
  <div id="ShowQuizComponent" v-if="quiz">
    <div class="quiz-detail">
      <quiz-detail :quiz="quiz" />
    </div>
    <div class="menu-list clearfix">
      <button @click="onDelete" class="danger-btn menu-item left">{{ $t('buttons.delete') }}</button>
      <router-link :to="{ name: 'EditQuiz', params: { id: quiz.id } }" class="main-btn menu-item right">{{ $t('buttons.edit') }}</router-link>
      <button @click="$router.go(-1)" class="default-btn menu-item right">{{ $t('buttons.back') }}</button>
    </div>
  </div>
</template>

<script>
  import { mapState, mapActions } from 'vuex';
  import QuizDetail from './quiz-detail';

  export default {
    computed: {
      ...mapState(['myQuizzes']),
      quiz() {
        const quizId = Number(this.$route.params.id);
        return this.myQuizzes.find(quiz => quiz.id === quizId);
      },
    },
    methods: {
      ...mapActions(['deleteQuiz']),
      onDelete() {
        const message = this.$t('messages.deleted', [this.$t('models.quiz.name')]);
        /* eslint-disable no-alert */
        if (confirm(this.$t('warnings.beforeDelete'))) {
          this.deleteQuiz({ quiz: this.quiz }).then(() => {
            this.$router.replace({ name: 'QuizzesList' });
            this.$store.commit('setMessage', message);
          });
        }
        /* eslint-enable */
      },
    },
    components: {
      QuizDetail,
    },
  };
</script>

<style scoped>
  .quiz-detail {
    padding: 10px 0px;
  }
  .menu-item {
    width: 100px;
  }
  .left {
    float: left;
  }
  .right {
    float: right;
  }
</style>
