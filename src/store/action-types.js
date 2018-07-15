import api from './api';

/* eslint-disable arrow-body-style */
export default {
  getQuizzes: ({ commit }, params = {}) => {
    return api.get('/v1/quizzes', params).then((data) => {
      commit('setMyQuizzes', data);
    });
  },
  createQuiz: ({ commit }, { quiz }) => {
    return api.post('/v1/quizzes', { quiz }).then((data) => {
      commit('addMyQuizzes', data);
    });
  },
  updateQuiz: ({ commit }, { quiz }) => {
    return api.put(`/v1/quizzes/${quiz.id}`, { quiz }).then((data) => {
      commit('replaceMyQuizz', data);
    });
  },
  deleteQuiz: ({ commit }, { quiz }) => {
    return api.delete(`/v1/quizzes/${quiz.id}`).then(() => {
      commit('removeMyQuiz', { quiz });
    });
  },
  answerQuiz: ({ commit }, { quiz, answer }) => {
    return api.post(`/v1/quizzes/${quiz.id}/answer`, { answer }).then(({ result }) => {
      commit('setResultToAnswer', { quiz, result });
    });
  },
  signUp: ({ commit }, { form }) => new Promise((resolve, reject) => {
    api.submit('/v1/users/sign_up', form).then((data) => {
      commit('signIn', data);
      resolve(data);
    }).catch((error) => {
      reject(error);
    });
  }),
  signIn: ({ commit }, { form }) => new Promise((resolve, reject) => {
    api.submit('/v1/users/login', form).then((data) => {
      commit('signIn', data);
      resolve(data);
    }).catch((error) => {
      reject(error);
    });
  }),
  getMe: ({ commit }) =>
    api.get('/v1/users/me').then((data) => {
      commit('signIn', data);
    }),
  signOut: ({ commit }) => {
    commit('signIn', {});
  },
};
/* eslint-enable */
