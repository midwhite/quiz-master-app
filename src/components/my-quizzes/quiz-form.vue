<template>
  <div class="quiz-form-component">
    <form @submit="onSubmit">
      <input type="submit" :value="$t('buttons.save')" id="quiz-form-submit" class="main-btn submit-btn" />
    </form>
  </div>
</template>

<script>
  export default {
    props: ['quiz'],
    methods: {
      onSubmit(event) {
        event.preventDefault();
        this.$emit('submit', this.quiz);
      },
      onCancel() {
        this.$emit('cancel');
      },
    },
  };
</script>

<style scoped>
  .submit-btn {
    width: 100px;
  }
</style>
