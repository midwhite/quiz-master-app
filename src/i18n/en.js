export default {
  components: {
    welcome: {
      title: 'Welcome to QuizMaster!',
      signIn: 'Sign In',
      signUp: 'Sign Up',
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
  },
  errors: {
    isRequired: '{0} is required.',
    isInvalid: '{0} is invalid.',
  },
};
