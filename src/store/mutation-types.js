/* eslint-disable no-param-reassign */

export default {
  setMyQuizzes(state, { quizzes }) {
    state.myQuizzes = quizzes;
  },
  signIn(state, { user }) {
    state.currentUser = user || {};
    state.isSignedIn = !!user;
    if (user) {
      localStorage.setItem('token', user.accessToken);
    } else {
      localStorage.removeItem('token');
    }
  },
};

/* eslint-enable */
