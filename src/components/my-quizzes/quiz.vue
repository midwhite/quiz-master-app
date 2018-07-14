<template>
  <div class="my-quiz-thumbnail-component">
    <p>{{ createdAt }}</p>
    <h2>{{ quiz.title }}</h2>
  </div>
</template>

<script>
  import moment from 'moment';

  export default {
    props: ['quiz'],
    computed: {
      createdAt() {
        const createdAt = moment(this.quiz.createdAt);
        return createdAt.format('YYYY-MM-DD hh:mm');
      },
    },
  };
</script>
