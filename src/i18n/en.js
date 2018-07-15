export default {
  components: {
    welcome: {
      title: 'Welcome to QuizMaster!',
      signIn: 'Sign In',
      signUp: 'Sign Up',
      signOut: 'Sign Out',
    },
    myQuizzes: {
      title: 'Quiz List',
      newQuiz: 'New Quiz',
      noQuizFound: 'No quiz found. Please create your quiz!',
      noExplanation: 'No Explanation',
    },
    quizMode: {
      title: 'Quiz Mode',
      letsAnswer: 'Quiz!',
      result: 'Result',
      yourAnswer: 'Your Answer',
      correctAnswer: 'Correct Answer',
    },
  },
  models: {
    user: {
      attributes: {
        email: 'Email',
        password: 'Password',
        passwordConfirmation: 'Password (Confirmation)',
      },
    },
    quiz: {
      attributes: {
        answer: 'Answer',
        createdAt: 'created at',
        explanation: 'Explanation',
        options: 'Options',
        question: 'Question',
        title: 'Title',
        updatedAt: 'updated at',
      },
      result: {
        correct: 'Correct',
        incorrect: 'Incorrect',
      },
    },
  },
  buttons: {
    back: 'Back',
    cancel: 'Cancel',
    comfirm: 'Comfirm',
    create: 'Create',
    delete: 'Delete',
    edit: 'Edit',
    list: 'List',
    ok: 'OK',
    redo: 'Redo',
    save: 'Save',
    submit: 'Submit',
  },
  warnings: {
    beforeDelete: 'DELETE: Are you sure?',
  },
  errors: {
    isRequired: '{0} is required.',
    isInvalid: '{0} is invalid.',
    shouldBeMoreThanChars: '{0} should be more than {1} characters.',
    shouldBeLessThanChars: '{0} should be less than {1} characters.',
  },
};
