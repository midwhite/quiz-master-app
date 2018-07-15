<template>
  <div id="NewQuizComponent">
    <div class="menu-list clearfix">
      <router-link :to="{ name: 'QuizzesList' }" class="main-btn menu-item">{{ $t('buttons.list') }}</router-link>
    </div>
    <h1>{{ $t('components.myQuizzes.newQuiz') }}</h1>
    <quiz-form @submit="onSubmit" @cancel="onCancel" />
  </div>
</template>

<script>
  import { mapActions } from 'vuex';
  import QuizForm from './quiz-form';

  export default {
    data: () => ({
      newQuiz: {},
    }),
    methods: {
      ...mapActions(['createQuiz']),
      onSubmit({ quiz }) {
        this.createQuiz({ quiz }).then(() => {
          this.$router.go(-1);
        });
      },
      onCancel() {
        this.$router.go(-1);
      },
    },
    components: {
      QuizForm,
    },
  };
</script>

<style scoped>
  .menu-list {
    padding: 5px 0px;
    margin: 0px -15px;
  }
  .menu-item {
    width: 100px;
    float: left;
  }
</style>
