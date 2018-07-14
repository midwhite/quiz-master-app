export default {
  components: {
    welcome: {
      title: 'クイズ王へようこそ！',
      signIn: 'ログイン',
      signUp: '無料登録',
      signOut: 'ログアウト',
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
    shouldBeMoreThanChars: '{0}は{1}文字以上ご入力ください。',
    shouldBeLessThanChars: '{0}の最大文字数は{1}文字です。',
  },
};
