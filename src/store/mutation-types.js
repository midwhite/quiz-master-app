import StorageService from '@/services/storage.service';

/* eslint-disable no-param-reassign */
export default {
  setMyQuizzes(state, { quizzes }) {
    state.myQuizzes = quizzes;
  },
  signIn(state, { user }) {
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
