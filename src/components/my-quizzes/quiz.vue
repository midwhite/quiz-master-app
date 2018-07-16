<template>
  <div class="my-quiz-thumbnail-component row">
    <div class="col">
      <router-link :to="{ name: 'ShowQuiz', params: { id: quiz.id } }" class="my-quiz-link">
        <p class="created-at">{{ createdAt }}</p>
        <h2>{{ quiz.title }}</h2>
      </router-link>
    </div>
  </div>
</template>

<script>
  import Util from '@/util';

  export default {
    props: ['quiz', 'user'],
    computed: {
      createdAt() {
        const createdAt = Util.timeWithZone(this.quiz.createdAt, this.user.timezone);
        return createdAt.format('YYYY-MM-DD HH:mm');
      },
    },
  };
</script>

<style scoped>
  .my-quiz-thumbnail-component:hover {
    background: #EEE;
  }
  .my-quiz-link {
    color: #212121;
  }
  .created-at {
    margin: 5px 0px;
  }
</style>
