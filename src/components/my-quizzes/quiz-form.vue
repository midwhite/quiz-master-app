<template>
  <div class="quiz-form-component">
    <form @submit="onSubmit">
      <div class="form-group">
        <input type="text" name="title" v-model="quiz.title" class="form-control" :placeholder="$t('models.quiz.attributes.title')" />
      </div>

      <div class="form-group">
        <textarea name="question" v-model="quiz.question" class="form-control" :placeholder="$t('models.quiz.attributes.question')"></textarea>
      </div>

      <div class="form-group">
        <p>{{ $t('models.quiz.attributes.isSelection') }}</p>
        <label for="quiz-form-is-selection-true">
          <input type="radio" name="isSelection" :value="true" v-model="quiz.isSelection" id="quiz-form-is-selection-true" />
          <span>{{ $t('models.quiz.isSelection.true') }}</span>
        </label>
        <label for="quiz-form-is-selection-false">
          <input type="radio" name="isSelection" :value="false" v-model="quiz.isSelection" id="quiz-form-is-selection-false" />
          <span>{{ $t('models.quiz.isSelection.false') }}</span>
        </label>
      </div>

      <div class="form-group">
        <label for="quiz-form-answer">{{ $t('models.quiz.attributes.answer') }}</label>
        <input type="text" name="answer" v-model="quiz.correctAnswer" id="quiz-form-answer" class="form-control" :placeholder="$t('models.quiz.attributes.answer')" />
      </div>

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
    created() {
      this.quiz.isSelection = !!this.quiz.isSelection;
    },
  };
</script>

<style scoped>
  .submit-btn {
    width: 100px;
  }
</style>
