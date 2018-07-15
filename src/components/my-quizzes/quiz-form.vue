<template>
  <div class="quiz-form-component">
    <div class="errors">
      <div class="alert alert-danger" v-for="(error, i) of errors">
        <span>{{ error }}</span>
        <i class="close" @click="removeErrorMessage(i)">&times;</i>
      </div>
    </div>
    <form @submit="onSubmit">
      <div class="form-group">
        <input type="text" name="title" v-model="quiz.title" class="form-control" :placeholder="$t('models.quiz.attributes.title')" />
      </div>

      <div class="form-group">
        <quill-editor :content="quiz.question" :options="questionEditorOption" @change="onQuestionEditorChange" />
      </div>

      <div class="form-group">
        <label for="quiz-form-answer">{{ $t('models.quiz.attributes.answer') }}</label>
        <input type="text" name="answer" v-model="quiz.correctAnswer" id="quiz-form-answer" class="form-control" :placeholder="$t('models.quiz.attributes.answer')" />
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
      errors: [],
    }),
    props: ['target-quiz'],
    computed: {
      requiredProps: () => ['title', 'question', 'correctAnswer'],
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
      validateQuiz() {
        // initialize errors
        this.errors = [];
        // validate required values
        this.requiredProps.forEach((prop) => {
          if (!this.quiz[prop]) {
            const message = this.$t('errors.isRequired', [this.$t(`models.quiz.attributes.${prop}`)]);
            this.errors.push(message);
          }
        });
        // return result
        return this.errors.length === 0;
      },
      removeErrorMessage(i) {
        this.errors.splice(i, 1);
      },
      onSubmit(event) {
        event.preventDefault();
        if (this.validateQuiz()) {
          this.$emit('submit', { quiz: this.quiz });
        }
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
