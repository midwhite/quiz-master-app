import api from './api';

export default {
  signUp: ({ commit }, { form }) => new Promise((resolve, reject) => {
    api.submit('/v1/users/sign_up', form).then((data) => {
      commit('signIn', data);
      localStorage.setItem('token', data.user && data.user.accessToken);
      resolve(data);
    }).catch((error) => {
      reject(error);
    });
  }),
  signIn: ({ commit }) => new Promise((resolve, reject) => {
    api.get('/v1/users/me').then((data) => {
      commit('signIn', data);
      resolve(data);
    }).catch((error) => {
      reject(error);
    });
  }),
  signOut: ({ commit }) => {
    localStorage.removeItem('token');
    commit('signIn', {});
  },
};
