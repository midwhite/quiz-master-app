export default {
  components: {
    welcome: {
      title: 'クイズ王へようこそ！',
      signIn: 'ログイン',
      signUp: '無料登録',
    },
  },
  models: {
    user: {
      attributes: {
        email: 'メールアドレス',
        password: 'パスワード',
        passwordConfirmation: 'パスワード（確認）',
      },
    },
  },
  errors: {
    isRequired: '{0}をご入力ください。',
    isInvalid: '{0}が不正です。',
  },
};
