import StorageService from '@/services/storage.service';

/* eslint-disable no-param-reassign */
export default {
  setMyQuizzes(state, { quizzes }) {
    state.myQuizzes = quizzes;
  },
  addMyQuizzes(state, { quiz }) {
    state.myQuizzes = [quiz].concat(state.myQuizzes);
  },
  replaceMyQuizz(state, { quiz }) {
    const index = state.myQuizzes.findIndex(_quiz => _quiz.id === quiz.id);
    state.myQuizzes.splice(index, 1, quiz);
  },
  removeMyQuiz(state, { quiz }) {
    const index = state.myQuizzes.findIndex(_quiz => _quiz.id === quiz.id);
    state.myQuizzes.splice(index, 1);
  },
  setResultToAnswer(state, { quiz, result }) {
    // update quiz values
    const newQuiz = JSON.parse(JSON.stringify(quiz));
    newQuiz.answered = true;
    newQuiz.result = result;
    // replace old quiz
    const index = state.myQuizzes.findIndex(_quiz => _quiz.id === quiz.id);
    state.myQuizzes.splice(index, 1, newQuiz);
  },
  signIn(state, { user }) {
    // if use exists: sign in; else: sign out
    state.currentUser = user || {};
    state.isSignedIn = !!user;
    if (user) {
      StorageService.setToken(user.accessToken);
    } else {
      StorageService.removeToken();
    }
  },
  setMessage(state, message) {
    state.message = message;
  },
};
/* eslint-enable */
