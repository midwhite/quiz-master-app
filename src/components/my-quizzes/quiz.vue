<template>
  <div class="my-quiz-thumbnail-component">
    <p>{{ createdAt }}</p>
    <h2>{{ quiz.title }}</h2>
  </div>
</template>

<script>
  import { mapState } from 'vuex';
  import Util from '@/util';

  export default {
    props: ['quiz'],
    computed: {
      ...mapState(['currentUser']),
      createdAt() {
        const createdAt = Util.timeWithZone(this.quiz.createdAt, this.currentUser.timezone);
        return createdAt.format('YYYY-MM-DD HH:mm');
      },
    },
  };
</script>
