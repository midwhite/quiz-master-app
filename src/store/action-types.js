import api from './api';

/* eslint-disable arrow-body-style */
export default {
  getQuizzes({ commit }, params = {}) {
    return api.get('/v1/quizzes', params).then((data) => {
      commit('setMyQuizzes', data);
    });
  },
  createQuiz({ commit }, { quiz }) {
    return api.post('/v1/quizzes', { quiz }).then((data) => {
      commit('addMyQuizzes', data);
      return data;
    });
  },
  updateQuiz({ commit }, { quiz }) {
    return api.put(`/v1/quizzes/${quiz.id}`, { quiz }).then((data) => {
      commit('replaceMyQuizz', data);
    });
  },
  deleteQuiz({ commit }, { quiz }) {
    return api.delete(`/v1/quizzes/${quiz.id}`).then(() => {
      commit('removeMyQuiz', { quiz });
    });
  },
  answerQuiz({ commit }, { quiz, answer }) {
    return api.post(`/v1/quizzes/${quiz.id}/check`, { answer }).then((data) => {
      commit('setResultToAnswer', data);
      return data;
    });
  },
  signUp({ commit }, { form }) {
    return api.submit('/v1/users/sign_up', form).then((data) => {
      commit('signIn', data);
    });
  },
  signIn({ commit }, { form }) {
    return api.submit('/v1/users/login', form).then((data) => {
      commit('signIn', data);
    });
  },
  getMe({ commit }) {
    return api.get('/v1/users/me').then((data) => {
      commit('signIn', data);
    });
  },
  signOut({ commit }) {
    return new Promise((resolve) => {
      commit('signIn', {});
      resolve();
    });
  },
};
/* eslint-enable */
