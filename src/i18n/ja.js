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
      newQuiz: '新規クイズ作成',
      noQuizFound: 'クイズがありません。新しいクイズを作成しましょう！',
      noExplanation: '解説はありません。',
    },
    quizMode: {
      title: 'クイズモード',
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
        createdAt: '作成日時',
        explanation: '解説',
        options: '選択肢',
        question: '問題',
        title: 'タイトル',
        updatedAt: '更新日時',
      },
    },
  },
  buttons: {
    back: '戻る',
    cancel: 'キャンセル',
    comfirm: '確認',
    create: '新規作成',
    edit: '編集',
    list: '一覧',
    save: '保存',
  },
  errors: {
    isRequired: '{0}をご入力ください。',
    isInvalid: '{0}が不正です。',
    shouldBeMoreThanChars: '{0}は{1}文字以上ご入力ください。',
    shouldBeLessThanChars: '{0}の最大文字数は{1}文字です。',
  },
};
