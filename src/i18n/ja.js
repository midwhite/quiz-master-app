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
      letsAnswer: 'クイズ！',
      result: '結果',
      yourAnswer: 'あなたの回答',
      correctAnswer: '模範回答',
    },
    config: {
      language: 'Switch to English',
    },
    errors: {
      notFound: '404 Not Found',
      notFoundMessage: 'お探しのページが見つかりませんでした。',
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
      name: 'クイズ',
      attributes: {
        answer: '回答',
        correctAnswer: '模範回答',
        createdAt: '作成日時',
        explanation: '解説',
        options: '選択肢',
        question: '問題',
        title: 'タイトル',
        updatedAt: '更新日時',
      },
      result: {
        correct: '正解',
        incorrect: '不正解',
      },
    },
  },
  buttons: {
    back: '戻る',
    cancel: 'キャンセル',
    comfirm: '確認',
    create: '新規作成',
    delete: '削除',
    edit: '編集',
    list: '一覧',
    ok: 'OK',
    redo: 'やり直す',
    save: '保存',
    submit: '送信',
  },
  messages: {
    created: '{0}を新規作成しました。',
    deleted: '{0}を削除しました。',
    saved: '{0}を保存しました。',
    thanksForSignUp: 'ご登録ありがとうございます！',
    thanksForSignIn: 'ログインしました',
    thanksForSignOut: 'ログアウトしました',
  },
  warnings: {
    beforeDelete: '本当に削除しますか？',
  },
  errors: {
    isRequired: '{0}をご入力ください。',
    isInvalid: '{0}が不正です。',
    shouldBeMoreThanChars: '{0}は{1}文字以上ご入力ください。',
    shouldBeLessThanChars: '{0}の最大文字数は{1}文字です。',
  },
};
