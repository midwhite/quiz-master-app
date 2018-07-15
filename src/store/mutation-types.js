import StorageService from '@/services/storage.service';

/* eslint-disable no-param-reassign */
export default {
  setMyQuizzes(state, { quizzes }) {
    state.myQuizzes = quizzes;
  },
  addMyQuizzes(state, { quiz }) {
    state.myQuizzes = [quiz].concat(state.myQuizzes);
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
};
/* eslint-enable */
