/* eslint-disable no-param-reassign */

export default {
  signIn(state, { user }) {
    state.currentUser = user || {};
    state.isSignedIn = !!user;
  },
};

/* eslint-enable */
