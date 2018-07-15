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
        answers: 'Answers',
        canScorePartial: 'Enable Partial Score',
        createdAt: 'created at',
        explanation: 'Explanation',
        hasMultiAnswers: 'Multiple Answers',
        isSelection: 'Selection',
        question: 'Question',
        title: 'Title',
        updatedAt: 'updated at',
      },
      canScorePartial: {
        true: 'enable',
        false: 'diable',
      },
      hasMultiAnswers: {
        true: 'enable',
        false: 'diable',
      },
      isSelection: {
        true: 'Yes',
        false: 'No',
      },
    },
  },
  buttons: {
    back: 'Back',
    edit: 'Edit',
  },
  errors: {
    isRequired: '{0} is required.',
    isInvalid: '{0} is invalid.',
    shouldBeMoreThanChars: '{0} should be more than {1} characters.',
    shouldBeLessThanChars: '{0} should be less than {1} characters.',
  },
};
