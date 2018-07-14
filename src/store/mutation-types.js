/* eslint-disable no-param-reassign */

export default {
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
