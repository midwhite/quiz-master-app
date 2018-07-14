export default {
  components: {
    welcome: {
      title: 'クイズ王へようこそ！',
      signIn: 'ログイン',
      signUp: '無料登録',
      signOut: 'ログアウト',
    },
    myQuizzes: {
      title: 'クイズ一覧',
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
    quiz: {
      attributes: {
        answer: '回答',
        answers: '回答',
        canScorePartial: '部分点あり',
        createdAt: '作成日時',
        explanation: '解説',
        hasMultiAnswers: '複数回答',
        isSelection: '選択式',
        question: '問題',
        title: 'タイトル',
        updatedAt: '更新日時',
      },
      canScorePartial: {
        true: 'あり',
        false: '完全回答',
      },
      hasMultiAnswers: {
        true: '複数',
        false: '単一',
      },
      isSelection: {
        true: '選択式',
        false: '記述式',
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
