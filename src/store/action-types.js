import api from './api';

export default {
  signUp: ({ commit }, { form }) => {
    api.submit('/v1/users/sign_up', form).then((data) => {
      commit('signIn', data);
      localStorage.setItem('token', data.user && data.user.accessToken);
    });
  },
  signIn: () => {
    api.get('/v1/users/me').then((data) => {
      console.log(data);
    });
  },
};
