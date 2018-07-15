<template>
  <div class="quiz-form-component">
    <form @submit="onSubmit">
      <div class="form-group">
        <input type="text" name="title" v-model="quiz.title" class="form-control" :placeholder="$t('models.quiz.attributes.title')" />
      </div>

      <div class="form-group">
        <quill-editor :content="quiz.question" :options="questionEditorOption" @change="onQuestionEditorChange" />
      </div>

      <div class="form-group">
        <label for="quiz-form-answer">{{ $t('models.quiz.attributes.answer') }}</label>
        <input type="text" name="answer" v-model="quiz.answer" id="quiz-form-answer" class="form-control" :placeholder="$t('models.quiz.attributes.answer')" />
      </div>

      <div class="form-group">
        <label for="quiz-form-explanation">{{ $t('models.quiz.attributes.explanation') }}</label>
        <quill-editor :content="quiz.explanation" :options="explanationEditorOption" @change="onExplanationEditorChange" />
      </div>

      <div class="clearfix">
        <input type="submit" :value="$t('buttons.save')" id="quiz-form-submit" class="main-btn submit-btn" />
        <input type="button" :value="$t('buttons.cancel')" id="quiz-form-submit" class="main-btn submit-btn" @click="onCancel" />
      </div>
    </form>
  </div>
</template>

<script>
  import { quillEditor } from 'vue-quill-editor';
  import 'quill/dist/quill.core.css';
  import 'quill/dist/quill.snow.css';
  import 'quill/dist/quill.bubble.css';

  export default {
    data: () => ({
      quiz: {},
    }),
    props: ['target-quiz'],
    computed: {
      questionEditorOption() {
        return {
          placeholder: this.$t('models.quiz.attributes.question'),
        };
      },
      explanationEditorOption() {
        return {
          placeholder: this.$t('models.quiz.attributes.explanation'),
        };
      },
    },
    methods: {
      onQuestionEditorChange({ html }) {
        this.quiz.question = html;
      },
      onExplanationEditorChange({ html }) {
        this.quiz.explanation = html;
      },
      onSubmit(event) {
        event.preventDefault();
        this.$emit('submit', this.quiz);
      },
      onCancel() {
        this.$emit('cancel');
      },
    },
    components: {
      quillEditor,
    },
    created() {
      if (this.targetQuiz) {
        this.quiz = JSON.parse(JSON.stringify(this.targetQuiz));
      }
    },
  };
</script>

<style scoped>
  .submit-btn {
    width: 100px;
    float: left;
  }
</style>
