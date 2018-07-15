<template>
  <div class="quiz-component">
    <h3>{{ quiz.title }}</h3>
    <p class="created-at">{{ $t('models.quiz.attributes.createdAt') }}: {{ createdAt }}</p>
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
        return Util.timeWithZone(this.quiz.createdAt, this.currentUser.timezone).format('YYYY-MM-DD HH:mm');
      },
    },
  };
</script>

<style>
  .quiz-component {
    position: relative;
    height: 150px;
    padding: 15px;
    margin-bottom: 20px;
    box-shadow: 0px 0px 10px rgba(0,0,0,.5);
    cursor: pointer;
    overflow: hidden;
  }
  .created-at {
    position: absolute;
    left: 15px;
    right: 15px;
    bottom: 0px;
    text-align: right;
  }
</style>
